import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart [i];
        totalPrice = totalPrice + product.price;
    }

    let shipping = 0;
    if( totalPrice > 35){
        shipping =0;
    }

    
    else if(totalPrice > 15){
        shipping = 4.99;


    }
    else if(totalPrice > 0){
        shipping =12.99;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Orders:{cart.length}</p>
            <p>Total Pric: {totalPrice}</p>
            <p>shipping Cost: {totalPrice + shipping}</p>
        </div>
    );
};

export default Cart;