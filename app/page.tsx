import { HomeCommunity } from "@/components/home/home-community";
import { HomeEvents } from "@/components/home/home-events";
import { HomeIntro } from "@/components/home/home-intro";
import { HomeServices } from "@/components/home/home-services";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <HomeIntro />
      <HomeServices />
      <HomeEvents />
      <HomeCommunity />
    </div>
  );
}
