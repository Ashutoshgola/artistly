import { ARTISTS } from "@/lib/data";
import Table from "@/components/Table";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
      <Table data={ARTISTS} />
    </div>
  );
}
