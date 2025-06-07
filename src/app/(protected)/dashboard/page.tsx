import { Card } from "@/components/ui/card";
import { Table, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <div className="space-y-6 py-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-lg font-medium">Total Invoices</h2>
          <p className="mt-2 text-3xl">$12,340</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-medium">Taxes Due</h2>
          <p className="mt-2 text-3xl">$3,210</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-medium">Alerts</h2>
          <p className="mt-2 text-3xl">2</p>
        </Card>
      </div>
      <Card className="p-6">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>2024-06-01</TableCell>
              <TableCell>$1,200</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-05-28</TableCell>
              <TableCell>$560</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Card>
      <Input placeholder="Search invoices" />
    </div>
  );
}
