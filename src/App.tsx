import {
  BarChart3,
  Bell,
  Package,
  DollarSign,
  Brain,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,230,118,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,255,163,0.06),transparent_50%)]"></div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,230,118,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          <g opacity="0.4">
            <path d="M 100 600 Q 300 400, 500 500 T 900 400 L 900 800 L 100 800 Z" fill="url(#gradient1)" />
            <path d="M 200 700 Q 400 550, 600 600 T 1000 500 L 1000 900 L 200 900 Z" fill="url(#gradient2)" />
            <path d="M 150 500 L 250 450 L 350 480 L 450 420 L 550 460 L 650 400 L 750 440 L 850 380"
                  fill="none" stroke="rgba(0,230,118,0.4)" strokeWidth="2"/>
            <path d="M 300 650 L 400 620 L 500 640 L 600 600 L 700 630 L 800 590 L 900 610"
                  fill="none" stroke="rgba(0,255,163,0.3)" strokeWidth="2"/>
          </g>

          <g opacity="0.3">
            <rect x="150" y="550" width="30" height="80" fill="rgba(0,230,118,0.3)" rx="2"/>
            <rect x="220" y="520" width="30" height="110" fill="rgba(0,230,118,0.3)" rx="2"/>
            <rect x="290" y="500" width="30" height="130" fill="rgba(0,230,118,0.3)" rx="2"/>
            <rect x="360" y="480" width="30" height="150" fill="rgba(0,230,118,0.3)" rx="2"/>

            <circle cx="700" cy="300" r="60" fill="none" stroke="rgba(0,230,118,0.2)" strokeWidth="2"/>
            <circle cx="700" cy="300" r="40" fill="none" stroke="rgba(0,230,118,0.3)" strokeWidth="2"/>
            <circle cx="700" cy="300" r="20" fill="rgba(0,230,118,0.2)"/>
          </g>

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,230,118,0.15)" />
              <stop offset="100%" stopColor="rgba(0,230,118,0)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,163,0.1)" />
              <stop offset="100%" stopColor="rgba(0,255,163,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-20 right-10 opacity-[0.02] pointer-events-none">
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 250 L 100 180 L 150 200 L 200 120 L 250 150 L 300 80 L 350 100"
                fill="none" stroke="rgba(0,230,118,1)" strokeWidth="3"/>
          <circle cx="50" cy="250" r="5" fill="rgba(0,230,118,1)"/>
          <circle cx="100" cy="180" r="5" fill="rgba(0,230,118,1)"/>
          <circle cx="150" cy="200" r="5" fill="rgba(0,230,118,1)"/>
          <circle cx="200" cy="120" r="5" fill="rgba(0,230,118,1)"/>
          <circle cx="250" cy="150" r="5" fill="rgba(0,230,118,1)"/>
          <circle cx="300" cy="80" r="5" fill="rgba(0,230,118,1)"/>
          <circle cx="350" cy="100" r="5" fill="rgba(0,230,118,1)"/>
        </svg>
      </div>

      <div className="absolute bottom-40 left-10 opacity-[0.02] pointer-events-none">
        <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="250" width="40" height="100" fill="rgba(0,230,118,1)" opacity="0.7"/>
          <rect x="110" y="200" width="40" height="150" fill="rgba(0,230,118,1)" opacity="0.7"/>
          <rect x="170" y="180" width="40" height="170" fill="rgba(0,230,118,1)" opacity="0.7"/>
          <rect x="230" y="220" width="40" height="130" fill="rgba(0,230,118,1)" opacity="0.7"/>
          <rect x="290" y="160" width="40" height="190" fill="rgba(0,230,118,1)" opacity="0.7"/>
          <rect x="350" y="190" width="40" height="160" fill="rgba(0,230,118,1)" opacity="0.7"/>
          <rect x="410" y="230" width="40" height="120" fill="rgba(0,230,118,1)" opacity="0.7"/>
        </svg>
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 w-full glass-nav z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src="/24SHELF.svg" alt="24SHELF" className="h-8 sm:h-10" />
            </div>
            <a href="#contact-form" className="btn-primary text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg">
              Запланировать звонок
            </a>
          </div>
        </nav>

        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#00e676] to-transparent blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl from-[#00ffa3] to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00e676] mb-6 sm:mb-8 px-4 sm:px-5 py-2 glass rounded-full glow-effect">
                <Sparkles className="w-4 h-4" />
                АНАЛИТИКА ЦИФРОВЫХ ПОЛОК ДЛЯ QUICK-COMMERCE
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
                <span className="text-balance">24SHELF – Первая платформа</span>
                <br />
                <span className="gradient-text text-balance inline-block mt-2">комплексной live-аналитики</span>
                <br />
                <span className="text-balance inline-block mt-2">для quick-commerce</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light px-4">
                Полная прозрачность полки в quick-commerce: мониторинг дарксторов с реальными данными
              </p>

              <a href="#contact-form" className="btn-primary text-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-2xl inline-flex items-center gap-3 group">
                Оставить заявку
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-10 px-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                24SHELF предоставляет аналитику для quick-commerce, автоматически собирая данные о всех брендах каждые 4 часа.
                Мы отслеживаем весь ассортимент товаров, включая ваших конкурентов, без необходимости вручную обновлять ассортиментные матрицы.
              </p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00e676] to-transparent blur-3xl animate-pulse"></div>
              <div className="absolute inset-20 rounded-full bg-gradient-to-tl from-[#00ffa3] to-transparent blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {[
                {
                  icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Нулевой порог входа",
                  description: "Не нужно отправлять списки товаров. Мы автоматически собираем данные по всем товарам, включая ваши и товары конкурентов."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Тотальное покрытие",
                  description: "Мониторинг более 3000 дарксторов Самоката по всей России. Прозрачность в каждом районе, в каждом городе."
                },
                {
                  icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Высокая частота",
                  description: "Данные обновляются в реальном времени, каждые 4 часа, что позволяет отслеживать динамику выбытия товаров на протяжении дня."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Автоматизация",
                  description: "Новые товары в категориях автоматически добавляются в систему. Без дополнительных усилий с вашей стороны."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-5 sm:p-6 lg:p-8 rounded-2xl hover:scale-[1.03] transition-all duration-500 feature-card-glow group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00e676]/20 to-transparent blur-2xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-[#00e676] mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-balance">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#00e676] to-transparent blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-[#00ffa3] to-transparent blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-12 text-center tracking-tight">
              Ключевые <span className="gradient-text">возможности</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl group hover:scale-[1.03] transition-all duration-500 relative overflow-hidden depth-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e676]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00e676]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#00e676]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 liquid-blob"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#00e676]/20 to-[#00e676]/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-[#00e676]/30 group-hover:to-[#00e676]/10 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shimmer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Package className="w-10 h-10 sm:w-12 sm:h-12 text-[#00e676] relative z-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">Stock & Availability</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                    Реальное количество товаров на стоке и мониторинг out-of-stock. Вы всегда в курсе, когда товар заканчивается.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl group hover:scale-[1.03] transition-all duration-500 relative overflow-hidden depth-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e676]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00e676]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#00ffa3]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 liquid-blob" style={{ animationDelay: '1s' }}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#00e676]/20 to-[#00e676]/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-[#00e676]/30 group-hover:to-[#00e676]/10 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shimmer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-[#00e676] relative z-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">Цены</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                    Мониторинг актуальных цен на товары, включая скидки и промо-акции. Вы всегда сможете быть на шаг впереди конкурентов.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl group hover:scale-[1.03] transition-all duration-500 relative overflow-hidden depth-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e676]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#00e676]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#00f5d4]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 liquid-blob" style={{ animationDelay: '2s' }}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#00e676]/20 to-[#00e676]/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-[#00e676]/30 group-hover:to-[#00e676]/10 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shimmer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-[#00e676] relative z-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-balance">AI-инсайты</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                    Умный Copilot-ассистент, который автоматически подсвечивает аномалии, критические отклонения в данных и отправляет алерты.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="liquidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e676" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#00ffa3" stopOpacity="1"/>
                </linearGradient>
              </defs>
              <path d="M 0 300 Q 250 200 500 300 T 1000 300 L 1000 600 L 0 600 Z" fill="url(#liquidGrad1)" opacity="0.3">
                <animate attributeName="d" dur="10s" repeatCount="indefinite"
                  values="M 0 300 Q 250 200 500 300 T 1000 300 L 1000 600 L 0 600 Z;
                          M 0 250 Q 250 300 500 250 T 1000 250 L 1000 600 L 0 600 Z;
                          M 0 300 Q 250 200 500 300 T 1000 300 L 1000 600 L 0 600 Z"/>
              </path>
            </svg>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="glass-card p-8 sm:p-12 lg:p-16 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#00e676] to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#00ffa3] to-transparent blur-3xl"></div>
              </div>
              <div className="text-center mb-8 sm:mb-10 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
                  Дорожная карта <span className="gradient-text">2026</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 font-light">Планы расширения</p>
              </div>

              <div className="space-y-3 sm:space-y-4 relative z-10">
                {[
                  "Полное покрытие Самоката по всей России (3000+ дарксторов)",
                  "Расширение на другие площадки: запуск мониторинга Яндекс Лавка и Ozon Fresh",
                  "Оценка продаж через sell-out",
                  "Расчет доли бренда в категории относительно конкурентов",
                  "Мониторинг рекламных баннеров и специальных предложений на площадках"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 sm:gap-5 glass p-5 sm:p-6 lg:p-7 rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00e676] to-[#00c764] text-black font-bold flex items-center justify-center text-base sm:text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-light pt-1.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e676] to-transparent"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ffa3] to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00e676] to-transparent"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-12 text-center tracking-tight">
              Как это <span className="gradient-text">работает?</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  step: "01",
                  title: "Подключение бренда",
                  description: "Без необходимости в отправке списков SKU"
                },
                {
                  step: "02",
                  title: "Анализ данных",
                  description: "Мы собираем данные по всем товарам в дарксторах"
                },
                {
                  step: "03",
                  title: "AI-инсайты",
                  description: "Система анализирует, находит отклонения и отправляет уведомления"
                },
                {
                  step: "04",
                  title: "Отчетность в реальном времени",
                  description: "Вы получаете актуальные данные по ассортименту и ценам"
                }
              ].map((step, index) => (
                <div key={index} className="relative group h-full">
                  <div className="glass-card p-5 sm:p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#00e676]/15 to-transparent blur-2xl"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="text-5xl sm:text-6xl lg:text-7xl font-black gradient-text mb-4 sm:mb-6">{step.step}</div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-balance">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">{step.description}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <ChevronRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 text-[#00e676]/40 w-10 h-10 group-hover:text-[#00e676]/70 transition-colors" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e676]/20 via-transparent to-[#00ffa3]/20 blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="glass-card p-8 sm:p-10 lg:p-14 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e676]/5 via-transparent to-[#00ffa3]/5"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#00e676]/10 to-transparent blur-3xl"></div>
              <div className="relative z-10">
                <div className="floating-animation inline-block mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#00e676]/20 to-[#00ffa3]/20 flex items-center justify-center mx-auto shadow-2xl">
                    <Bell className="w-10 h-10 sm:w-12 sm:h-12 text-[#00e676]" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-balance">
                  Не упустите возможность!
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-light max-w-3xl mx-auto">
                  Используйте данные для эффективного управления ассортиментом и ценами.
                  Запросите демонстрацию 24SHELF сегодня!
                </p>
                <a href="#contact-form" className="btn-primary text-black px-10 sm:px-12 py-5 sm:py-6 rounded-xl font-bold text-lg sm:text-xl shadow-2xl inline-flex items-center gap-3 group">
                  Оставить заявку
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
              <div className="absolute inset-0 rounded-full border border-[#00e676]/30"></div>
              <div className="absolute inset-10 rounded-full border border-[#00e676]/20"></div>
              <div className="absolute inset-20 rounded-full border border-[#00e676]/10"></div>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center tracking-tight">
              Дополнительные <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto text-center mb-8 sm:mb-10 leading-relaxed font-light">
              24SHELF — это не просто мониторинг. Мы также предоставляем аналитические инструменты для поиска стратегий роста,
              оптимизации продаж и увеличения доли бренда на рынке.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {[
                { title: "Анализ конкурентных товаров", icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" /> },
                { title: "Вычисление доли продаж вашего бренда", icon: <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12" /> },
                { title: "Прогнозирование изменения цен", icon: <Brain className="w-10 h-10 sm:w-12 sm:h-12" /> }
              ].map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-8 sm:p-10 rounded-2xl text-center hover:scale-[1.05] transition-all duration-500 group cursor-pointer feature-card-glow relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#00e676]/20 to-transparent rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-[#00e676] mx-auto mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {service.icon}
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-balance">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="glass border-2 border-[#00e676] hover:bg-[#00e676]/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center gap-3 group hover:scale-105 hover:shadow-xl">
                Узнать больше
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <ContactForm />

        <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center text-gray-400">
              <p className="text-sm sm:text-base font-light">&copy; 2026 24SHELF. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
