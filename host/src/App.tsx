import * as React from "react";
import { Card as KirbyCard } from "kirby/Card";
import { Card as PikminCard } from "pikmin/Card";

import "./App.css";

const App = () => {
  const [app, setApp] = React.useState<"kirby" | "pikmin">("kirby");

  return (
    <div className="content">
      <button
        onClick={() => setApp((app) => (app === "kirby" ? "pikmin" : "kirby"))}
      >
        toggle app
      </button>
      {app === "kirby" && <KirbyCard />}
      {app === "pikmin" && <PikminCard />}
    </div>
  );
};

export default App;
