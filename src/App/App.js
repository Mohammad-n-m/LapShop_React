import React, { Component } from 'react';
import './App.css';
import Create_Shop_Product from '../CreateStoreProduct/Create_Shop_Product.js';
import Create_User_Basket from '../CreateUserBasket/Create_User_Basket.js'
import Create_btns_pagging from '../Create_btns_pagging/Create_btns_pagging.js'



class App extends Component {
    constructor(props) {
      super(props);

 
    this.state={
      Story_products:[
      {id:1,name:"asus",src:"./imgs/a.jpg",price:155,lengthPU:10,count:1},
      {id:2,name:"lenovo",src:"./imgs/b.jpg",price:150,lengthPU:5,count:1},
      {id:3,name:"samsung",src:"./imgs/c.jpg",price:235,lengthPU:3,count:1},
      {id:4,name:"asus",src:"./imgs/d.jpg",price:173,lengthPU:15,count:1},
      {id:5,name:"samsung",src:"./imgs/e.jpg",price:300,lengthPU:5,count:1},
      {id:6,name:"lenovo",src:"./imgs/f.jpg",price:79,lengthPU:1,count:1},
      {id:7,name:"asus",src:"./imgs/g.jpg",price:155,lengthPU:10,count:1},
      {id:8,name:"lenovo",src:"./imgs/h.jpg",price:150,lengthPU:5,count:1},
      {id:9,name:"samsung",src:"./imgs/i.jpg",price:235,lengthPU:3,count:1},
      {id:10,name:"asus",src:"./imgs/j.jpg",price:173,lengthPU:15,count:1},
      {id:11,name:"samsung",src:"./imgs/k.jpg",price:300,lengthPU:5,count:1},
      {id:12,name:"lenovo",src:"./imgs/l.jpg",price:79,lengthPU:1,count:1}
      ],
      List_page_show:[
          {id:1,name:"asus",src:"./imgs/a.jpg",price:155,lengthPU:10,count:1},
          {id:2,name:"lenovo",src:"./imgs/b.jpg",price:150,lengthPU:5,count:1},
          {id:3,name:"samsung",src:"./imgs/c.jpg",price:235,lengthPU:3,count:1},
      ],
      user_basket:[],
      total:0,
      page_now:1,
      page_row:3,
    }

  }

  componentDidMount(){
    // ? this will get property from losalStorage

    let localStorageTodos = JSON.parse(localStorage.getItem('todos'))

    if (localStorageTodos) {

        this.setState({
            user_basket:localStorageTodos
        },()=>{
          this.Fun_Change_total()
        })
      } 

  }


//? for check and add product in user_basket
  fun_Add_To_User_basket=(Id)=>{

    let Index_product=this.state.Story_products.find((item)=>{
      return Id==item.id
    })


    let result_of_User_basket=this.state.user_basket.some(item=>{
      return item.id==Index_product.id
    })


  //? we check that there is the same product or not?
    if(!result_of_User_basket){
      this.setState((prevState)=>{
        return{
          user_basket:[...prevState.user_basket,Index_product]
        }
      },()=>{
        this.Fun_Change_total()
       })
    }

  }





//? this is for chagne the count of a product of UserBasket
  Fun_change_count_product=(Id,e)=>{
// console.log(this.state.user_basket)
    let Example_array=this.state.user_basket

    Example_array.some(item=>{
      if(item.id==Id){

        item.count=e.target.value;

        return true
      }
    })


    this.setState({
      user_basket:Example_array
    },()=>{
      this.Fun_Change_total()
    })

  }


// ? this is for change to total price 
  Fun_Change_total=()=>{

    let resutl_of_total=0

    this.state.user_basket.map(item=>{
      resutl_of_total+=item.price*item.count
    })

    this.setState({
      total:resutl_of_total
    })

    localStorage.setItem('todos', JSON.stringify(this.state.user_basket))

  }





// ? this is for delete an intem when use clicked on a product
  Fun_removeItem_Of_UserBasket=(Id)=>{

    let Index_product = this.state.user_basket.findIndex((item)=>{
      return item.id==Id
    })
    // console.log(this.state.user_basket)

    let Example_array=this.state.user_basket

    Example_array.splice(Index_product,1)
    this.setState({
    user_basket:Example_array
    },()=>{
    this.Fun_Change_total()
 })

  }



// ?this will change the products with changing page
Fun_change_page_now=(event,index)=>{

    this.setState({
      page_now:index

    },()=>{

      let end_Index = this.state.page_row * this.state.page_now
      let start_Index = end_Index - this.state.page_row
      let items_In_EveryPage = this.state.Story_products.slice(start_Index, end_Index)

      this.setState({
        List_page_show:items_In_EveryPage
      })
    })


// ?we use this code to select 'active' btn then remove class from it and set 'active' to clicked btn
    const activeButton = document.querySelector('.active');

    if(activeButton){
      // console.log(activeButton)
      activeButton.classList.remove('active');
      activeButton.classList.add('pageningBtn');
    }
  
    event.target.classList.add('pageningBtn', 'active');

}



  render() { 
    return (
      <>
          <header className="main-header">
              <h1 className="band-name band-name-large">Nahali Shop</h1>
          </header>

          <section className="container content-section">
              <div className="shop-items product_items">
              {this.state.List_page_show.map((item)=>{
                return <Create_Shop_Product fun_AddToUserBasket={this.fun_Add_To_User_basket} {...item} key={item.id}/>
              })}
              </div>

              <div className='Btns_flex'>
                {
                   <Create_btns_pagging Fun_change_page_now={this.Fun_change_page_now}/>
                }
              </div>
          </section>


          <section className="container content-section">
             <h2 className="section-header">CART</h2>
             <div className="cart-row">
                 <span className="cart-item cart-header cart-column">ITEM</span>
                 <span className="cart-price cart-header cart-column">PRICE</span>
                 <span className="cart-quantity cart-header cart-column">QUANTITY</span>
              </div>

            <div className="cart-items">
              {this.state.user_basket.map((item)=>{
                return <Create_User_Basket Fun_removeItem_Of_UserBasket={this.Fun_removeItem_Of_UserBasket} Fun_changeCountProduct={this.Fun_change_count_product} {...item} key={item.id} />
              })}
            </div>

            <div className="cart-total">
               <strong className="cart-total-title">Total</strong>
               <span className="cart-total-price">{`${this.state.total}$`}</span>
            </div>
          </section>

      </>
    );
  }
}
 
export default App;
