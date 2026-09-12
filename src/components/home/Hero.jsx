import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, 
  faInfoCircle, 
  faNewspaper, 
  faUsers, 
  faFolderOpen, 
  faPenNib 
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-gray-800" dir="rtl">
      <div className="absolute top-0 left-[10%] w-125 h-125 bg-[#EE5E0E]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[10%] w-125 h-125 bg-[#FFA500]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">
        
        <div className="bg-[#EE5E0E]/10 border border-[#EE5E0E]/30 text-gray-300 text-sm py-1.5 px-4 rounded-full mb-6 flex items-center gap-2">
          <span className="flex gap-1.5 items-center">
            <span className="w-2 h-2 rounded-full bg-[#EE5E0E] animate-pulse"></span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE5E0E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE5E0E]"></span>
            </span>
          </span>
          مرحباً بك في عدسة
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl">
          اكتشف <span className="text-[#EE5E0E]">فن</span>
          <br />
          التصوير الفوتوغرافي
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
          <br className="hidden md:block" />
          التصوير.
        </p>

        <div className="flex items-center gap-4 mb-20 flex-wrap justify-center">
          <Link to="/blog" className="group bg-[#EE5E0E] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg shadow-orange-500/20">
            استكشف المقالات
            <FontAwesomeIcon icon={faArrowLeft} className="transition-transform duration-300 group-hover:-translate-x-2" />
          </Link>
          <Link to="/about" className="bg-[#141414] border border-gray-700 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:bg-[#EE5E0E]/10 hover:border-[#EE5E0E] hover:text-[#EE5E0E] hover:-translate-y-1 flex items-center gap-3">
            <FontAwesomeIcon icon={faInfoCircle} />
            اعرف المزيد
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { value: "50+", label: "مقالة", icon: faNewspaper },
            { value: "+10ألف", label: "قارئ", icon: faUsers },
            { value: "4", label: "تصنيفات", icon: faFolderOpen },
            { value: "6", label: "كاتب", icon: faPenNib },
          ].map((stat, i) => (
            <div key={i} className="bg-[#141414] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center transition-colors hover:border-[#EE5E0E]/30">
              <FontAwesomeIcon icon={stat.icon} className="text-[#EE5E0E] text-2xl mb-3" />
              <span className="text-[#EE5E0E] text-3xl font-bold mb-1">{stat.value}</span>
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
