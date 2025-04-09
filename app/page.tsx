"use client"

import { DataTable } from "./data-table"
import { getPayments, paymentColumns } from "./payments"

export default async function Home() {
  const data = await getPayments()
  return (
    <main className="container max-w-4xl mx-auto p-4 mt-5">
      <h1 className="text-3xl font-bold">Wassup</h1>
      <div className="my-3">
        <DataTable columns={paymentColumns} data={data} />
      </div>
    </main>
  )
}
