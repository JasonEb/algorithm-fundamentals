const countDownStack = (n) => {
    let stack = [n]
    while(stack.length > 0) {
      console.log(stack.pop())
      --n;
      if(n > 0) { stack.push(n) }
    }
  }
  
  const countDownRec = (n) => {
    if ( n < 1) { return }
    console.log(n)
    countDownRec(n - 1);
  }
  
  const countUp = (n, i = 1) => {
    if ( i > n ) { return }
    console.log(i)
    countUp(n, ++i);
  }
  
  const countUpStack = (n) => {
    let i = 1
    let stack = [i]
    while (stack.length > 0) {
      console.log(stack.pop())
      i++
      if( i <= n ) { stack.push(i) }
    }
  }
  
  const stringReadRec = (str, i = 0) => {
    if ( i > str.length ){ return }
    console.log(str[i])
    return stringReadRec(str, ++i)
  }
  
  const stringReadStack = (str) => {
    let i = 0
    let stack = [str[i]]
    while(stack.length > 0) {
      console.log(stack.pop())
      i += 1
      if( i < str.length) { stack.push(str[i]) }
    }
  }
  
  const multiply = (x = 0, y = 0) => {
  
    if ( x > 10) { return }
  
    console.log(`${x}, ${y}`)
  
    if ( y < 10 ) { multiply(x , y + 1) }
    else { multiply(x + 1, 0) }
  }
  
  const multiplyStack = (x = 0, y = 0) => {
    let pos = `${x}, ${y}`
    let stack = [pos]
  
    while(stack.length > 0) {
      console.log( stack.pop() )
  
      if( y < 10 ) {
        y++ 
        stack.push(`${x}, ${y}`)
      } else {
        x++
        y = 0
        stack.push(`${x}, ${y}`)
      }
   
      if (x > 10) { stack = [] }
    }
  }
  
  // countDown(10);
  // countUpStack(10);
  // stringReadStack("hello world")
  multiplyStack()