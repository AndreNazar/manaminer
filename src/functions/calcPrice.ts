function calcPrice(initial: number, times: number): number {
    return Array(times).fill(initial).reduce((acc) => acc * 2, initial);
}
export default calcPrice