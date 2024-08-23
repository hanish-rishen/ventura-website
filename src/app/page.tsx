import HeroSlideshow from "@/components/HeroSlideshow";
import FidasContent from "@/components/FidasContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSlideshow />
      <FidasContent />
    </main>
  );
}