

export function factorializeRecursive(n: number): number {
    if (n < 0) return -1
    if (n === 0) return 1
    return (n * factorializeRecursive(n - 1))
}
