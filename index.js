//ACCOUNT
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = []
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance
  }

  addTransaction(transaction) {
    this.transactions.push(transaction)
  }
}

//TRANSACTION
class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.time = new Date();
    this.account.addTransaction(this)
  }
}

///DEPOSIT
class Deposit extends Transaction{

  get value() {
    return this.amount;
  }
}

///WITHDRAWAL
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
console.log('Opening Balance:', myAccount.balance)

const t1 = new Deposit(50, myAccount)
t1.commit()
console.log('After deposit:', myAccount.balance)

const t2 = new Deposit(1000, myAccount)
t2.commit();
console.log('After deposit 2:', myAccount.balance)

console.log('My transactions:', myAccount.transactions)

