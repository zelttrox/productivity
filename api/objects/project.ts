import * as z from "zod";

export const Project = z.object({
    name: z.string(),
    desc: z.string(),
    type: z.string(),
    link: z.string(),
    github: z.string()
})