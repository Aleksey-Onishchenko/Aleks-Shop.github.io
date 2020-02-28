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
      const recalculationValue = this.shopBasket.map(function() {
        itemInBasket.quality = oneQuality + 1;
        itemInBasket.total = element.price * itemInBasket.quality;
      })
    } else if (element) {
      const newProduct = {
        id: id,
        quality: 1,
        total: element.price,
      };
      this.shopBasket.push(newProduct);
    } else {
    throw new Error('Wrond "ID"');
  }
  }
}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;
