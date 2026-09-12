import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import postsData from "../../data/posts.json";
import FeaturedArticleCard from "./FeaturedArticleCard";

export default function FeaturedArticles() {
  const featured = postsData.posts.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-[#050505]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 items-start md:items-end">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#141414] border border-[#1f1f1f] rounded-full px-6 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EE5E0E] animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-[#EE5E0E] animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
              <span className="text-[#EE5E0E] text-base font-bold">مميز</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
                مقالات مختارة
              </h2>
              <p className="text-[#7a7a7a] text-base">محتوى حصري يستحق القراءة</p>
            </div>
          </div>
          <Link to="/blog" className="group flex items-center gap-2 bg-[#EE5E0E] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-orange-600 transition-colors">
            عرض الكل
            <FontAwesomeIcon icon={faArrowLeft} className="transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {featured.map(post => (
            <FeaturedArticleCard key={post.id} article={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
