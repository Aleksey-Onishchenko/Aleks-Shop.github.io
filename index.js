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
    let truID = this.shopProducts.find(elem => elem.id === id); // все елементы 
    
      if (truID === id) {
        const newProduct = {
          id: id,
          quality: 1,
          total: element.price,
        }
        this.shopBasket.push(newProduct);
        return newProduct;
        // newProduct.total = element.price;
      } else if (element.id === undefined) {
        throw new Error('We don\'t have this ID')
      }

      this.shopBasket.find(function(element) {
        if (element.id === id) {
          newProduct.quality += 1;
        }
      })
      this.shopBasket.push(newProduct);
      return newProduct;
    
    }

    
}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});


window.ShopBasketInstance = ShopBasketInstance;