import { useState, useEffect } from "react";
import FinanceSummary from "./components/finance-summary";
import TransactionForm from "./components/transaction-form";
import TransactionList from "./components/transaction-list";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => setTransactions([...transactions, tx]);
  const deleteTransaction = (id) =>
    setTransactions(transactions.filter((tx) => tx.id !== id));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">💰 Personal Finance Tracker</h1>
        <FinanceSummary transactions={transactions} />
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}

export default App;
