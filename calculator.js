var x1 = x2 = null;
let calculator = {

  read() {
    this.x1 = prompt("Please enter first number", "");
    this.x2 = prompt("Please enter second number", "");
    return (x1, x2);
  },
  sum(x1, x2) {
    return (Number(this.x1) + Number(this.x2))
  },
  mul(x1, x2) {
    return [this.x1] * [this.x2];
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());