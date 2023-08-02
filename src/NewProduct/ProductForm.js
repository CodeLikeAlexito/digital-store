import React, { useState } from 'react';

import './NewProduct.css';

const ProductForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setAmount] = useState(0);
    const [enteredText, setEnteredText] = useState('');
    const [counter, setCounter] = useState(0);

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const textChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredText(event.target.value);
    };

    const incrementOnClick = () => {
        // event.preventDefault();
        // setCounter(counter + 1);
        setCounter(prevCount => prevCount + 1);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            title: enteredTitle,
            text: enteredText,
            counter: counter
        };

        // console.log(formData);
        props.onSaveProductData(formData);

        setEnteredTitle('');
        setEnteredText('');
        setAmount(0);
        setCounter(0);
    }


    return (
    <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange = {titleChangeHandler} />
            </div>
            <div>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
        </div>
        <div>
            <label>Your message</label>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <p>{enteredText.length >= 3 ? 'Valid message' : 'Invalid message' }</p>
        </div>
        <div>
            <label>Counter:</label>
            <p>{counter}</p>
            <button type="button" onClick={incrementOnClick}>Increment</button>
        </div>
        <div>
            <button type='submit'>Submit Form</button>
        </div>
    </form>
    );
};


export default ProductForm;
