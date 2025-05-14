import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !type || amount <= 0) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseInt(amount),
      type,
      date: new Date().toISOString(), // ✅ tambahkan waktu otomatis
    };

    onAddTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setType("");
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Tambah Transaksi
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Deskripsi
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Contoh: Makan siang"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Jumlah (IDR)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Contoh: 50000"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Jenis Transaksi
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          >
            <option value="">Pilih Jenis</option>
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
        >
          Tambah Transaksi
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
