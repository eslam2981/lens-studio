import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import postsData from "../../data/posts.json";

export default function AboutTeam() {
  // Extract unique authors from posts.json
  const uniqueAuthorsMap = new Map();
  postsData.posts.forEach((post) => {
    if (!uniqueAuthorsMap.has(post.author.name)) {
      uniqueAuthorsMap.set(post.author.name, post.author);
    }
  });
  const authors = Array.from(uniqueAuthorsMap.values());

  return (
    <section className="py-24 bg-[#0A0A0A]" dir="rtl">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-orange-500">فريقنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">تعرف على كتابنا</h2>
          <p className="text-white/50 text-sm md:text-base">
            فريق من المحترفين والشغوفين بمشاركة خبراتهم معك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {authors.map((author, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-[#121212] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl hover:bg-[#161616]"
            >
              <div className="relative mb-4">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-orange-500/20"
                />
                <span className="absolute bottom-0 right-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-[#121212]"></span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1">{author.name}</h3>
              <p className="text-xs text-orange-500 mb-6 font-medium">{author.role}</p>
              
              <div className="flex items-center gap-3">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
