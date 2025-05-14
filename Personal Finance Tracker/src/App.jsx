import { useState, useEffect } from "react";
import FinanceSummary from "./components/finance-summary";
import TransactionForm from "./components/transaction-form";
import TransactionList from "./components/transaction-list";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx) =>
    setTransactions([newTx, ...transactions]);

  const deleteTransaction = (id) =>
    setTransactions(transactions.filter((t) => t.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl">
        <FinanceSummary transactions={transactions} />
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
