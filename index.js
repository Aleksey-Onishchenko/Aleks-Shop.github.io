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

class ShopProducts {
  constructor(config) {
    this.shopProducts = config.shopProducts;
  }


  create() {
   const newProduct = {
    id: ,
    name: ,
    price: ,
    image: ,
   }
   this.shopProducts.push(newProduct);
  }


  delete() {


  }
  
  update() {

  }

  read() {

  }



  addProductToBusket() {

  }

}

new ShopProducts({
  images,
});

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