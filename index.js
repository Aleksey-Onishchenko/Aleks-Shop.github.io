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
  
    const itemInBasket = this.shopBasket.find(item => item.id === id);
  
    if (itemInBasket) {
      const oneQuality = itemInBasket.quality;
      this.shopBasket = this.shopBasket.map(function() {
        itemInBasket.quality = itemInBasket.quality + 1;
        itemInBasket.total = (itemInBasket.total / oneQuality) * itemInBasket.quality;
        return itemInBasket;
      })
      return;
    } 
    
    const element = this.shopProducts.find(elem => elem.id === id);

    if (element) {
      const newProduct = {
        id: id,
        quality: 1,
        total: element.price,
      };
      this.shopBasket.push(newProduct);
      return;
    } 
      throw new Error('Wrong "ID');
  }
}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;
