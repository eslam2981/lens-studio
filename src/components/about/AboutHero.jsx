import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPenNib, faBookOpen, faListUl } from "@fortawesome/free-solid-svg-icons";

export default function AboutHero() {
  const stats = [
    { icon: faUsers, value: "+2 مليون", label: "قارئ شهرياً" },
    { icon: faBookOpen, value: "500+", label: "مقال حصري" },
    { icon: faPenNib, value: "50+", label: "كاتب محترف" },
    { icon: faListUl, value: "15+", label: "قسم متخصص" },
  ];

  return (
    <section className="relative pt-32 pb-24 bg-[#0A0A0A] overflow-hidden" dir="rtl">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 80% at 50% 0%, #000 70%, transparent 110%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 0%, #000 70%, transparent 110%)'
        }}
      ></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-orange-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-bold text-orange-500">من نحن</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            مهمتنا هي <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-orange-600">الإعلام والإلهام</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-3xl mb-16 leading-relaxed">
            مدونة متخصصة في فن التصوير الفوتوغرافي، تهدف إلى نشر ثقافة بصرية صحيحة وتعليم فنون التصوير للمبتدئين والمحترفين، لنلهمك في كل لقطة وفي كل قصة.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#121212] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <FontAwesomeIcon icon={stat.icon} className="text-orange-500 text-2xl mb-4" />
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
