import "./App.css";
import { Card as KirbyCard } from "kirby/Card";
import { Card as PikminCard } from "pikmin/Card";

const App = () => {
  return (
    <div className="content">
      <KirbyCard />
      <PikminCard />
    </div>
  );
};

export default App;
