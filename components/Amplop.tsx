import { amplopDetails } from "@/lib/data";

export default function Amplop() {
    return (
      <section className="py-16 px-4 bg-rose-50 text-center">
        <h2 className="text-2xl font-semibold mb-6">Amplop Digital</h2>
        <div className="grid gap-6 max-w-md mx-auto">
          {amplopDetails.map((bank, index) => (
            <div key={index} className="bg-white shadow rounded p-4 flex items-center gap-4">
              <img src={bank.bankImage} alt={bank.bankName} className="w-16 h-10 object-contain" />
              <div className="text-left">
                <p className="font-medium text-sm">{bank.bankName}</p>
                <p className="text-sm">{bank.accountNumber}</p>
                <p className="text-xs text-gray-500">a.n. {bank.onBehalfOf}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }