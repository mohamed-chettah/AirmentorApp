export type UserType = {
    email?: string
    username?: string
    role?: ['ROLE_USER' | 'ROLE_ADMIN'],
    isConfirmed?: number
}