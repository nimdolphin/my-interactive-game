import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <h2>Welcome to the Interactive Game</h2>
        <p>Click the link below to start playing:</p>
        <Link href="/game">Go to Game</Link>
      </main>
      <Footer />
    </div>
  );
}
