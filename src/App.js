import "./App.css";
import { getFacts } from "./API/factsAPI";
import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState(null);
  const fetchFacts = async () => {
    setFacts(null);
    let allFacts = await getFacts();
    setFacts(allFacts);
  };
  useEffect(() => {
    fetchFacts();
    console.log(facts);
  }, []);
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      {facts && facts.length > 0 ? (
        <>
          <button onClick={fetchFacts}>Refresh Facts</button>
          <div className="mainFrame">
            {facts.map((fact, index) => (
              <div className="list-item" key={index}>
                {fact}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

export default App;
