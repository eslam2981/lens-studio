import AboutHero from "../components/about/AboutHero";
import AboutValues from "../components/about/AboutValues";
import AboutTeam from "../components/about/AboutTeam";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen divide-y divide-white/5">
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}
