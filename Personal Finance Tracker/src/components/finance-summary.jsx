import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

function FinanceSummary({ transactions }) {
  const income = transactions
    .filter(t => t.type === "pemasukan")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter(t => t.type === "pengeluaran")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense;

  const format = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);

  const Card = ({ title, icon: Icon, amount, bgFrom, bgTo, textColor }) => (
    <div
      className={`rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 bg-gradient-to-br ${bgFrom} ${bgTo}`}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <Icon className={`w-6 h-6 ${textColor}`} />
      </div>
      <p className={`text-2xl font-bold ${textColor}`}>{format(amount)}</p>
    </div>
  );

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        Ringkasan Keuangan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card
          title="Pemasukan"
          icon={ArrowDownCircle}
          amount={income}
          bgFrom="from-green-100"
          bgTo="to-green-200"
          textColor="text-green-700"
        />
        <Card
          title="Pengeluaran"
          icon={ArrowUpCircle}
          amount={expense}
          bgFrom="from-red-100"
          bgTo="to-red-200"
          textColor="text-red-700"
        />
        <Card
          title="Saldo"
          icon={Wallet}
          amount={balance}
          bgFrom="from-blue-100"
          bgTo="to-blue-200"
          textColor="text-blue-700"
        />
      </div>
    </div>
  );
}

export default FinanceSummary;
