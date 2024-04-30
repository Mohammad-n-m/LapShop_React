import React, { Component } from 'react';
import './Create_btns_pagging.css'

class Create_btns_pagging extends Component {
    constructor(props) {
        super(props);

    }  

    render() { 
        return (
            <>

             <button onClick={(e)=>{this.props.Fun_change_page_now(e,1)}} className='pageningBtn active'>1</button>
             <button onClick={(e)=>{this.props.Fun_change_page_now(e,2)}} className='pageningBtn'>2</button>
             <button onClick={(e)=>{this.props.Fun_change_page_now(e,3)}} className='pageningBtn'>3</button>
             <button onClick={(e)=>{this.props.Fun_change_page_now(e,4)}} className='pageningBtn'>4</button>

            </>
        );
    }
}
 
export default Create_btns_pagging;