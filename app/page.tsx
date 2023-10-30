import Image from "next/image";
import { Toolbar } from "@/components/tool-bar";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url(/images/home-bg-1.png)" }}
      className=" min-h-screen bg-cover"
    >
      <Toolbar />
    </main>
  );
}
