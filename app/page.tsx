import Index from "@/components/Sidebar";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
        <div>
          <Index />
        </div>
      </div>
    </div>
  );
}
