export interface ProductType {
    id: number
    title: string
    price: number
    discount?: 'PD' | 'BD'
    quantity?: number
}
