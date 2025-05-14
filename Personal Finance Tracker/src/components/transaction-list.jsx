import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

function TransactionList({ transactions, onDelete }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-bold text-center mb-4">Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada transaksi.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((t) => (
            <motion.li
              key={t.id}
              layout
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow"
            >
              <div>
                <p className="font-medium text-gray-800">{t.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(t.date).toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
                <p className={`text-sm ${t.type === "pemasukan" ? "text-green-600" : "text-red-600"}`}>
                  {t.type === "pemasukan" ? "+" : "-"}{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(t.amount)}
                </p>
              </div>
              <button
                onClick={() => onDelete(t.id)}
                className="text-red-500 hover:text-red-700"
                title="Hapus"
              >
                <Trash2 />
              </button>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default TransactionList;