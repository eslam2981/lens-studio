import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUser, faMountainSun, faSliders, faGear, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const categories = [
  { id: 1, title: "إضاءة", count: 3, icon: faLightbulb, slug: "lighting" },
  { id: 2, title: "بورتريه", count: 3, icon: faUser, slug: "portrait" },
  { id: 3, title: "مناظر طبيعية", count: 2, icon: faMountainSun, slug: "landscape" },
  { id: 4, title: "تقنيات", count: 5, icon: faSliders, slug: "techniques" },
  { id: 5, title: "معدات", count: 3, icon: faGear, slug: "equipment" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span
              className="h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse"
              style={{ animationDelay: "500ms" }}></span>
            <span className="text-sm font-medium text-orange-500">التصنيفات</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">استكشف حسب الموضوع</h2>
          <p className="text-white/50 text-sm md:text-base">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/blog?category=${category.title}#articles`}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 sm:p-8 h-48 transition-all duration-500 hover:border-transparent hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-400 to-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-white/5 p-3 sm:p-4 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
                    <FontAwesomeIcon
                      icon={category.icon}
                      className="text-2xl sm:text-3xl text-orange-500 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white/40 group-hover:text-white/80 transition-colors duration-500">
                    {category.count} مقالات
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white transition-transform duration-500 group-hover:-translate-x-2">
                    {category.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white/20">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
