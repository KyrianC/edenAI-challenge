type discount = 'BD' | 'PD' | null | undefined

export default function(price: number, quantity = 1, discount: discount, format = true) {
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
            let result: number | string = (price * quantity) / 100
            if (format)
                result = result.toFixed(2)
            return result
    }
}
