import Image from "next/image";
import { Toolbar } from "@/components/tool-bar";
import { AppBar } from "@/components/app-bar";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url(/images/home-bg-1.png)" }}
      className=" min-h-screen bg-cover relative"
    >
      <Toolbar />
      <AppBar />
    </main>
  );
}
