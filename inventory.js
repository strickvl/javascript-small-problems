class ItemsManager {
  constructor() {
    this.items = [];
  }

  create(itemName, category, quantity) {
    if (this.validateItem(itemName, category, quantity) === false) {
      return { notValid: true };
    } else {
      let item = {
        skuCode: this.generateSKU(itemName, category),
        name: itemName,
        category: category,
        quantity: quantity,
      };
      this.items.push(item);
    }
  }

  generateSKU(itemName, category) {
    let words = itemName.split(' ');
    if (words.length > 1 && words[0].length === 2) {
      let part1 = words[0];
      let part2 = words[1][0];
      let part3 = category.slice(0, 2);
      return (part1 + part2 + part3).toUpperCase();
    } else {
      return (itemName.slice(0,3) + category.slice(0, 2)).toUpperCase();
    }
  }

  validateItem(itemName, category, quantity) {
    return this.validateName(itemName) && this.validateCategory(category) && this.validateQuantity(quantity);
  }

  validateName(itemName) {
    let nonSpaceCount = itemName.match(/[^ ]/gi).length;
    return nonSpaceCount >= 5;
  }

  validateCategory(category) {
    return category.length >= 5 && (category.includes(' ') !== true);
  }

  validateQuantity(quantity) {
    return Number.isInteger(quantity) === true;
  }

  update(skuCode, newValsObj) {
    let item = this.items.filter(item => item.skuCode === skuCode)[0];
    let keys = Object.getOwnPropertyNames(newValsObj);
    for (let i = 0; i < keys.length; i += 1) {
      let key = keys[i];
      item[key] = newValsObj[key];
    }
  }

  inStock() {
    console.log(this.items.filter(item => item.quantity > 0).map(item => item.name));
  }

  itemsInCategory(category) {
    console.log(this.items.filter(item => item.category === category).map(item => item.name));
  }

  delete(skuCode) {
    this.items = this.items.filter(item => item.skuCode !== skuCode);
  }
}



let ItemManager = new ItemsManager();
let ReportManager = {
  init(itemObj) {
    this.items = itemObj.items;
  },
  reportInStock() {
    console.log(this.items.filter(item => {
      return item.quantity > 0;
    }).map(item => {
      return item.name
    }).join(','));
  },
  createReporter(skuCode) {
    let items = this.items;
    return {
      itemInfo() {
        let item = items.filter(item => item.skuCode === skuCode)[0];
        console.log(`skuCode: ${item.skuCode}`);
        console.log(`itemName: ${item.name}`);
        console.log(`category: ${item.category}`);
        console.log(`quantity: ${item.quantity}`);
      },
    };
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// console.log(ItemManager.items);
// returns list with the 4 valid items
//
ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot
//
ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.inStock();
// // // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // // logs football,kitchen pot
// ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)
//
const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3
//
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10
