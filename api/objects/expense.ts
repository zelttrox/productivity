import * as z from "zod";

export const Expense = z.object({
    name: z.string(),
    type: z.string(),
    price: z.int()
})