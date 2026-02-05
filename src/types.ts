interface Meal {
    id?: string
    providerId?: string
    dietary?: string
    category?: {
        cuisine?: string
    }
    name?: string
    description?: string
    price?: number
    thumbnail?: string
    isAvailable?: boolean
    reviews?: string[]
    createdAt?: Date
}