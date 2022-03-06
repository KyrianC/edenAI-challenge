import { computed } from "vue";

export default function(price: number) {
    const decimalPrice = computed(() => (price / 100).toFixed(2))
    return decimalPrice
}
