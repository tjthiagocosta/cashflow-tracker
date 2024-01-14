import { useState } from "react";
import "./App.css";

function App() {
  const [statements, setStatements] = useState([]);
  const [input, setInput] = useState({
    statement: "",
    amount: "",
    statementType: "income",
  });

  const [showError, setShowError] = useState({
    statement: false,
    amount: false,
  });

  const handleUpdateInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleAddNewStatement = () => {
    const { statement, amount, statementType } = input;

    if (!statement) {
      return setShowError({
        statement: true,
        amount: false,
      });
    } else if (!amount) {
      return setShowError({
        statement: false,
        amount: true,
      });
    } else {
      setShowError({
        statement: false,
        amount: false,
      });
      setStatements([
        ...statements,
        {
          name: statement,
          amount: parseFloat(amount).toFixed(2),
          type: statementType,
          date: new Date().toDateString(),
        },
      ]);
      setInput({
        statement: "",
        amount: "",
        statementType: "income",
      });
    }
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
            style={
              showError.statement ? { borderColor: "rgb(206, 76,76)" } : null
            }
          />
          <input
            name="amount"
            type="number"
            placeholder="$"
            onChange={handleUpdateInput}
            value={input.amount}
            style={showError.amount ? { borderColor: "rgb(206, 76,76)" } : null}
          />
          <select
            name="statementType"
            onChange={handleUpdateInput}
            value={input.statementType}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={handleAddNewStatement}>+</button>
        </div>
      </div>
    </main>
  );
}

export default App;
