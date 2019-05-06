export function queryToObj (queryString) {
    /* 去掉字符串前面的"?"，并把&amp;转换为& */
    queryString = queryString.replace(/^\?+/, '').replace(/&amp;/, '&')
    let querys = queryString.split('&')
    let i = querys.length
    let _URLParms = {}

    while (i--) {
        let item = querys[i].split('=')
        if (item[0]) {
            var value = item[1] || ''
            try {
                value = decodeURIComponent(value)
            } catch (e) {
                value = unescape(value)
            }
            _URLParms[decodeURIComponent(item[0])] = value
        }
    }
    return _URLParms
}
