function TransactionForm({ onAddTransaction }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!desc || amount <= 0 || !type) {
      alert("Isi semua field dengan benar.");
      return;
    }

    onAddTransaction({
      id: Date.now(),
      description: desc,
      amount: Number(amount),
      type
    });

    // Reset form
    setDesc("");
    setAmount("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        placeholder="Deskripsi"
      />
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Jumlah"
      />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">Pilih Jenis</option>
        <option value="pemasukan">Pemasukan</option>
        <option value="pengeluaran">Pengeluaran</option>
      </select>
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TransactionForm;
