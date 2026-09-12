import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import postsData from "../data/posts.json";
import ArticleHero from "../components/article/ArticleHero";
import ArticleContent from "../components/article/ArticleContent";
import ArticleSidebar from "../components/article/ArticleSidebar";
import RelatedArticles from "../components/article/RelatedArticles";

export default function ArticleDetails() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  const article = postsData.posts.find((p) => p.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const introParagraphs = [];
  let cur = null;
  const sections = [];

  (article.content ?? []).forEach((item) => {
    if (item.startsWith("## ")) {
      if (cur) sections.push(cur);
      cur = { title: item.replace(/^##\s*/, "").trim(), body: [] };
    } else {
      const t = item.trim();
      if (t) (cur ? cur.body : introParagraphs).push(t);
    }
  });
  if (cur) sections.push(cur);

  const tocItems = sections.map((s, i) => ({ n: i + 1, label: s.title }));

  const related = (() => {
    const same = postsData.posts.filter((p) => p.category === article.category && p.id !== article.id);
    const rest = postsData.posts.filter((p) => p.id !== article.id && !same.find((s) => s.id === p.id));
    return [...same, ...rest].slice(0, 3);
  })();

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <ArticleHero article={article} />

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10">
          <ArticleContent article={article} introParagraphs={introParagraphs} sections={sections} />
          <ArticleSidebar article={article} tocItems={tocItems} />
        </div>

        <RelatedArticles related={related} />
      </div>
    </div>
  );
}
