import { describe, expect, it } from "vitest";
import usePrice from "./price"

describe("price hook to calculate and format price with quantity & discount", () => {
    it("return formatted string & number", () => {
        const [formatted, num] = usePrice(100, 2)
        expect(formatted).toBe("2.00")
        expect(num).toBe(200)
    })
    it("calculate Bulk Discount", () => {
        // bulk discount is 2 bought 1 free
        const [formatted, num] = usePrice(100, 8, 'BD')
        expect(formatted).toBe("6.00")
        expect(num).toBe(600)
    })
    it("calculate Percentage Discount", () => {
        // bulk discount is 2 bought 1 free
        const [formatted, num] = usePrice(100, 9, 'PD')
        expect(formatted).toBe("4.50")
        expect(num).toBe(450)
    })
})
