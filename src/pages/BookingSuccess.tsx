import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle, Compass, Mail, Phone } from "lucide-react"

const BookingSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="relative z-10 flex items-center justify-center p-4 md:p-6">
        <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Compass className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-medium text-sm md:text-base">Инга Савина</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 ring-4 ring-green-500/30 mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Оплата прошла успешно!
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Спасибо за бронирование! Вы сделали первый шаг к незабываемому путешествию.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6">Что дальше?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Подтверждение на email</h3>
                <p className="text-white/70">
                  Мы отправили подтверждение оплаты на ваш email. Проверьте папку "Спам", если письмо не пришло.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Личный контакт</h3>
                <p className="text-white/70">
                  Я свяжусь с вами в течение 24 часов для обсуждения деталей путешествия, 
                  ответов на вопросы и передачи всей необходимой информации.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Детали путешествия</h3>
                <p className="text-white/70">
                  За 2-3 недели до начала тура вы получите полную программу с маршрутом, 
                  списком необходимых вещей и контактами экстренной связи.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-2">Финальный платёж</h3>
                <p className="text-white/70">
                  Оставшиеся 50% стоимости оплачиваются капитану яхты наличными по прибытии. 
                  Это оплата за проживание на яхте, питание и работу команды.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6">Остались вопросы?</h2>
          
          <div className="space-y-4">
            <a 
              href="mailto:info@ingasavina.ru" 
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5 text-white/60" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-white/60">info@ingasavina.ru</div>
              </div>
            </a>

            <a 
              href="https://wa.me/79123456789" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 text-white/60" />
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-sm text-white/60">+7 (912) 345-67-89</div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/5 border-white/20 hover:bg-white/10">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookingSuccess
