import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function NewsletterCTA() {
  return (
    <section className="py-24 bg-transparent" dir="rtl">
      <div className="mx-auto max-w-4xl px-6">
        
        <div className="bg-[#161616] rounded-[2rem] p-10 md:p-16 text-center border border-white/5 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-orange-500/10 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-orange-600">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-lg mb-10">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <form className="w-full max-w-lg flex flex-col sm:flex-row gap-3 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors whitespace-nowrap"
              >
                اشترك الآن
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-white/40">
              <div className="flex -space-x-2 space-x-reverse mr-1">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="User" className="w-6 h-6 rounded-full border-2 border-[#161616] object-cover" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="User" className="w-6 h-6 rounded-full border-2 border-[#161616] object-cover" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="User" className="w-6 h-6 rounded-full border-2 border-[#161616] object-cover" />
              </div>
              <span>انضم لـ +10,000 مصور</span>
              <span className="h-1 w-1 rounded-full bg-white/20"></span>
              <span>بدون إزعاج</span>
              <span className="h-1 w-1 rounded-full bg-white/20"></span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
