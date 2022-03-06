type discount = 'BD' | 'PD' | null | undefined

export default function(price: number, quantity = 1, discount: discount) {
    switch (discount) {
        case 'PD': // 50% off
            price /= 2
        case 'BD': // 2 bought 1 free
            const totalQty = 2 + 1; // 2 for bought 1 for free
            if (quantity >= totalQty) {
                const remainder = quantity % totalQty
                quantity = ((quantity - remainder) * 2 / totalQty) + remainder
            }
        default:
            const result = price * quantity
            const formatedResult = (result / 100).toFixed(2)
            return [formatedResult, result]
    }
}
