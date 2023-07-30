import { User } from "@prisma/client";
// this component's been created in order to not pass DateTime types to compnents (Navbar and UserMenu) but instead string (type safety)
export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string,
    updatedAt: string,
    emailVerified: string | null
}