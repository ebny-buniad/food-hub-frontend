export interface Meal {
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


export interface Cart {
    id: string,
    cartId: string,
    mealId: string,
    quantity: number,
    price: string,
    meals: {
        providerId: string
        name: string,
        thumbnail: string,
        category: {
            cuisine: string
        }
    }
}