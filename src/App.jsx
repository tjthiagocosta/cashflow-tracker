import "./App.css";

function App() {
  return (
    <main>
      <div>
        <h1>0</h1>
        <div className="input-container">
          <input type="text" placeholder="Income or Expense" />
          <input type="number" />
          <select>
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
