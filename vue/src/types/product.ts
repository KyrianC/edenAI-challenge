export interface ProductType {
    id: number
    title: string
    base_price: number
    discount?: 'PD' | 'BD'
    quantity?: number
}
