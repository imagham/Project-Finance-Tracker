function FinanceSummary({ transactions }) {
  const income = transactions
    .filter(t => t.type === "pemasukan")
    .reduce((sum, t) => sum + t.amount, 0);
    
  const expense = transactions
    .filter(t => t.type === "pengeluaran")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const formatRupiah = num =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(num);

  return (
    <div>
      <h2>Ringkasan Keuangan</h2>
      <p>Total Pemasukan: {formatRupiah(income)}</p>
      <p>Total Pengeluaran: {formatRupiah(expense)}</p>
      <p>Saldo Akhir: {formatRupiah(balance)}</p>
    </div>
  );
}
