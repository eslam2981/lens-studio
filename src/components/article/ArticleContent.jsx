import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTag, faShareNodes, faLink } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ORANGE } from "./Shared";

export default function ArticleContent({ article, introParagraphs, sections }) {
  return (
    <main className="min-w-0 text-right">
      <blockquote className="rounded-2xl border border-orange-900/30 bg-orange-950/20 px-6 py-5 text-center text-lg italic text-white/90">
        &ldquo;{article.excerpt}&rdquo;
      </blockquote>

      {introParagraphs.map((p, i) => (
        <p key={i} className="mt-8 leading-8 text-white/85">
          {p}
        </p>
      ))}

      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <div className="flex items-center justify-start gap-3">
              <FontAwesomeIcon icon={faCamera} className="h-7 w-7" style={{ color: ORANGE }} />
              <h2 className="text-2xl font-bold">{s.title}</h2>
            </div>
            {s.body.map((p, i) => (
              <p key={i} className="mt-4 leading-8 text-white/85">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {article.tags?.length > 0 && (
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6">
          <div className="flex items-center justify-start gap-2 text-lg font-semibold">
            <FontAwesomeIcon icon={faTag} className="h-5 w-5" style={{ color: ORANGE }} />
            الوسوم
          </div>
          <div className="mt-4 flex flex-wrap justify-start gap-3">
            {article.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/85">
                #{t.replace(/\s+/g, "_")}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6">
        <div className="flex items-center justify-start gap-2 text-lg font-semibold">
          <FontAwesomeIcon icon={faShareNodes} className="h-5 w-5" style={{ color: ORANGE }} />
          شارك المقال
        </div>
        <div className="mt-4 flex justify-start gap-3">
          {[faXTwitter, faLinkedinIn, faWhatsapp, faLink].map((icon, i) => (
            <button
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-orange-500 hover:text-orange-400 transition-all">
              <FontAwesomeIcon icon={icon} className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6">
        <div className="flex items-start justify-start gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="h-16 w-16 shrink-0 rounded-full object-cover"
          />
          <div className="text-right">
            <p className="text-sm" style={{ color: ORANGE }}>
              كاتب المقال
            </p>
            <p className="mt-1 text-lg font-bold">{article.author.name}</p>
            <p className="text-sm text-white/60">{article.author.role}</p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              كاتب ومصور محترف، يشارك أفضل النصائح والخبرات لمساعدتك في تطوير مهاراتك الإبداعية في كل مقال.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
