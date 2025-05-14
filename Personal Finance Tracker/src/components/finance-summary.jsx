function FinanceSummary({ transactions }) {
  const income = transactions
    .filter(t => t.type === "pemasukan")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter(t => t.type === "pengeluaran")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense;

  const format = (num) => new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR"
  }).format(num);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Ringkasan Keuangan</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-green-100 rounded-xl p-4">
          <p>Pemasukan</p>
          <p className="text-green-600 font-bold">{format(income)}</p>
        </div>
        <div className="bg-red-100 rounded-xl p-4">
          <p>Pengeluaran</p>
          <p className="text-red-600 font-bold">{format(expense)}</p>
        </div>
        <div className="bg-blue-100 rounded-xl p-4">
          <p>Saldo</p>
          <p className="text-blue-600 font-bold">{format(balance)}</p>
        </div>
      </div>
    </div>
  );
}

export default FinanceSummary;