function TransactionList({ transactions, onDelete }) {
  const format = (num) => new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR"
  }).format(num);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Daftar Transaksi</h2>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center p-2 bg-gray-50 rounded border"
          >
            <div>
              <p className="font-medium">{t.description}</p>
              <p className={`text-sm ${t.type === "pemasukan" ? "text-green-600" : "text-red-600"}`}>
                {format(t.amount)} ({t.type})
              </p>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => onDelete(t.id)}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
