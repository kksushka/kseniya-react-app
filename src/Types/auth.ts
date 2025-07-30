import z from "zod";

export const ActivateUserSchema = z.object({
    uid: z.string(),
    token: z.string(),
});

export type ActivateUserData = z.infer<typeof ActivateUserSchema>;

export const CreateJwtSchema = z.object({
    email: z.email(),
    password: z.string(),
});

export type CreateJwtData = z.infer<typeof CreateJwtSchema>;

export const JwtResponseSchema = z.object({
    access: z.email(),
    refresh: z.string(),
});

export type JwtResponse = z.infer<typeof JwtResponseSchema>;

export type RefreshJwtRequest = Omit<JwtResponse, 'access'>;
export type RefreshJwtResponse = Omit<JwtResponse, 'refresh'>;