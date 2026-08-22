import * as z from "zod";

export const Study = z.object({
    class: z.string(),
    content: z.string(),
    liked: z.boolean()
})