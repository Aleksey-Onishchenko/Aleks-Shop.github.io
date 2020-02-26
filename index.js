class ShopProducts {
  constructor() {
     shopProducts = [
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

  }

  
}

const ShopProductsInstance = new ShopProducts('root');

window.ShopProductsInstance = ShopProductsInstance;


class ShopBasket {
  constructor() {
    shopBasket = [
      {

      },
      {

      },
    ]

  }

  
}