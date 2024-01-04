import { useState } from "react";
import "./App.css";

function App() {
  const [statement, setStatement] = useState("");
  const [amount, setAmount] = useState(0);
  const [statementType, setStatementType] = useState("income");
  return (
    <main>
      <div>
        <h1>0</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Income or Expense"
            onChange={(e) => {
              setStatement(e.target.value);
            }}
            value={statement}
          />
          <input
            type="number"
            placeholder="$"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={!!amount && ""}
          />
          <select
            onChange={() => {
              setStatementType(e.target.value);
            }}
            value={statementType}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
        </div>
      </div>
    </main>
  );
}

export default App;
