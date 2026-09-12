import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedinIn, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800 pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-r from-[#EE5E0E] to-[#FFA500] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/20 leading-none pt-1">
                ع
              </div>
              <span className="text-white font-bold text-2xl">عدسة</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#EE5E0E] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#EE5E0E] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#EE5E0E] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#EE5E0E] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#EE5E0E]"></span> استكشف
            </h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#EE5E0E]"></span> التصنيفات
            </h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  إضاءة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  بورتريه
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  مناظر طبيعية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EE5E0E] transition-colors">
                  تقنيات
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-[#EE5E0E]"></span> ابقى على اطلاع
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#EE5E0E] transition-colors placeholder-gray-600 text-sm"
              />
              <button
                type="button"
                className="bg-linear-to-r from-[#EE5E0E] to-[#FFA500] text-white rounded-xl px-4 py-3.5 font-bold hover:-translate-y-0.5 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 عدسة. صنع بكل <span className="text-[#EE5E0E]"><FontAwesomeIcon icon={faHeart} /></span> جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white transition-colors">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
