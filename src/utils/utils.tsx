function binarySearch(arr: number[], x: number, start: number, end: number): number {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;
    if (arr[mid] > x) {
        const idx = binarySearch(arr, x, start, mid - 1);
        return idx;
    }
    const idx = binarySearch(arr, x, mid + 1, end);
    return idx !== -1 ? idx : mid;
}

export const getDistance = (station_path: number[], from: number): number => {
    const idx = binarySearch(station_path, from, 0, station_path.length - 1);
    const left = station_path[idx] || Number.MAX_VALUE,
        right = station_path[idx + 1] || Number.MAX_VALUE;
    return Math.min(Math.abs(from - left), Math.abs(from - right));
};
