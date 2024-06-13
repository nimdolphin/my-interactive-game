import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import GameField from "@/components/gameField/GameField";

const GamePage = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <GameField />
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
