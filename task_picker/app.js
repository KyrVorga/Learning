const { indexOf } = require("lodash");
var _ = require("lodash");
class Tasks {
  constructor(obj) {
    this.items = obj;
  }

  distribute() {
    let val = (1 - _.sum(Object.values(this.items))) / 9;
    Object.keys(this.items).forEach((elem) => {
      this.items[elem] += val;
    });
  }

  print() {
    return `const items = {\n  Rings: ${this.items.Rings},
    Calisthenics: ${this.items.Calisthenics},
    Art: ${this.items.Art},
    Chess: ${this.items.Chess},
    Dance: ${this.items.Dance},
    Stretching: ${this.items.Stretching},
    Khan: ${this.items.Khan},
    Cardistry: ${this.items.Cardistry},
    Magic: ${this.items.Magic},
    };`;
  }

  lower(key) {
    this.items[key] = this.items[key] / 2;
    return this.items[key];
  }

  pick() {
    let newArr = [];
    let prev = 0;
    Object.values(this.items).forEach((elem) => {
      newArr.push(elem + prev);
      prev += elem;
    });
    let val = newArr.find((elem) => _.random(1, true) < elem);
    let key = Object.keys(this.items)[newArr.indexOf(val)];
    this.lower(key);
    this.distribute();
    return key;
  }
}

const items = {
  Rings: 0.07067329675354365,
  Calisthenics: 0.07594593049839962,
  Art: 0.13427926383173297,
  Chess: 0.04770518975765888,
  Dance: 0.13427926383173297,
  Stretching: 0.13427926383173297,
  Khan: 0.13427926383173297,
  Cardistry: 0.13427926383173297,
  Magic: 0.13427926383173297,
};
const task = new Tasks(items);

console.log(task.pick());
console.log(task.print());
