import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DataTable } from "./data-table"
import { Payment, paymentColumns } from "./payments"

async function getPayments(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },

    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "dd@example.com",
    },

    {
      id: "a93bc123",
      amount: 299,
      status: "success",
      email: "john@example.com",
    },

    {
      id: "ff982d41",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "12de45fg",
      amount: 450,
      status: "pending",
      email: "mike@example.com",
    },
    {
      id: "ff982d41",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "12de45fg",
      amount: 450,
      status: "pending",
      email: "mike@example.com",
    },
    {
      id: "ff982d41",
      amount: 75,
      status: "failed",
      email: "sarah@example.com",
    },
    {
      id: "12de45fg",
      amount: 450,
      status: "pending",
      email: "mike@example.com",
    },
  ]
}

export default async function Home() {
  const payments = await getPayments()

  return (
    <main className="container max-w-4xl mx-auto p-4 mt-5">
      <h1 className="text-3xl font-bold">Wassup</h1>
      <ModeToggle />
      <div className="my-3">
        <DataTable columns={paymentColumns} data={payments} />
      </div>
      <Button variant="outline">AA</Button>
    </main>
  )
}
