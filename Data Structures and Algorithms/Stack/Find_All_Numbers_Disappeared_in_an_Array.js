/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const n1 = target.length
    let res = []
    let s = []

    let j=0
    let i=0
    do{
        res.push(i+1)
        s.push("Push")
        if( target[j] != i+1 ){
            res.pop()
            s.push("Pop")
        }else {
            j++
        }
        i++
    }
    while( i-1 != target[n1-1] )
    s.pop()
    s.pop()
    console.log(res)
    console.log(s)
    return s
};
