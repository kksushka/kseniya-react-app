import z from "zod"

export interface Geo {
    "lat": string,
    "lng": string
}

export interface Address {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": Geo,
}

export interface Company {
    "name": string,
    "catchPhrase": string,
    "bs": string
}

export interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": Address,
    "phone": string,
    "website": string,
    "company": Company,
}


export const CreateUserSchema = z.object({
    username: z.string()
        .min(1, 'Required')
        .max(150, '150 characters or fewer')
        .regex(/^[\w.@+-]+$/, 'Letters, digits and @/./+/-/_ only.'),
    email: z.email()
        .min(1, 'Required')
        .max(254, '254 characters or fewer'),
    password: z.string()
        .min(8, '8 characters or more'),
    confirmPassword: z.string()
        .min(8, '8 characters or more'),
    course_group: z.number(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export type CreateUser = z.infer<typeof CreateUserSchema>