import Hero from "../components/home/Hero";
import FeaturedArticles from "../components/home/FeaturedArticles";
import Categories from "../components/home/Categories";
import LatestArticles from "../components/home/LatestArticles";
import NewsletterCTA from "../components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-cairo divide-y divide-white/5">
      <Hero />
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
      <NewsletterCTA />
    </div>
  );
}
