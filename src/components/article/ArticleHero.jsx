import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronLeft, faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { ORANGE, OrangePill } from "./Shared";

export default function ArticleHero({ article }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#0b0b0c]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 text-right">
        <div className="inline-flex items-center justify-start gap-3 text-sm text-white/80 bg-white/10 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-md">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <FontAwesomeIcon icon={faHouse} className="h-4 w-4" /> الرئيسية
          </Link>
          <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3 text-white/40" />
          <Link to="/blog" className="hover:text-white transition-colors">
            المدونة
          </Link>
          <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3 text-white/40" />
          <span className="font-medium" style={{ color: ORANGE }}>{article.category}</span>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-start gap-4 text-sm text-white/70">
          <OrangePill>{article.category}</OrangePill>
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-4" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
            {article.readTime}
          </span>
        </div>

        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">{article.title}</h1>

        <div className="mt-8 flex justify-start">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-offset-2 ring-offset-black/40 shadow-lg"
              style={{ "--tw-ring-color": ORANGE }}
            />
            <div className="text-right pr-1">
              <p className="text-base sm:text-lg font-bold text-white drop-shadow-sm">{article.author.name}</p>
              <p className="text-sm font-medium text-white/80">{article.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
