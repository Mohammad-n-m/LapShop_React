import React, { Component } from 'react';
import './Create_User_Basket.css'

class Create_User_Basket extends Component {
    constructor(props) {
        super(props);

    }

    render() { 

        return (
            <>
                
                <div className="cart-row">
                    <div className='cart-item cart-column'>
                        <img src={this.props.src} className="cart-item-image" />
                        <span className='cart-item-title'>{this.props.name}</span>
                    </div>
                    <span className='cart-price cart-column'>{this.props.price}</span>
                    <div className='cart-quantity cart-column'>
                        <input type="number" className='cart-quantity-input' min={1} max={this.props.lengthPU} onChange={(e)=>{this.props.Fun_changeCountProduct(this.props.id,e)}} value={this.props.count} />
                        <button onClick={()=>{this.props.Fun_removeItem_Of_UserBasket(this.props.id)}} className='btn btn-danger'>Remove</button>
                    </div>
                </div>
             

                    
            </>
        );
    }
}
 
export default Create_User_Basket;