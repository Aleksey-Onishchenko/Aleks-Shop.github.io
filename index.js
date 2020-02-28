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

ё1
class ShopBasket {
  constructor(config) {
    this.shopProducts = config.shopProducts;
    this.shopBasket = [];
  }

  create(id) {
    const element = this.shopProducts.find(elem => elem.id === id);
    
    for (let i = 0; i < this.shopBasket.length; i += 1) {
      const itemInBasket = this.shopBasket.find(item => item.id === id); // объект в корзине

      if (itemInBasket === this.shopBasket[i]) {
        console.log('we have 1 like this');
        itemInBasket.quality += 1;
        itemInBasket.total = itemInBasket.total * itemInBasket.quality;
      } 
    } if (element !== undefined) {
      const newProduct = {
        id: id,
        quality: 1,
        total: element.price,
      };
      this.shopBasket.push(newProduct);
    }
  }
}


const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;