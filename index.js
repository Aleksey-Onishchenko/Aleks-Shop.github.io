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
    
    if ( element !== undefined) {
      const newProduct = {
        id: id,
        quality: 1,
        total: element.price,
      };

      this.shopBasket.push(newProduct);
      const itemInBasket = this.shopBasket.find(item => item.id === id);
      
      if (this.shopBasket.hasOwnProperty(itemInBasket)) {
        newProduct.quality += 1;
      }
      }
    }
  }
  


const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;