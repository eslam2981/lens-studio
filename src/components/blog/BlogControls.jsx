import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function BlogControls({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="sticky top-24 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f] py-4 mb-8 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Search */}
        <div className="w-full md:w-[350px]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#141414] border border-[#1f1f1f] rounded-xl py-3 pr-4 pl-12 text-white placeholder-[#7a7a7a] focus:outline-none focus:border-[#EE5E0E] transition-colors text-sm"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7a7a]" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap justify-center w-full md:w-auto md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                selectedCategory === category
                  ? "bg-[#EE5E0E] text-white"
                  : "bg-[#141414] text-[#a1a1a1] hover:text-white border border-[#1f1f1f] hover:border-gray-700"
              }`}>
              {category}
            </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
