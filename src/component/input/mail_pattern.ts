import * as z from "zod";

export const pattern_limit = (e: Event ) => {
    const v = (e.target as HTMLInputElement).value;
    const emailSchema = z.string().email() 
    const result = emailSchema.safeParse(v);

    return result
}