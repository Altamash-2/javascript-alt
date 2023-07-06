// object oriented programming

// chaining of methode

// class decleration

class bankAcount {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.movements = [];
  }

  getMovements() {
    return this.movements;
  }

  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
}

let account = new bankAcount('john', 500038);
account.deposit(45).withdraw(25).deposit(100).withdraw(40);
// account.withdraw(65);
console.log(account.getMovements());
console.log(account);
