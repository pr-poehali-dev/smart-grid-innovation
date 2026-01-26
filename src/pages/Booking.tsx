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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const tours: Tour[] = [
    { id: "may1", dates: "9 — 16 мая 2026", label: "Майские праздники", available: true },
    { id: "may2", dates: "16 — 23 мая 2026", label: "Май", available: true },
    { id: "sep1", dates: "19 — 26 сентября 2026", label: "Бархатный сезон", available: true },
    { id: "sep2", dates: "26 сентября — 3 октября 2026", label: "Бархатный сезон", available: true }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const selectedTourInfo = tours.find(t => t.id === selectedTour)
    
    setShowSuccessModal(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setSelectedTour("")
    setGuests(2)
    
    try {
      await fetch('https://functions.poehali.dev/2eeee9fa-08f6-4675-8994-a60805039821', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'booking',
          tour: selectedTourInfo?.dates || 'Не выбрано',
          guests: guests,
          ...formData
        })
      })
    } catch (error) {
      console.error('Error sending booking:', error)
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

        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
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
            </div>

            {/* Price Info */}
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-white/70 text-sm mb-1">Стоимость тура</div>
                  <div className="text-3xl font-bold">от 1200€</div>
                </div>
                <div className="text-right">
                  <div className="text-white/70 text-sm mb-1">Участников</div>
                  <div className="text-3xl font-bold">{guests}</div>
                </div>
              </div>
              <div className="text-white/60 text-sm space-y-1">
                <div>✓ 7 ночей на яхте + 1 ночь в отеле</div>
                <div>✓ Питание, трансферы, экскурсии</div>
                <div>✓ 3 арт-мастер-класса с материалами</div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={!selectedTour}
              className="w-full bg-white text-black hover:bg-white/90 rounded-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отправить заявку на бронирование
            </Button>

            <p className="text-white/50 text-sm text-center">
              После отправки заявки мы свяжемся с вами в течение 24 часов для подтверждения брони и уточнения деталей
            </p>
          </form>
        </div>
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
