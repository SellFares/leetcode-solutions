/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let res = 0
    do{
        if (  tokens.length == 1 ){
            return Number(tokens[0])
        }
        for(let i=0; i < tokens.length ; i++ ){
            if ( !(Math.sign(tokens[i])) && tokens[i]!="0" ){
                op = tokens[i]
                p=i
                break
            }
        }

        console.log(op)
        switch ( op ) {
            case "+":
                res = Number(tokens[p-2]) + Number(tokens[p-1])
                break;
            case "-":
                res = Number(tokens[p-2]) - Number(tokens[p-1])
                break;
            case "*":
                res = Number(tokens[p-2]) * Number(tokens[p-1])
                break;
            case "/":
                res =  Number(tokens[p-2]) / Number(tokens[p-1] ) 
                if (res >= 0){
                    res = Math.floor(res)
                }else{
                    res = Math.trunc(res)
                }
                break;
        }
        let tokensCopy = tokens
        tokens = tokensCopy.slice(0, p-2) 
        tokens.push((res).toString()) 
        tokens.push(...tokensCopy.slice(p+1))
        console.log(tokens)
        //console.log(tokens.length)
        // console.log(res)
    }
    while( tokens.length >= 3  )

    console.log("kamelna boucle")
    console.log(tokens)
    console.log(res)
    return res
};
