import * as z from "zod";

export const Habit = z.object({
    name: z.string(),
    desc: z.string(),
    frequency: z.int()
})