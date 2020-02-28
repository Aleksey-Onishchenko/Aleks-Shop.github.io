const shopProducts = [
  {
    id: 'adidas_jogger',
    name: 'Addidas Jogger',
    price: 100,
    image: 'url.......'
  },
  {
    id: 'adidas_samba',
    name: 'Addidas Samba',
    price: 120,
    image: 'url.......'
  },
  {
    id: 'nike_jordan',
    name: 'Nike Air Jordan 1',
    price: 200,
    image: 'url.......'
  },
  {
    id: 'nike_force',
    name: 'Nike Air Force 1',
    price: 100,
    image: 'url.......'
  }
]


class ShopBasket {
  constructor(config) {
    this.shopProducts = config.shopProducts;
    this.shopBasket = [];
  }

  create(id) {
    // const element = this.shopProducts.find(elem => elem.id === id);
    // const itemInBasket = this.shopBasket.find(item => item.id === id);
    
    // for (let i = 0; i < this.shopBasket.length; i += 1) {

    //   if (itemInBasket === this.shopBasket[i]) {
    //     let startQuality = itemInBasket.total;
    //     console.log('we have 1 like this');
    //     itemInBasket.quality += 1;
    //     itemInBasket.total = (startQuality * itemInBasket.quality);
    //   } 
    //   return;
    // } 
    // if (element !== undefined) {
    //   const newProduct = {
    //     id: id,
    //     quality: 1,
    //     total: element.price,
    //   };
    //   this.shopBasket.push(newProduct);
    //   } else {
    //     throw new Error('WRONG ID');
    //   }


    let element = this.shopProducts.find(elem => elem.id === id);
    let itemInBasket = this.shopBasket.find(item => item.id === id);
  
    if (itemInBasket) {
      console.log('нынишний элемент', itemInBasket);
      let mainPrice = itemInBasket.total;
      console.log('переменная mainPrice: ', mainPrice);
      console.log('we already have this ID')
      console.log('itemInBasket TOTAL', itemInBasket.total);
      itemInBasket = {
        ...itemInBasket,
        id,
        quality: itemInBasket.quality + 1,
        total: mainPrice * itemInBasket.quality,
      }
      console.log('ARRAY', this.shopBasket)
      console.log('next itemInBasket', itemInBasket);
      return;
    }
    if (element !== undefined) {
      const newProduct = {
        id: id,
        quality: 1,
        total: element.price,
      };
      this.shopBasket.push(newProduct);
      return;
      }
  
    throw new Error('Wrond "ID"');
  }

}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;