import { Link } from "react-router-dom";
import postsData from "../../data/posts.json";
import ArticleCard from "../article/ArticleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function LatestArticles() {
  const latest = postsData.posts.filter(p => !p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-[#0A0A0A]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 items-start md:items-end">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#141414] border border-[#1f1f1f] rounded-full px-6 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EE5E0E] animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-[#EE5E0E] animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
              <span className="text-[#EE5E0E] text-base font-bold">الأحدث</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
                أحدث المقالات
              </h2>
              <p className="text-[#7a7a7a] text-base">محتوى جديد طازج من المطبعة</p>
            </div>
          </div>
          <Link to="/blog" className="text-[#EE5E0E] text-sm font-bold hover:text-white flex items-center gap-2 transition-colors group">
            عرض جميع المقالات
            <FontAwesomeIcon icon={faArrowLeft} className="transition-transform group-hover:-translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <ArticleCard key={post.id} article={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
