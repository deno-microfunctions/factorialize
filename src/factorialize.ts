export function factorialize(n: number): number {
    let result = n
    if (n === 0 || n === 1) return 1
    while (n > 1) {
        n = n - 1
        result = result * n
    }
    return result
}
