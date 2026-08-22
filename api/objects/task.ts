import * as z from "zod";

export const Task = z.object({
    name: z.string(),
    desc: z.string(),
    priority: z.int(),
    time: z.int(),
    deadline: z.date(),
    link: z.string()
})