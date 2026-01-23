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
            <span className="text-sm font-medium">Авторские яхт-туры</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Море, горы и творчество.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Яркий и вдохновляющий маршрут для тех, кто мечтает соединить море, горы, творчество и новые знакомства. Яхтинг по самому живописному побережью Ликии, прогулки по Ликийской тропе, секретные пляжи и пленэры с мастер-классами.
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert-Led Tours */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Мастер-классы</h3>
              <p className="text-white/80 leading-relaxed">Живопись вином и Mix-media на пленэрах с Ингой.</p>
            </div>

            {/* Lycian Way Trekking */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Секретные пляжи</h3>
              <p className="text-white/80 leading-relaxed">Paradise Beach, Secret Beach и уединённые бухты Ликии.</p>
            </div>

            {/* All-Inclusive Package */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Маленькая группа</h3>
              <p className="text-white/80 leading-relaxed">До 10 человек — комфорт, поддержка и тёплая компания.</p>
            </div>

            {/* Eco-Friendly Caving */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Без подготовки</h3>
              <p className="text-white/80 leading-relaxed">Не нужна физподготовка или опыт яхтинга.</p>
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
                    <h3 className="text-2xl font-semibold mb-4">Долина Бабочек — арт-пленэр</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Якорная стоянка в заповедной Долине Бабочек. Прогулка к водопаду, изучение местной природы. Мастер-класс "Живопись вином" — пробуем новые техники на пленэре. День для фото, отдыха и неспешных бесед.
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
                    <h3 className="text-2xl font-semibold mb-4">Прозрачные бухты — Mix-media Арт-день</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Уединённый яхтинг вдоль скалистого побережья, остановки для купания и релакса в прозрачных бухтах. Творческий мастер-класс "Mix-media: Карта в искусстве" на берегу — создаём уникальные арт-объекты. Фотосессия и совместное творчество. Вечер на палубе под звёздами.
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
                    <h3 className="text-2xl font-semibold mb-4">Возвращение в Фетхие — отель и прощальный ужин</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Ленивое утро, последний совместный завтрак на яхте. Неспешное возвращение в Фетхие. Заселение в отель с бассейном — комфорт, возможность расслабиться и привести себя в порядок. Прогулка по городу, шопинг, прощальный ужин в ресторане с видом на море.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Отель с бассейном</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Прогулка по городу</span>
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
              >
                Узнать даты туров
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
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/fdd8a51f-a1e6-4318-ace0-eea7a2717a58.jpg" 
                alt="Яхта в Средиземном море"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/57d80e82-e6bc-435a-b11958ec584e.jpg" 
                alt="Ликийские гробницы"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/files/1b25b3f4-a1a5-4c03-8341-7c02cda8c9c1.jpg" 
                alt="Творческий процесс на яхте"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop" 
                alt="Бухта на закате"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop" 
                alt="Треккинг по Ликийской тропе"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur h-80">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop" 
                alt="Древние руины Патары"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
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
                    <p className="text-white/70">info@ingasavina-tours.com</p>
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
                  {["Об Инге Савиной", "Философия", "Отзывы", "Блог"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
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
