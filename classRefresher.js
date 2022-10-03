class Person {
  constructor(fullName, birthDay, job = null) {
    this.fullName = fullName;
    this.birthDay = birthDay;
    this.job = job;
  }

  getAge() {
    const now = new Date().getTime();
    const birthDate = new Date(this.birthDay).getTime();
    return Math.floor((now - birthDate) / 1000 / 60 / 60 / 24 / 365);
  }

  setJob(job) {
    this.job = job;
  }

  greet() {
    console.log(
      `Hi I'm ${this.fullName.split(" ")[0]} and I'm ${
        this.job ? `a ${this.job}!` : `unemployed.`
      }`
    );
  }

  static giveMoney(amount, ...people) {
    people.forEach((person) => {
      person.money = person.money ? person.money + amount : amount;
    });
  }
}

const kevin = new Person("Kevin Jordan", "April 09, 1994");

kevin.greet();
console.log(kevin.getAge());
kevin.setJob("Editor");
kevin.greet();
Person.giveMoney(10, kevin);
Person.giveMoney(10, kevin);
console.log(kevin);
