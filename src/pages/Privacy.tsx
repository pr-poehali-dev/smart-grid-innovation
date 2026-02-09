import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Compass } from "lucide-react"

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
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

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Политика конфиденциальности</h1>
        
        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
              которую Организатор туров Инга Савина (далее — Организатор) может получить о Пользователе во время использования сайта и оформления бронирования туров.
            </p>
            <p className="mt-4">
              Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации. 
              В случае несогласия с этими условиями Пользователь должен воздержаться от использования сайта и оформления бронирования.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Персональная информация, которую мы собираем</h2>
            <p>При оформлении бронирования тура Организатор собирает следующую информацию:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Дополнительная информация, предоставленная добровольно (пожелания, вопросы)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Цели сбора и обработки персональных данных</h2>
            <p>Персональные данные Пользователя используются исключительно в следующих целях:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Связь с Пользователем для подтверждения бронирования тура</li>
              <li>Предоставление информации о туре, программе, условиях участия</li>
              <li>Оформление договора на оказание туристических услуг</li>
              <li>Информирование об изменениях в программе тура</li>
              <li>Обработка запросов и обращений Пользователя</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Правовые основания обработки персональных данных</h2>
            <p>
              Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ 
              «О персональных данных» на основании согласия субъекта персональных данных на обработку его персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Способы и сроки обработки персональных данных</h2>
            <p className="mb-4">
              Обработка персональных данных Пользователя осуществляется с использованием автоматизированных систем 
              и без использования средств автоматизации.
            </p>
            <p>
              Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, 
              но не более 5 лет с момента последнего взаимодействия с Пользователем.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Меры по защите персональных данных</h2>
            <p>
              Организатор принимает необходимые и достаточные организационные и технические меры для защиты 
              персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, 
              изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Передача персональных данных третьим лицам</h2>
            <p>
              Персональные данные Пользователя не передаются третьим лицам, за исключением случаев, 
              прямо предусмотренных законодательством РФ или с согласия Пользователя.
            </p>
            <p className="mt-4">
              В рамках организации туров персональные данные могут быть переданы:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Партнерам по оказанию туристических услуг (отели, транспортные компании) — только в объеме, необходимом для исполнения договора</li>
              <li>Государственным органам — при наличии законных оснований</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Права субъекта персональных данных</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Получать информацию о том, какие персональные данные обрабатываются Организатором</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия Организатора в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Изменение Политики конфиденциальности</h2>
            <p>
              Организатор имеет право вносить изменения в настоящую Политику конфиденциальности. 
              Новая редакция Политики вступает в силу с момента ее размещения на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Контактная информация</h2>
            <p>
              По всем вопросам, касающимся обработки персональных данных, Пользователь может обратиться к Организатору 
              через форму обратной связи на сайте или по контактным данным, указанным на сайте.
            </p>
          </section>

          <div className="pt-8 text-sm text-white/60">
            <p>Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/booking">
            <Button size="lg" className="rounded-full px-8">
              Вернуться к бронированию
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Privacy
