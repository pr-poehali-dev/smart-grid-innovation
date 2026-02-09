import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Compass, Calendar, Users, Check, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

interface Tour {
  id: string
  dates: string
  label: string
  available: boolean
}

const Booking = () => {
  const [selectedTour, setSelectedTour] = useState<string>("")
  const [guests, setGuests] = useState<number>(2)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [activeTab, setActiveTab] = useState<'booking' | 'masterclasses'>('booking')
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
    consent: false
  })

  const PRICE_PER_PERSON = 1200
  const getDiscount = () => guests >= 4 ? 0.1 : 0
  const calculateTotal = () => {
    const basePrice = PRICE_PER_PERSON * guests
    const discount = basePrice * getDiscount()
    return Math.round(basePrice - discount)
  }
  const calculateDeposit = () => Math.round(calculateTotal() * 0.4)

  const tours: Tour[] = [
    { id: "may1", dates: "9 — 16 мая 2026", label: "Майские праздники", available: true },
    { id: "may2", dates: "16 — 23 мая 2026", label: "Май", available: true },
    { id: "sep1", dates: "19 — 26 сентября 2026", label: "Бархатный сезон", available: true },
    { id: "sep2", dates: "26 сентября — 3 октября 2026", label: "Бархатный сезон", available: true }
  ]

  const validateForm = () => {
    if (formData.honeypot) {
      console.log('Bot detected')
      return false
    }
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Пожалуйста, заполните все обязательные поля: имя, email и телефон')
      return false
    }
    
    if (!selectedTour) {
      alert('Пожалуйста, выберите даты тура')
      return false
    }
    
    if (!formData.consent) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных')
      return false
    }
    
    return true
  }

  const handleBookingOnly = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    const selectedTourInfo = tours.find(t => t.id === selectedTour)
    const tourToSend = selectedTourInfo?.dates || 'Не выбрано'
    
    try {
      await fetch('https://functions.poehali.dev/2eeee9fa-08f6-4675-8994-a60805039821', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'booking',
          tour: tourToSend,
          guests: guests,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          payment_status: 'pending'
        })
      })
      
      setShowSuccessModal(true)
      setFormData({ name: '', email: '', phone: '', message: '', honeypot: '', consent: false })
      setSelectedTour("")
      setGuests(2)
    } catch (error) {
      console.error('Error sending booking:', error)
      alert('Ошибка при отправке заявки. Попробуйте позже.')
    }
  }

  const handlePayment = async (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    const selectedTourInfo = tours.find(t => t.id === selectedTour)
    const tourToSend = selectedTourInfo?.dates || 'Не выбрано'
    
    try {
      const paymentResponse = await fetch('https://functions.poehali.dev/eb3987f2-5633-463a-801b-411ea2866f14', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount_eur: calculateDeposit(),
          description: `Тур ${tourToSend}, ${guests} чел. (предоплата 40%)`,  
          return_url: `${window.location.origin}/booking/success`,
          email: formData.email,
          phone: formData.phone
        })
      })
      
      const paymentData = await paymentResponse.json()
      
      if (paymentData.error) {
        alert(`Ошибка: ${paymentData.error}`)
        return
      }
      
      if (paymentData.confirmation_url) {
        setExchangeRate(paymentData.exchange_rate)
        
        await fetch('https://functions.poehali.dev/2eeee9fa-08f6-4675-8994-a60805039821', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'booking',
            tour: tourToSend,
            guests: guests,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            payment_id: paymentData.id,
            amount_eur: paymentData.amount_eur,
            amount_rub: paymentData.amount_rub,
            exchange_rate: paymentData.exchange_rate
          })
        })
        
        window.location.href = paymentData.confirmation_url
      } else {
        alert('Ошибка создания платежа. Попробуйте позже.')
      }
    } catch (error) {
      console.error('Error creating payment:', error)
      alert('Ошибка при создании платежа. Попробуйте позже.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <Link to="/" className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-medium text-sm md:text-base">Назад на главную</span>
        </Link>
        
        <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Compass className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-medium text-sm md:text-base">Инга Савина</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Забронировать тур</h1>
          <p className="text-lg md:text-xl text-white/80">
            Выберите даты путешествия и заполните форму. Мы свяжемся с вами для подтверждения брони.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab('booking')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'booking'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Бронирование
          </button>
          <button
            onClick={() => setActiveTab('masterclasses')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'masterclasses'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Мастер-классы
          </button>
        </div>

        {activeTab === 'masterclasses' ? (
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12">
            <h2 className="text-3xl font-bold mb-8">Творческие мастер-классы</h2>
            
            <div className="space-y-8">
              {/* Мастер-класс 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🍷</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Живопись вином</h3>
                    <p className="text-white/60 text-sm mb-4">День 4 — Долина Бабочек</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Уникальная техника создания абстрактных картин с помощью красного вина. Работаем на плотной бумаге или холсте, создавая плавные переходы и текстуры. Вино реагирует с материалами, создавая неповторимые оттенки от бледно-розового до насыщенного бордового.
                </p>
                <div className="space-y-2 text-sm text-white/70">
                  <div>✓ Все материалы предоставляются</div>
                  <div>✓ Подходит для любого уровня подготовки</div>
                  <div>✓ Работы можно забрать с собой</div>
                  <div>✓ Длительность: 2-3 часа</div>
                </div>
              </div>

              {/* Мастер-класс 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🗺️</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Mix-media: Карта в искусстве</h3>
                    <p className="text-white/60 text-sm mb-4">День 6 — Прозрачные бухты</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Создаём арт-объекты, комбинируя винтажные карты с акварелью, тушью и коллажем. Используем морскую тематику: старые морские карты, компасы, координаты памятных мест. Каждая работа становится уникальным воспоминанием о путешествии.
                </p>
                <div className="space-y-2 text-sm text-white/70">
                  <div>✓ Винтажные карты и материалы предоставляются</div>
                  <div>✓ Работа в смешанной технике</div>
                  <div>✓ Персонализированные сувениры</div>
                  <div>✓ Длительность: 2-3 часа</div>
                </div>
              </div>

              {/* Мастер-класс 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🎨</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Мозаика из смальты</h3>
                    <p className="text-white/60 text-sm mb-4">День 7 — Секретные бухты</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Древнее искусство мозаики в современной интерпретации. Используем цветную смальту (стеклянные кусочки) и природные материалы с пляжа: ракушки, гладкие камни, морское стекло. Создаём небольшие панно на морскую тематику — идеальный арт-объект на память.
                </p>
                <div className="space-y-2 text-sm text-white/70">
                  <div>✓ Профессиональная смальта всех оттенков</div>
                  <div>✓ Основа и материалы для крепления</div>
                  <div>✓ Собираем природные материалы на пляже</div>
                  <div>✓ Работы упаковываются для транспортировки</div>
                  <div>✓ Длительность: 3-4 часа</div>
                </div>
              </div>

              {/* Важная информация */}
              <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 p-6 md:p-8">
                <h4 className="text-xl font-bold mb-4">Важно знать</h4>
                <div className="space-y-3 text-white/80">
                  <p>• <strong>Опыт не требуется</strong> — все техники объясняются с нуля, помогаю каждому участнику индивидуально</p>
                  <p>• <strong>Все материалы включены</strong> в стоимость тура: холсты, краски, смальта, основы, инструменты</p>
                  <p>• <strong>Работы можно забрать домой</strong> — упаковываем так, чтобы довезти в целости</p>
                  <p>• <strong>Атмосфера</strong> — мастер-классы проходят на природе, под открытым небом с видом на море</p>
                  <p>• <strong>Можно приносить свои материалы</strong> — если у вас есть любимые краски, скетчбуки или инструменты</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => setActiveTab('booking')}
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Перейти к бронированию
              </Button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12">
          <form onSubmit={handleBookingOnly} className="space-y-8">
            {/* Tour Selection */}
            <div>
              <label className="block text-xl font-semibold mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Выберите даты тура
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tours.map((tour) => (
                  <button
                    key={tour.id}
                    type="button"
                    onClick={() => setSelectedTour(tour.id)}
                    disabled={!tour.available}
                    className={`p-6 rounded-2xl text-left transition-all ${
                      selectedTour === tour.id
                        ? 'bg-white/20 ring-2 ring-white/40'
                        : 'bg-white/5 ring-1 ring-white/10 hover:bg-white/10'
                    } ${!tour.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm mb-3">
                        {tour.label}
                      </div>
                      {selectedTour === tour.id && (
                        <Check className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <div className="text-2xl font-bold mb-1">{tour.dates}</div>
                    {!tour.available && (
                      <div className="text-sm text-white/50">Мест нет</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests Selection */}
            <div>
              <label className="block text-xl font-semibold mb-6 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Количество участников
              </label>
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl font-bold transition-colors"
                >
                  −
                </button>
                <div className="text-4xl font-bold w-16 text-center">{guests}</div>
                <button
                  type="button"
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl font-bold transition-colors"
                >
                  +
                </button>
                <div className="ml-4 text-white/60">
                  <div className="text-sm">До 6 человек — яхта Bavaria</div>
                  <div className="text-sm">Больше 6 — просторная яхта</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Контактная информация</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="+7 (900) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Комментарий (необязательно)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none resize-none"
                  placeholder="Особые пожелания, вопросы..."
                />
              </div>

              <input
                type="text"
                name="website"
                value={formData.honeypot}
                onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                className="absolute opacity-0 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div className="pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    className="mt-1 w-5 h-5 rounded border-2 border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-white/30 cursor-pointer"
                    required
                  />
                  <span className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                    <Link to="/privacy" className="text-white underline hover:text-white/80">
                      политикой конфиденциальности
                    </Link>
                    {' '}и{' '}
                    <Link to="/terms" className="text-white underline hover:text-white/80">
                      договором оферты
                    </Link>
                    , а также с Федеральным законом №152-ФЗ «О персональных данных»
                  </span>
                </label>
              </div>
            </div>

            {/* Price Info */}
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-2 ring-white/20 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-white/70 text-sm mb-1">Стоимость за человека</div>
                    <div className="text-2xl font-bold">{PRICE_PER_PERSON}€</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/70 text-sm mb-1">Участников</div>
                    <div className="text-2xl font-bold">{guests}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {getDiscount() > 0 && (
                    <div className="rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 ring-1 ring-amber-500/30 p-4 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">🎉</span>
                        <span className="font-bold text-amber-400">Скидка за группу!</span>
                      </div>
                      <div className="text-white/80 text-sm">
                        10% скидка при бронировании от 4 человек
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-white/80">Общая стоимость:</span>
                    <span className="text-3xl font-bold">{calculateTotal()}€</span>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80">Предоплата (40%):</span>
                      <span className="text-2xl font-bold text-green-400">{calculateDeposit()}€</span>
                    </div>
                    {exchangeRate && (
                      <div className="text-white/70 text-sm mb-2">
                        ≈ {Math.round(calculateDeposit() * exchangeRate).toLocaleString('ru-RU')} ₽ (курс ЦБ: {exchangeRate.toFixed(2)} ₽)
                      </div>
                    )}
                    <div className="text-white/60 text-sm">
                      Оставшиеся {calculateTotal() - calculateDeposit()}€ (60%) оплачиваются капитану по прибытии
                    </div>
                  </div>
                </div>

                <div className="text-white/60 text-sm space-y-1 pt-4 border-t border-white/10">
                  <div>✓ 7 ночей на яхте + 1 ночь в отеле</div>
                  <div>✓ Питание, трансферы, экскурсии</div>
                  <div>✓ 3 арт-мастер-класса с материалами</div>
                  <div className="pt-2 text-white/50 italic">
                    * Оплата принимается в рублях по курсу ЦБ РФ на день платежа
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                type="button"
                onClick={handlePayment}
                size="lg"
                disabled={!selectedTour}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 rounded-full py-6 text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/30"
              >
                💳 Оплатить {calculateDeposit()}€ (предоплата 40%)
              </Button>

              <Button
                type="submit"
                size="lg"
                variant="outline"
                disabled={!selectedTour}
                className="w-full bg-white/5 ring-1 ring-white/20 text-white hover:bg-white/10 rounded-full py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Забронировать без оплаты
              </Button>
            </div>

            <p className="text-white/50 text-sm text-center">
              При бронировании без оплаты я свяжусь с вами в течение 24 часов и вышлю ссылку для оплаты
            </p>
          </form>
        </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Заявка принята!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ваша бронь зарегистрирована. Мы свяжемся с вами в ближайшее время для подтверждения и уточнения деталей.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-black text-white hover:bg-black/90 rounded-lg h-[50px] font-semibold"
                >
                  Продолжить
                </Button>
                <Link to="/">
                  <Button
                    variant="outline"
                    className="w-full rounded-lg h-[50px] font-semibold"
                  >
                    Вернуться на главную
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Booking