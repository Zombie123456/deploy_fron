export function chunk (array, chunkLen, defaultArray, last) {
    let chunks = []
    let i = 0
    if (last) {
        array.push(last)
    }
    let n = array.length
    let defaultArrayAdded = 0
    while (i < n) {
        let tmp = array.slice(i, i += chunkLen)
        while (tmp.length < chunkLen) {
            if (defaultArray && !defaultArrayAdded) {
                tmp.push(defaultArray)
                defaultArrayAdded = 1
            } else {
                tmp.push('')
            }
        }
        chunks.push(tmp)
    }
    return chunks
}
