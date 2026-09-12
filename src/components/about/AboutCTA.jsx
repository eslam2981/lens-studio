import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function AboutCTA() {
  return (
    <section className="relative py-24 overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

      <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-sm">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          فريق الدعم لدينا متواجد دائماً للإجابة على استفساراتك، ومساعدتك في أي شيء تحتاجه. لا تتردد في التواصل معنا.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:support@example.com" 
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0A0A0A] hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 transition-transform group-hover:scale-110" />
            تواصل معنا
          </a>
          <Link 
            to="/blog" 
            className="flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white hover:text-orange-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:-translate-y-1"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
