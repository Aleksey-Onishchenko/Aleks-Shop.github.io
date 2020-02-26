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

        },
        {

        },
      ]

      console.log('HERE', this.shopProducts);
  }

    create(id, name, price, images) {
   const newProduct = {
    id: id,
    name: name,
    price: price,
    image: images,
   }

  //  let newArr = this.shopProducts.push(newProduct);
  //  return newArr;
  return newProduct;
  }
  
}

const ShopBasketInstance = new ShopBasket({
  shopProducts,
});


window.ShopBasketInstance = ShopBasketInstance;