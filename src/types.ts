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

export interface Route {
    title: string,
    items: {
        title: string;
        url: string
    }[];
}

export type OrderItem = {
    id: string
    status: string
    deliveryAddress: string
    paymentMethod: string
    totalAmount: string
    createdAt: string
    provider: {
        id: string
        restaurentName: string
    }
    orderItems: {
        quantity: number
        price: string
        meals: {
            id: string
            name: string
            thumbnail: string
        }
    }[]
}


export interface Review {
    rating: number
    comment: string
    createdAt: string
    customer: {
        name: string
    }
}
