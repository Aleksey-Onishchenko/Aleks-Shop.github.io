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
  
    const element = this.shopProducts.find(elem => elem.id === id);
    const itemInBasket = this.shopBasket.find(item => item.id === id);
  
    if (itemInBasket) {
      const oneQuality = itemInBasket.quality;
      let newItemBasket = itemInBasket;
      const recalculationValue = this.shopBasket.map(function() {
        newItemBasket.quality = oneQuality + 1;
        newItemBasket.total = element.price * newItemBasket.quality;
      })
      return;
    } 
    if (element) {
      const newProduct = {
        id: id,
        quality: 1,
        total: element.price,
      };
      this.shopBasket.push(newProduct);
      return;
    } 
      throw new Error('Wrond "ID');
  }

  delete(id) {
    let uninstallItems = this.shopBasket.filter(element => element.id !== id);
    console.log(uninstallItems);
  }

  update() {

  }
}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;
