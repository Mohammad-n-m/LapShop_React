import React, { Component } from 'react';
import './Create_Shop_Product.css'

class CreateShopProduct extends Component {
    constructor(props) {
        super(props);

    }
    render() { 

        return (
            <div className='shop-item'>
                <span className='shop-item-title'>{this.props.name}</span>
                <img className="shop-item-image" src={this.props.src}></img>
                <div className="shop-item-details">
                    <span className="shop-item-price">{this.props.price}</span>
                    <button onClick={()=>{this.props.fun_AddToUserBasket(this.props.id)}} className="btn btn-primary">ADD TO CART</button>
                </div>
            </div>
        );
    }
}
 
export default CreateShopProduct;