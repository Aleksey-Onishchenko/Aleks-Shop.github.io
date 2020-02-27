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

      console.log('HERE', this.shopProducts[0].name);
      console.log('shopBusket', this.shopBasket);
  }

  create(id) {
    const newProduct = {
      id: id,
      quality: 1,
      // total: this.shopProducts.find(item => item.id === id).price,
      total: this.shopProducts.find(function(element) {
        if (element.id === id) {
          return element.price;
        } if (element.id === -1) {
          throw 'Id is undefined!';
        }
      })
    }

    return newProduct;
  }
  
}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});


window.ShopBasketInstance = ShopBasketInstance;