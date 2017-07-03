// @flow

class Chicken {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  cluck() {
    return `Hiya, I am ${this.name}`;
  }
}

export default Chicken;
