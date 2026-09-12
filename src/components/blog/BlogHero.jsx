export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 bg-[#0A0A0A] overflow-hidden" dir="rtl">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 60% 80% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 80% at 50% 0%, #000 70%, transparent 110%)",
        }}></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-orange-500/10 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-bold text-orange-500">مدونتنا</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">استكشف مقالاتنا</h1>

          <p className="text-white/50 text-lg md:text-xl max-w-3xl leading-relaxed">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>
    </section>
  );
}
