import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage() {
  return (
    <div
      className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
      dir="rtl">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "3rem 3rem",
          maskImage: "radial-gradient(circle at center, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, #000 30%, transparent 80%)",
        }}></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-xl">
        <h1 className="text-8xl md:text-[12rem] font-extrabold text-[#EE5E0E] leading-none mb-8 drop-shadow-lg">404</h1>

        <div className="relative mb-12">
          <span
            className="absolute -top-3 -right-3 w-4 h-4 bg-[#EE5E0E] rounded-full shadow-[0_0_10px_#EE5E0E] animate-bounce"
            style={{ animationDuration: "2s" }}></span>

          <span
            className="absolute -bottom-1 -left-5 w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_10px_#EAB308] animate-bounce"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}></span>

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-950/40 border border-[#EE5E0E]/20 text-[#EE5E0E] shadow-2xl backdrop-blur-sm relative z-10">
            <FontAwesomeIcon icon={faFrown} className="text-4xl" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">عفواً! الصفحة غير موجودة</h2>
        <p className="text-white/50 text-sm md:text-base mb-12 leading-relaxed">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-16">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#EE5E0E] hover:bg-[#EE5E0E]/90 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/20">
            <FontAwesomeIcon icon={faHome} />
            الذهاب للرئيسية
          </Link>
          <Link
            to="/blog"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold py-3.5 px-8 rounded-xl transition-all">
            <FontAwesomeIcon icon={faFileAlt} />
            تصفح المقالات
          </Link>
        </div>

        <div className="pt-8 border-t border-white/5 w-full">
          <p className="text-white/30 text-xs mb-4 font-medium">قد تجد هذه مفيدة</p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-[#EE5E0E]">
            <Link to="/blog" className="hover:text-orange-400 transition-colors">
              المدونة
            </Link>
            <span className="text-white/20">-</span>
            <Link to="/about" className="hover:text-orange-400 transition-colors">
              من نحن
            </Link>
            <span className="text-white/20">-</span>
            <Link to="#" className="hover:text-orange-400 transition-colors">
              الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
