import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft, Palette, Wine, Map, Sparkles } from "lucide-react"

const masterclasses = [
  {
    id: "wine",
    title: "Живопись вином",
    subtitle: "День 4 — Долина Бабочек",
    image: "https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/062c8968-d029-4e5d-82f8-d6695821d58d.jpg",
    icon: Wine,
    color: "from-rose-500/20 to-white/5",
    ring: "ring-rose-500/30",
    accent: "text-rose-400",
    accentBg: "bg-rose-500/20",
    description: "Уникальная техника, в которой вместо красок используется настоящее красное вино. Разные сорта дают разные оттенки — от нежно-розового до глубокого бордо.",
    details: [
      "Работаем с настоящим вином разных сортов",
      "Создаём пейзажи в тёплых винных оттенках",
      "Все материалы предоставляются",
      "Опыт рисования не нужен",
    ],
    result: "Забираете домой картину, написанную вином на фоне Долины Бабочек",
  },
  {
    id: "mixmedia",
    title: "Mix-media: Карта в искусстве",
    subtitle: "День 6 — Прозрачные бухты",
    image: "https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/2ae2f25f-b3e4-4e6f-9b31-412f27f4e598.jpg",
    icon: Map,
    color: "from-blue-500/20 to-white/5",
    ring: "ring-blue-500/30",
    accent: "text-blue-400",
    accentBg: "bg-blue-500/20",
    description: "Смешанная техника, где старые карты и морские материалы превращаются в арт-объект. Работаем с акрилом, пастелью, коллажем и природными текстурами.",
    details: [
      "Коллаж из карт, акрила и пастели",
      "Смешиваем несколько техник в одной работе",
      "Используем находки с берега — песок, листья",
      "Каждая работа абсолютно уникальна",
    ],
    result: "Уникальный арт-объект в технике mixed-media — ваша личная карта путешествия",
  },
  {
    id: "mosaic",
    title: "Мозаика из смальты",
    subtitle: "День 7 — Секретные бухты",
    image: "https://cdn.poehali.dev/projects/4b283937-2c9c-42d8-b425-4d4f953b8cc8/bucket/75d9d8ef-5ca4-416b-be37-10a1adfcb9ef.jpg",
    icon: Palette,
    color: "from-teal-500/20 to-white/5",
    ring: "ring-teal-500/30",
    accent: "text-teal-400",
    accentBg: "bg-teal-500/20",
    description: "Создаём мозаику из цветной смальты и природных материалов, найденных на пляже — ракушки, морское стекло, камешки. Древняя техника в современном прочтении.",
    details: [
      "Работаем с настоящей итальянской смальтой",
      "Добавляем ракушки, морское стекло, камни",
      "Осваиваем технику мозаичной кладки",
      "Медитативный и расслабляющий процесс",
    ],
    result: "Мозаичное панно из смальты и природных материалов — память о море на всю жизнь",
  },
]

const Masterclasses = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">На главную</span>
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 ring-1 ring-amber-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">3 мастер-класса включены в тур</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Арт-мастер-классы</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Творчество под открытым небом с художницей Ингой Савиной. Опыт не нужен — научим всему на месте
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {masterclasses.map((mc) => (
            <div key={mc.id} className={`rounded-2xl md:rounded-3xl bg-gradient-to-br ${mc.color} ring-1 ${mc.ring} backdrop-blur overflow-hidden`}>
              <div className="grid md:grid-cols-[1fr_1fr]">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img src={mc.image} alt={mc.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${mc.accentBg} flex items-center justify-center`}>
                      <mc.icon className={`w-5 h-5 ${mc.accent}`} />
                    </div>
                    <span className="text-white/50 text-sm">{mc.subtitle}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{mc.title}</h2>
                  <p className="text-white/70 leading-relaxed mb-6">{mc.description}</p>
                  <ul className="space-y-2 mb-6">
                    {mc.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${mc.accentBg} flex-shrink-0`}></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                    <p className="text-sm"><span className="font-semibold text-white">Результат:</span> <span className="text-white/60">{mc.result}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Все материалы включены в стоимость тура</h3>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Краски, кисти, холсты, смальта, клей — всё предоставляем. Просто приходите и творите
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
              Забронировать тур с мастер-классами
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Masterclasses
