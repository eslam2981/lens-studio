import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faBolt, faHandshake, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function AboutValues() {
  const values = [
    {
      id: 1,
      title: "الجودة أولاً",
      description: "نلتزم بتقديم محتوى دقيق وموثوق واحترافي.",
      icon: faBullseye
    },
    {
      id: 2,
      title: "تعلم عملي",
      description: "نقدم دروساً وتلميحات قابلة للتطبيق فوراً.",
      icon: faBolt
    },
    {
      id: 3,
      title: "المجتمع",
      description: "نبني مجتمعاً داعماً للمصورين للتعلم من بعضهم.",
      icon: faHandshake
    },
    {
      id: 4,
      title: "شغف مستمر",
      description: "الشغف هو المحرك الذي يدفعنا للبحث عن الجديد.",
      icon: faArrowsRotate
    }
  ];

  return (
    <section className="py-24 bg-[#111111]" dir="rtl">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            <span className="text-orange-500">|</span> قيمنا <span className="text-orange-500">|</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base">المبادئ التي توجه كل ما نقوم به</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div 
              key={value.id}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-[#1A1A1A] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 mb-6 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <FontAwesomeIcon icon={value.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
