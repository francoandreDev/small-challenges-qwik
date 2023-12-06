export function updateStart(move: string, n: number, max: number):number {
    if(move === "previous") return (n === 0) ? max - 1 : n - 1
    if(move === "next") return (n === max - 1) ? 0 : n + 1
    return n;
}

export function calcPos(n: number, i: number, t: number):number {
    return (n+i) % t
}