import { useState, useEffect } from "react";
import BlogHero from "../components/blog/BlogHero";
import BlogControls from "../components/blog/BlogControls";
import BlogPagination from "../components/blog/BlogPagination";
import ArticleCard from "../components/article/ArticleCard";
import postsData from "../data/posts.json";

export default function Blog() {
  const query = new URLSearchParams(window.location.search);
  const initialCategory = query.get("category") || "جميع المقالات";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    if (window.location.hash === "#articles") {
      setTimeout(() => {
        document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const postsPerPage = 6;

  // Categories
  const cats = new Set(postsData.posts.map((p) => p.category));
  const categories = ["جميع المقالات", ...Array.from(cats)];

  // Filter
  const filteredPosts = postsData.posts.filter((post) => {
    const matchCategory = selectedCategory === "جميع المقالات" || post.category === selectedCategory;
    const matchSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-cairo" dir="rtl">
      <BlogHero />

      <BlogControls
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      <section id="articles" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <p className="text-white/40 text-sm">
              عرض <span className="text-white font-bold">{filteredPosts.length}</span> مقالات
            </p>

            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => setViewMode("list")}
                className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                  viewMode === "list" 
                    ? "bg-[#EE5E0E] text-white shadow-lg shadow-orange-500/20" 
                    : "bg-[#121212] border border-white/10 text-white/40 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <button 
                onClick={() => setViewMode("grid")}
                className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                  viewMode === "grid" 
                    ? "bg-[#EE5E0E] text-white shadow-lg shadow-orange-500/20" 
                    : "bg-[#121212] border border-white/10 text-white/40 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
              {currentPosts.map((post) => (
                <ArticleCard key={post.id} article={post} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-white/40 text-lg">لا توجد مقالات مطابقة للبحث أو التصنيف المحدد.</p>
            </div>
          )}

          <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>
    </div>
  );
}
