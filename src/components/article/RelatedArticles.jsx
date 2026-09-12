import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faArrowLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { ORANGE } from "./Shared";

export default function RelatedArticles({ related }) {
  if (!related || related.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <div className="text-right flex items-center justify-start gap-3">
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: ORANGE }}>
            <FontAwesomeIcon icon={faImages} className="h-5 w-5 text-white" />
          </span>
          <div>
            <div className="text-2xl font-bold">مقالات قد تعجبك</div>
            <p className="mt-1 text-sm text-white/50">استكشف المزيد من المحتوى المميز</p>
          </div>
        </div>
        <Link
          to="/blog"
          className="group flex items-center gap-1.5 text-sm text-white/70 hover:text-orange-500 transition-colors whitespace-nowrap">
          عرض الكل <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((a) => (
          <Link
            key={a.id}
            to={`/blog/${a.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
            <div className="relative h-48 overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span
                className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: ORANGE }}>
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 text-right">
              <h3 className="mb-4 line-clamp-2 text-lg font-bold leading-7 group-hover:text-orange-400 transition-colors">
                {a.title}
              </h3>
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-white/50">
                <span className="flex items-center gap-2">
                  <img
                    src={a.author.avatar}
                    alt={a.author.name}
                    className="h-6 w-6 rounded-full object-cover ring-1 ring-white/10"
                  />
                  {a.author.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                  {a.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
