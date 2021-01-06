function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      stack.pop();
    },
    printStack() {
      for (let i = 0; i < stack.length; i += 1) {
        console.log(stack[i]);
      }
    },
  }
}

let sampleStack = newStack();
sampleStack.printStack();
sampleStack.push('ant');
sampleStack.push('beetle');
sampleStack.printStack();
sampleStack.pop();
sampleStack.printStack();
