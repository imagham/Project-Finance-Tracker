function TransactionList({ transactions, onDelete }) {
  const formatRupiah = num =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(num);

  return (
    <div>
      <h2>Daftar Transaksi</h2>
      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.description} - {formatRupiah(t.amount)} ({t.type})
            <button onClick={() => onDelete(t.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;