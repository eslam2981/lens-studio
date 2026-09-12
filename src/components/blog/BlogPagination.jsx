import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-16" dir="rtl">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#121212] border border-white/10 text-white/60 hover:text-white hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              currentPage === page
                ? "bg-[#EE5E0E] text-white shadow-lg shadow-orange-500/20 border-transparent"
                : "bg-[#121212] border border-white/10 text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#121212] border border-white/10 text-white/60 hover:text-white hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
        </button>
      </div>
      <p className="text-sm text-white/40">
        صفحة {currentPage} من {totalPages}
      </p>
    </div>
  );
}
