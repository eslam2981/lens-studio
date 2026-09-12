import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function FeaturedArticleCard({ article }) {
  const {
    category,
    readTime,
    title,
    excerpt,
    author,
    image,
    date,
    featured = true
  } = article;

  return (
    <div className="bg-[#141414] rounded-3xl overflow-hidden flex flex-col md:flex-row md:h-[350px] group transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
      
      <div className="w-full md:w-2/5 h-64 md:h-full relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-6 right-6 bg-[#EE5E0E] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <FontAwesomeIcon icon={faStar} className="text-[10px]" />
            مميز
          </div>
        )}
      </div>

      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
        
        <div>
          <div className="flex items-center justify-start gap-4 mb-6">
            <span className="bg-[#EE5E0E]/10 text-[#EE5E0E] text-xs font-bold px-3 py-1.5 rounded-full border border-[#EE5E0E]/20">
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <FontAwesomeIcon icon={faClock} className="text-gray-500" />
              {readTime}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#EE5E0E] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-800/50 pt-6 mt-auto">
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={author?.avatar} 
                alt={author?.name} 
                className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all border border-gray-800" 
              />
              <div className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 bg-[#EE5E0E] rounded-full border-2 border-[#141414]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold">{author?.name}</span>
              <span className="text-gray-500 text-xs">{date}</span>
            </div>
          </div>

          <Link 
            to={`/blog/${article.slug}`} 
            className="text-[#EE5E0E] font-bold text-sm flex items-center gap-2 cursor-pointer group/readmore"
          >
            اقرأ المقال
            <FontAwesomeIcon icon={faArrowLeft} className="transition-transform duration-300 group-hover/readmore:-translate-x-1.5" />
          </Link>

        </div>
      </div>
    </div>
  );
}
