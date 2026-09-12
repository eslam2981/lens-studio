import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function ArticleCard({ article, viewMode = "grid" }) {
  const isList = viewMode === "list";

  return (
    <Link 
      to={`/blog/${article.slug}`} 
      className={`group bg-[#141414] rounded-2xl border border-[#1f1f1f] overflow-hidden hover:border-[#EE5E0E]/50 transition-all duration-300 hover:-translate-y-1 flex ${isList ? 'flex-row' : 'flex-col'}`}
    >
      <div className={`relative overflow-hidden shrink-0 ${isList ? 'w-2/5 md:w-1/3' : 'h-56'}`}>
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Category Pill on top left */}
        <div className="absolute top-4 left-4 bg-[#141414]/90 text-white text-[11px] font-bold px-4 py-1.5 rounded-full border border-gray-700/50 backdrop-blur-sm">
          {article.category}
        </div>
      </div>
      
      <div className={`p-4 md:p-6 flex flex-col ${isList ? 'w-3/5 md:w-2/3' : 'flex-1'}`}>
        

        {/* Meta info row: Read Time & Date */}
        <div className="flex items-center gap-3 text-[#a1a1a1] text-xs font-medium mb-4">
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faClock} className="text-[#a1a1a1]" />
            {article.readTime}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-700"></span>
          <span>{article.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#EE5E0E] transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        {/* Excerpt - hidden on mobile list view */}
        <p className={`text-[#7a7a7a] text-xs md:text-sm mb-4 md:mb-8 line-clamp-2 leading-relaxed ${isList ? 'hidden sm:block' : ''}`}>
          {article.excerpt}
        </p>
        
        {/* Footer row: Author & Arrow Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1f1f1f]">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#1f1f1f]"
            />
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold">{article.author.name}</span>
              <span className="text-[#7a7a7a] text-[11px]">{article.author.role}</span>
            </div>
          </div>
          
          {/* Arrow Button */}
          <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center group-hover:bg-[#EE5E0E] group-hover:border-[#EE5E0E] transition-colors duration-300">
            <FontAwesomeIcon icon={faChevronLeft} className="text-[#EE5E0E] text-xs group-hover:text-white transition-colors" />
          </div>
        </div>
        
      </div>
    </Link>
  );
}

