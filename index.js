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
    ];
  }

  create(id) {
  
    // const itemInBasket = this.shopBasket.find(item => item.id === id);
  
    // if (itemInBasket) {
    //   const itemsQuality = itemInBasket.quality;
    //   console.log('basketQuality', itemInBasket.quality);
    //   console.log('itemsQuality:', itemsQuality);
    //   console.log('total', itemInBasket.total);
    //   this.shopBasket = this.shopBasket.map(function() {
    //     itemInBasket.quality = itemInBasket.quality + 1;
    //     itemInBasket.total = (itemInBasket.total / itemsQuality) * itemInBasket.quality;
    //     return itemInBasket;
    //   })
    //   return;
    // } 
    
    // const element = this.shopProducts.find(elem => elem.id === id);

    // if (element) {
    //   const newProduct = {
    //     id: id,
    //     quality: 1,
    //     total: element.price,
    //   };
    //   this.shopBasket.push(newProduct);
    //   return;
    // } 
    //   throw new Error('Wrong "ID');
  }

  delete(id) {

    // const itemInBasket = this.shopBasket.find(item => item.id === id);

    // if (id !== itemInBasket.id) {
    //   throw new Error('Wrong "ID"');
    // } 
      this.shopBasket = this.shopBasket.filter(elem => elem.id !== id);
      
  }

}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});

window.ShopBasketInstance = ShopBasketInstance;
