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
    this.shopBasket = [
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
    ];
  }

  create(id) {
  
  }

  delete(id) {
    const itemIndex = this.shopBasket.findIndex(item => item.id === id);
    if (itemIndex === -1) {
      throw new Error('Wrong ID');
    } 
    this.shopBasket.splice(itemIndex, 1);
    
  }

}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;
