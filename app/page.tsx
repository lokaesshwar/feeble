import Navbar from "@/component/homepage/navbar";
import Landing from "@/component/homepage/landing";
import Birds from "@/component/homepage/birds";
import Scroll from "@/component/homepage/scroll";

export default function Home() {
  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden mx-auto">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Landing />
      </div>
      <Birds />
      <Scroll />
    </div>
  );
}
