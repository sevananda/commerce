import Index from "@/components/Sidebar";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard">
        
     <button>Welcome Back</button>
      </Link>
    </div>
  );
}
