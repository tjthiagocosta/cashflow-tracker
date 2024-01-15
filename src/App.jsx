import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

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

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = statements.reduce((sum, { amount, type }) => {
      return type === "income"
        ? sum + parseFloat(amount)
        : sum - parseFloat(amount);
    }, 0);
    setTotal(newTotal.toFixed(2));
  }, [statements]);

  const renderTotal = () => {
    if (total > 0) {
      return <h1 className="success">+${total}</h1>;
    } else if (total < 0) {
      return <h1 className="danger">-${Math.abs(total)}</h1>;
    } else {
      return <h1>${total}</h1>;
    }
  };

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
          id: uuidv4(),
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
        {renderTotal()}
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
        {statements.map(({ id, name, type, amount, date }) => (
          <div key={id} className="card">
            <div className="card-info">
              <h4>{name}</h4>
              <p>{date}</p>
            </div>
            <p
              className={`amount-text ${
                type === "income" ? "success" : "danger"
              }`}
            >
              {type === "income" ? "+" : "-"}${amount}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
