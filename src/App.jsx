import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    statement: "",
    amount: "",
    statementType: "income",
  });

  const handleUpdateInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <main>
      <div>
        <h1>0</h1>
        <div className="input-container">
          <input
            name="statement"
            type="text"
            placeholder="Income or Expense"
            onChange={handleUpdateInput}
            value={input.statement}
          />
          <input
            name="amount"
            type="number"
            placeholder="$"
            onChange={handleUpdateInput}
            value={input.amount}
          />
          <select
            name="statementType"
            onChange={handleUpdateInput}
            value={input.statementType}
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
