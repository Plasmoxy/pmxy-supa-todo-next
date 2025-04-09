"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: () => <div>Waaat</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export async function getPayments(): Promise<Payment[]> {
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
