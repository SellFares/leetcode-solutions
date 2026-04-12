/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    
    let res = new Array(n).fill(0);
    let stack = []
    let x
    let nextx 
    let lastx
    let lastnextx
    for( let i=0 ; i < logs.length-1 ; i++ )   {
        x = logs[i]
        nextx = logs[i+1]
        // console.log("command :'",x,"'")
        // console.log("next command :'",nextx,"'")
        lastx = Number(x.slice(x.lastIndexOf(":") + 1))
        lastnextx = Number(nextx.slice(nextx.lastIndexOf(":") + 1))
        
        // console.log("lastx :'",lastx,"'")
        // console.log("lastnextx :'",lastnextx,"'")
        if ( x.includes("start") ){
            let id = Number(x.slice(0, x.indexOf(":")));
            stack.push(id)
            last = stack[stack.length-1]
            console.log("last wahdou :'",last,"'")
            if (  nextx.includes("start") ){
                res[last] += lastnextx - lastx
            }else if ( nextx.includes("end") ) {
                res[last] += lastnextx - lastx  + 1 
            }
            
        }else if( ( x.includes("end") ) ){
            stack.pop()
            last = stack[stack.length-1]
            console.log("last wahdou :'",last,"'")
            if (  nextx.includes("start") ){
                res[last] += lastnextx - 1  - lastx
            }else if ( nextx.includes("end") ) {
                res[last] += lastnextx  - lastx
            }
        }
        // console.log("stack: ",stack)
        // console.log(res)
    } 
    console.log("finale",res)
    
    return res
    
}
