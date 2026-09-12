import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faClock, faCalendarDays, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ORANGE } from "./Shared";

export default function ArticleSidebar({ article, tocItems }) {
  return (
    <aside>
      <div className="sticky top-30 space-y-6">
        {tocItems.length > 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5">
            <div className="flex items-center justify-start gap-2 text-base font-semibold">
              <FontAwesomeIcon icon={faList} className="h-5 w-5" style={{ color: ORANGE }} />
              محتويات المقال
            </div>
            <ul className="mt-4 space-y-1">
              {tocItems.map((item) => (
                <li
                  key={item.n}
                  className="flex items-center justify-start gap-3 rounded-lg px-2 py-2.5 text-sm text-white/90 hover:bg-white/10 cursor-pointer transition-colors">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs text-white/70">
                    {item.n}
                  </span>
                  <span className="text-right flex-1">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
            <FontAwesomeIcon icon={faClock} className="mx-auto h-5 w-5" style={{ color: ORANGE }} />
            <p className="mt-2 text-sm font-semibold">8 دقائق للقراءة</p>
            <p className="text-xs text-white/70">وقت القراءة</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
            <FontAwesomeIcon icon={faCalendarDays} className="mx-auto h-5 w-5" style={{ color: ORANGE }} />
            <p className="mt-2 text-sm font-semibold">{article.date}</p>
            <p className="text-xs text-white/70">تاريخ النشر</p>
          </div>
        </div>

        <div className="rounded-2xl border border-orange-900/30 bg-gradient-to-b from-orange-950/40 to-transparent px-5 py-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" style={{ color: ORANGE }} />
          </span>
          <p className="mt-4 font-semibold">لا تفوّت جديدنا</p>
          <p className="mt-1 text-sm text-white/70">اشترك للحصول على أحدث المقالات</p>
          <button
            className="mt-4 w-full rounded-xl py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: ORANGE }}>
            اشتراك الآن
          </button>
        </div>
      </div>
    </aside>
  );
}
