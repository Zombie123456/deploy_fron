export function formatError (list) {
    let result = []
    for (let i = 0; i < list.length; i++) {
        let error = list[i]
        let errorKey = Object.keys(error)[0]
        result.push(error[errorKey])
    }
    return result.join(', ')
}
