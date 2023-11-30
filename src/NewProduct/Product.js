import React from 'react';

const Product = (props) => {


    return (
        <div>
            {props.productDetails}, {props.amount}, {props.productDescription}, {props.quantity}
        </div>
    );
};

export default Product;