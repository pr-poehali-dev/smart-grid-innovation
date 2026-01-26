import { Compass, Lock, Sparkles, Mountain, Wallet, Leaf, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кто такая Инга Савина?",
      answer:
        "Инга — художник и автор этих туров. Она совмещает любовь к морю, искусству и путешествиям, создавая уникальные маршруты с арт-сессиями.",
    },
    {
      question: "Какой формат тура?",
      answer:
        "Это комбинированное путешествие: проживание на яхте, треккинг по Ликийской тропе, творческие мастер-классы и посещение исторических мест.",
    },
    {
      question: "Нужна ли специальная подготовка?",
      answer:
        "Нет, подходит для всех уровней физической подготовки. Треккинг неспешный, с фотостопами. Опыт яхтинга не требуется — с вами капитан и команда.",
    },
    {
      question: "Сколько человек в группе?",
      answer: "Максимум 10 человек — это позволяет создать комфортную и тёплую атмосферу в группе.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/b93f7de1-df3d-4518-ab93-98ea1a754bf7.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Compass className="w-5 h-5" />
            <span className="font-medium text-balance">Инга Савина</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#route" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">Туры</a>
            <a href="#about" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">О проекте</a>
            <a href="#gallery" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">Галерея</a>
            <a href="#faq" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">Вопросы</a>
            <a href="#contact" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">Контакты</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Арт-туры: яхтинг + Ликийская тропа + творчество</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Море, горы и искусство</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Путешествие с художником Ингой Савиной: 8 дней на яхте по бирюзовым бухтам Турции, треккинг по Ликийской тропе и арт-мастер-классы под открытым небом. Для тех, кто хочет вдохновения, новых впечатлений и творческой перезагрузки.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Забронировать тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
              asChild
            >
              <a href="#route">Смотреть маршрут</a>
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Идеальный баланс приключений, расслабления и арт-вдохновения</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left - Text */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Кто я и почему со мной?</h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p className="text-xl text-white font-medium">
                  Меня зовут Инга Савина — я художник, куратор выставок, автор творческих мастер-классов и этих арт-туров
                </p>
                <p>
                  Уже 3 года веду арт-мастер-классы и влюблена в море. Эти туры родились из желания соединить три вещи, которые меня вдохновляют: искусство, путешествия и Ликийское побережье
                </p>
                <p>
                  <strong className="text-white">Что отличает мои туры:</strong> это не просто яхтинг и не просто треккинг — это микс моря, гор и творчества. Мы плывём по бирюзным бухтам Турции, поднимаемся по древней Ликийской тропе с видами на Средиземное море, а вечером создаём арт-объекты
                </p>
                <p>
                  Я показываю простые и медитативные техники: живопись вином, mix-media с картами, мозаика из смальты и природных материалов с берега. Даже если вы никогда не занимались творчеством — это ваш шанс попробовать в самой вдохновляющей обстановке
                </p>
                <p className="text-white font-medium">
                  Приезжайте за тем, чтобы перезагрузиться, найти вдохновение и привезти домой не только фото, но и свои работы
                </p>
              </div>
            </div>

            {/* Right - Images Grid */}
            <div className="space-y-6">
              {/* Main portrait */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img
                  src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/2ab875e9-4679-4ae7-9c67-49db8c2d8060.jpg"
                  alt="Инга Савина"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Paradise Beach */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10">
                <img
                  src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/76c5c983-07fc-45dd-a5bc-64190f98d941.jpg"
                  alt="Paradise Beach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert-Led Tours */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Арт-мастер-классы</h3>
              <p className="text-white/80 leading-relaxed">Живопись вином, Mix-media и мозаика из смальты под открытым небом</p>
            </div>

            {/* Lycian Way Trekking */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Море + Тропа</h3>
              <p className="text-white/80 leading-relaxed">Яхтинг по бирюзным бухтам и треккинг по Ликийской тропе</p>
            </div>

            {/* All-Inclusive Package */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Маленькая группа</h3>
              <p className="text-white/80 leading-relaxed">До 10 человек — комфорт, поддержка и тёплая компания</p>
            </div>

            {/* Eco-Friendly Caving */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Без подготовки</h3>
              <p className="text-white/80 leading-relaxed">Не нужна физподготовка или опыт яхтинга</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="route" className="relative z-10 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Маршрут вашего путешествия</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                8 дней незабываемых впечатлений: яхтинг, треккинг, творчество и тёплая компания до 10 человек.
              </p>
            </div>

            {/* Detailed Journey Timeline */}
            <div className="space-y-6 mb-12">
              {/* Day 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Встреча — Фетхие</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Встреча в аэропорту Даламан, групповой трансфер в Фетхие. Расслабление в турецком хаммаме. Заселение на яхту, прогулка по старому городу. Ужин-знакомство с группой — делимся ожиданиями от путешествия.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Даламан</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Хаммам</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Заселение на яхту</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Олюдениз — арка Ликийской тропы</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Яхтинг вдоль побережья в сторону Олюдениз. Прогулка к знаменитой арке — символическому началу Ликийской тропы. Свободное время на легендарном пляже Олюдениз, купание и релакс. Вечерняя якорная стоянка, обсуждение планов.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Олюдениз</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Арка тропы</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Пляж</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Острова залива Фетхие</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Морская прогулка по живописным бухтам и островам залива. Купание, снорклинг, солнечные ванны и полная перезагрузка. Обед и ужин на яхте, уютные посиделки с видом на закат над водой.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Острова</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Снорклинг</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Закат</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 4</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Долина Бабочек — арт-мастер-класс</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Якорная стоянка в заповедной Долине Бабочек. Прогулка к водопаду, изучение местной природы. Мастер-класс "Живопись вином" — создаём арт-объекты. День для фото, отдыха и неспешных бесед
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Долина Бабочек</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Водопад</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Живопись вином</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 5 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 5</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Кабак — треккинг — Paradise & Secret Beach</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Утренний переход в Кабак, начало пешего похода по Ликийской тропе. Треккинг с видами на лазурную Турцию: от Кабака до Paradise Beach (~3 км), неспешный маршрут с фотостопами, 3+ часа удовольствия. Купание, пикник на Paradise Beach. Для желающих — проход до Secret Beach (ещё 20–30 минут), уединённый и невероятно красивый пляж. Возвращение по тропе или лодочный трансфер. Ужин и обмен впечатлениями на яхте.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Треккинг 3 км</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Paradise Beach</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Secret Beach</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 6 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 6</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Прозрачные бухты — Mix-media</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Уединённый яхтинг вдоль скалистого побережья, остановки для купания и релакса в прозрачных бухтах. Творческий мастер-класс "Mix-media: Карта в искусстве" на берегу — создаём уникальные арт-объекты. Фотосессия и совместное творчество. Вечер на палубе под звёздами
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Уединённые бухты</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Mix-media</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Звёздная ночь</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 7 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 7</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Секретные бухты — мозаика из смальты</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Утренний яхтинг в уединённые бухты. Мастер-класс по созданию мозаики из смальты и природных материалов, найденных на пляже — ракушки, камни, морское стекло. Создаём уникальные арт-объекты на память. Купание, снорклинг. Неспешное возвращение в Фетхие. Заселение в отель с бассейном. Прощальный ужин в ресторане с видом на море
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Мозаика из смальты</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Природные материалы</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Отель с бассейном</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Прощальный ужин</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 8 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-white/40 min-w-[80px]">День 8</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4">Финал путешествия</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Завтрак в отеле, свободное утро для отдыха или последних покупок. Трансфер в аэропорт Даламан. Вылет домой с чемоданом впечатлений, новыми друзьями и творческими работами. До встречи в следующем путешествии!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Завтрак</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Трансфер</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Даламан</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
                asChild
              >
                <a href="#contact">Забронировать тур</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Галерея моментов</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Взгляд на путешествие глазами художника — море, древние города и творческий процесс.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/737ad2e8-0ac4-42b7-badf-4de8c8447a39.jpg" 
                alt="Ликийское побережье"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/4e545080-d6a0-4c74-bcd3-53ba30551644.jpg" 
                alt="Мастер-класс на пленэре"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/ab73aaf4-3000-42a6-a95d-50e4a57cf257.jpg" 
                alt="Древние руины"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/30fee0a7-88df-4986-9724-a54c60ba1fd3.jpg" 
                alt="Творческий процесс"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/fe6714be-61fe-4663-81ec-d0a0f2f71b51.jpg" 
                alt="Материалы для творчества"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/fdd8a51f-a1e6-4318-ace0-eea7a2717a58.jpg" 
                alt="Яхта в бухте"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Survey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Расскажите о своих ожиданиях</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
                Чтобы сделать ваше путешествие идеальным, мы хотим узнать, что для вас важно.
              </p>
            </div>

            <form className="space-y-8">
              <div>
                <label className="block text-lg font-semibold mb-4">Что вы ждёте от этого путешествия?</label>
                <div className="space-y-3">
                  {[
                    'Творческое вдохновение и мастер-классы',
                    'Знакомство с новыми людьми',
                    'Активный отдых и треккинг',
                    'Релакс и перезагрузка',
                    'Красивые фото и впечатления'
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span className="text-white/90">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-lg font-semibold mb-4">Есть ли у вас опыт яхтинга или треккинга?</label>
                <textarea
                  id="experience"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="Расскажите немного о себе..."
                />
              </div>

              <div>
                <label htmlFor="questions" className="block text-lg font-semibold mb-4">Есть ли вопросы или пожелания?</label>
                <textarea
                  id="questions"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="Мы учтём все ваши пожелания..."
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
                >
                  Отправить и забронировать
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Отзывы участников</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Что говорят те, кто уже путешествовал с нами по Ликийскому побережью.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
              <div className="mb-6">
                <h4 className="font-semibold text-lg">Евгения Миронова</h4>
                <p className="text-white/60 text-sm">Дизайнер, Тула</p>
                <p className="text-white/50 text-xs">Сентябрь 2024</p>
              </div>
              <p className="text-white/80 leading-relaxed">
                "Ездили на девичник с подругами. Всё было организовано хорошо: красивые места, вкусная еда, интересные мастер-классы. Получилось отдохнуть и попробовать что-то новое. Привезли домой свои картины."
              </p>
            </div>

            {/* Review 2 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
              <div className="mb-6">
                <h4 className="font-semibold text-lg">Альбина Смирнова</h4>
                <p className="text-white/60 text-sm">Бухгалтер, Тула</p>
                <p className="text-white/50 text-xs">Сентябрь 2024</p>
              </div>
              <p className="text-white/80 leading-relaxed">
                "Первый опыт на яхте оказался приятнее, чем ожидала. Каждый день что-то новое: купались, гуляли по горам, рисовали. Компания подобралась хорошая. Вернулись отдохнувшими."
              </p>
            </div>

            {/* Review 3 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
              <div className="mb-6">
                <h4 className="font-semibold text-lg">Евгения Миллер</h4>
                <p className="text-white/60 text-sm">Предприниматель, Тула</p>
                <p className="text-white/50 text-xs">Сентябрь 2024</p>
              </div>
              <p className="text-white/80 leading-relaxed">
                "Отмечала день рождения на яхте. Хотели необычный формат — получилось. Яхта, красивые места, мастер-классы. Мне понравился Mix-media — не думала, что смогу так рисовать. Хороший отдых."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Tips Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Что взять с собой</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Для вашего комфорта и безопасности рекомендуем подготовить следующие вещи.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="space-y-8">
                {/* Одежда и обувь */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-3xl">👕</span>
                    Одежда и обувь
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Лёгкая одежда (шорты, футболки, сарафаны)</li>
                    <li>• Удобные кроссовки или треккинговые сандалии (обязательно для тропы)</li>
                    <li>• Лёгкие сланцы для яхты и пляжа</li>
                    <li>• Ветровка или кофта на вечер</li>
                    <li>• Купальники/плавки (2 комплекта)</li>
                    <li>• Панамка, кепка или бандана</li>
                    <li>• Носки (трекинговые + обычные)</li>
                    <li>• Плащ-дождевик</li>
                  </ul>
                </div>

                {/* Оборудование и аксессуары */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-3xl">🎒</span>
                    Оборудование и аксессуары
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Маленькая сумка или мешочек для прогулок</li>
                    <li>• Бутылка для воды</li>
                    <li>• Солнцезащитные очки и крем (SPF от 30)</li>
                    <li>• Полотенце для пляжа + для душа</li>
                    <li>• Мини-аптечка (личные лекарства, пластыри)</li>
                    <li>• Средство от комаров</li>
                    <li>• Зарядные устройства, Power Bank</li>
                    <li>• Водонепроницаемый чехол для техники</li>
                  </ul>
                </div>

                {/* Для плавания */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-3xl">🤿</span>
                    Для плавания
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Ласты, маска и трубка для снорклинга (по желанию)</li>
                    <li>• Часть снаряжения можно взять на яхте</li>
                    <li>• Пляжная сумка</li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                {/* Для творчества */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-3xl">🎨</span>
                    Для творчества (по желанию)
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Любимые альбомы, скетчбуки, акварель, маркеры</li>
                    <li>• Всё необходимое для мастер-классов выдаём на месте!</li>
                  </ul>
                </div>

                {/* Документы и финансы */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-3xl">📄</span>
                    Документы и финансы
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Паспорт (+ копия на телефоне)</li>
                    <li>• Медицинская страховка</li>
                    <li>• Наличные в евро/долларах, банковская карта</li>
                    <li>• Возможность обмена есть на месте</li>
                  </ul>
                </div>

                {/* Другие полезности */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    Другие полезности
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Фотоаппарат/GoPro</li>
                    <li>• Ушные беруши, маска для сна</li>
                    <li>• Личная косметика (шампунь, мыло, зубная паста)</li>
                    <li>• Любимая книга, наушники, плейлист</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Yacht Gallery */}
            <div className="mt-16 space-y-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Ваш дом на воде — яхта Bavaria</h3>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Комфортабельное размещение в каютах по 2 человека с удобными спальными местами
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Yacht exterior */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <img
                    src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/0cf31084-431e-4915-98bb-f6c58a8ae386.jpg"
                    alt="Яхта Bavaria"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                {/* Yacht sailing */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <img
                    src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/64e13c47-70f5-4ae8-8b14-6f6db11094e2.jpg"
                    alt="Яхта под парусом"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                {/* Cabin interior */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <img
                    src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/c64486f2-634e-49f9-b6db-0ff14dd0c288.jpg"
                    alt="Каюта на яхте"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                {/* Salon interior */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                  <img
                    src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/ebe2cfff-9936-4fca-b08b-cabb53ca3442.jpg"
                    alt="Салон яхты"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                {/* Paradise Beach view */}
                <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 md:col-span-2">
                  <img
                    src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/f52f12cc-4879-47db-b855-14803d30bf8c.jpg"
                    alt="Вид на Paradise Beach с Ликийской тропы"
                    className="w-full h-full object-cover aspect-[21/9]"
                  />
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                Важно
              </h3>
              <p className="text-white/80 leading-relaxed">
                У нас лёгкий треккинг, поэтому туристические рюкзаки не нужны! Берите небольшой мягкий чемодан или сумку — так удобнее разместить вещи в каюте. Всё для творчества мы предоставим, но если есть любимые материалы — захватите!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Что включено в стоимость</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Всё для вашего комфортного и незабываемого путешествия уже учтено.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included Items */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  Включено
                </h3>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Проживание</h4>
                  <p className="text-white/80">7 ночей на яхте в комфортных каютах + 1 ночь в отеле с бассейном в Фетхие</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Питание</h4>
                  <p className="text-white/80">Полный пансион на яхте: завтраки, обеды, ужины. Свежие продукты, турецкая кухня, вегетарианские опции</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Трансферы</h4>
                  <p className="text-white/80">Групповой трансфер из/в аэропорт Даламан, все переезды по программе</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Яхта Bavaria</h4>
                  <p className="text-white/80">Комфортабельное размещение в каюте по 2 человека, опытный капитан и команда</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Творческие мастер-классы</h4>
                  <p className="text-white/80">3 мастер-класса с Ингой: "Живопись вином", "Mix-media" и "Мозаика из смальты", все материалы предоставляются</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Экскурсии и активности</h4>
                  <p className="text-white/80">Треккинг по Ликийской тропе, посещение Долины Бабочек, прогулка к арке тропы, снорклинг</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Хаммам</h4>
                  <p className="text-white/80">Турецкая баня в первый день для расслабления после перелёта</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Сопровождение</h4>
                  <p className="text-white/80">Инга Савина — ваш гид, художник и вдохновитель на протяжении всего путешествия</p>
                </div>
              </div>

              {/* Not Included Items */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-3xl">ℹ️</span>
                  Оплачивается дополнительно
                </h3>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Авиабилеты</h4>
                  <p className="text-white/80">Перелёт до/из аэропорта Даламан</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Медицинская страховка</h4>
                  <p className="text-white/80">Рекомендуем оформить страховку для путешествий</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Личные расходы</h4>
                  <p className="text-white/80">Сувениры, дополнительные напитки, личные покупки</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Прощальный ужин в ресторане</h4>
                  <p className="text-white/80">Ужин в последний вечер в Фетхие (по меню, ~20-30€)</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <h4 className="font-semibold text-lg mb-3">Входные билеты</h4>
                  <p className="text-white/80">Входы в заповедные зоны и национальные парки (если потребуется, минимальные суммы)</p>
                </div>

                {/* Price Info Box */}
                <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-2 ring-white/20 backdrop-blur p-8 mt-8">
                  <div className="text-center">
                    <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Стоимость тура</p>
                    <p className="text-5xl font-bold mb-2">от 1200€</p>
                    <p className="text-white/60 text-sm mb-6">на человека</p>
                    <div className="space-y-2 mb-6 text-left">
                      <p className="text-white/80 text-sm">✓ Два варианта размещения на яхте</p>
                      <p className="text-white/80 text-sm">✓ Готовим самостоятельно (основные продукты включены)</p>
                    </div>
                    <Button 
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 rounded-full px-8 w-full"
                      asChild
                    >
                      <a href="#contact">Забронировать тур</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Даты туров 2026</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Выберите удобную дату для вашего арт-путешествия по Ликийскому побережью
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Tour 1 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 hover:bg-white/10 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <span className="text-sm font-medium">Майские праздники</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">9 — 16 мая</h3>
                <p className="text-white/60 text-sm">2026 год</p>
              </div>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 w-full"
                asChild
              >
                <a href="#contact">Забронировать</a>
              </Button>
            </div>

            {/* Tour 2 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 hover:bg-white/10 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <span className="text-sm font-medium">Май</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">16 — 23 мая</h3>
                <p className="text-white/60 text-sm">2026 год</p>
              </div>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 w-full"
                asChild
              >
                <a href="#contact">Забронировать</a>
              </Button>
            </div>

            {/* Tour 3 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 hover:bg-white/10 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <span className="text-sm font-medium">Бархатный сезон</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">19 — 26 сентября</h3>
                <p className="text-white/60 text-sm">2026 год</p>
              </div>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 w-full"
                asChild
              >
                <a href="#contact">Забронировать</a>
              </Button>
            </div>

            {/* Tour 4 */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 hover:bg-white/10 transition-colors">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <span className="text-sm font-medium">Бархатный сезон</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">26 сентября — 3 октября</h3>
                <p className="text-white/60 text-sm">2026 год</p>
              </div>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 w-full"
                asChild
              >
                <a href="#contact">Забронировать</a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              Количество мест ограничено — максимум 10 человек в группе. Рекомендуем бронировать заранее.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Все, что нужно знать о яхт-туре: от формата до бронирования места в этом уникальном путешествии.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg font-semibold pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
              <p className="text-xl text-white/80 leading-relaxed text-pretty">
                По вопросам яхт-туров, дат и бронирования — свяжитесь с нами. Мы отвечаем в течение 24 часов.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите о своих пожеланиях и интересе к туру..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black text-white hover:bg-black/90 rounded-lg h-[50px] font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Отправить запрос
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <a href="mailto:savinainga@gmail.com" className="text-white/70 hover:text-white transition-colors">
                      savinainga@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Конфиденциальность</h4>
                    <p className="text-white/70">Ваши данные защищены и не передаются третьим лицам.</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                      alt="Инга Савина"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Инга Савина</h4>
                      <p className="text-gray-600">Художник и автор туров</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="py-16">
            {/* Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Compass className="w-6 h-6" />
                  <span className="text-xl font-semibold">Инга Савина</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Авторские яхт-туры, где море встречается с искусством. Мы помогаем увидеть красоту в моменте и открыть новые грани Средиземноморья.
                </p>
              </div>

              {/* Expedition Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ТУРЫ</h3>
                <ul className="space-y-3">
                  {["Маршруты", "Даты и цены", "Что взять", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О ПРОЕКТЕ</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      Об Инге Савиной
                    </a>
                  </li>
                  <li>
                    <a href="#route" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      Философия
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      Отзывы
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/sav_ingart" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      Блог
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Справочный центр", "Контакты", "Вопросы и ответы", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости о турах</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Инга Савина</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index