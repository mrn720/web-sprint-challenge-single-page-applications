import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';


const Pizza = (props) => {
    const { values, submit, change, errors, disabled } = props

    const onSubmit = evt => {
        evt.preventDefault()
        evt.target.reset()
        submit()
        
    }
    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <MainDiv className = "pizzaFormDiv">
            <h1>Order Pizza in 60 Seconds</h1>
            <form id = "pizza-form" onSubmit = {onSubmit}>

                <label><h4>Full Name</h4>
                    <Required>*Required*</Required>
                    <input id = "name-input" name = "name" type="text" value = {values.name} onChange={onChange}/>
                </label>

                <label>
                    <h4>Size Options</h4>
                    <Required>*Required*</Required>
                    <select id = "size-dropdown" onChange={onChange} value={values.size} name='size'>
                        <option value = ''>--Select size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                        <option value = 'xlarge'>Extra Large</option>
                    </select>
                </label>

                <label>
                    <h4>Pick A Sauce</h4>
                    <Required>*Required*</Required>
                    <label>
                        <input type = 'radio' name = 'sauce' value = 'marinara' onChange={onChange} />
                        Marinara
                    </label>

                    <label>
                        <input type = 'radio' name = 'sauce' value = 'white garlic' onChange={onChange} />
                        White Garlic
                    </label>

                    <label>
                        <input type = 'radio' name = 'sauce' value = 'barbeque' onChange={onChange} />
                        Barbeque
                    </label>
                </label>

                <ToppingLabel>
                    <h4>Select Toppings</h4>

                    <label>
                        <input type= 'checkbox' name = 'pepperoni' onChange={onChange} />
                        Pepperoni 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'ham' onChange={onChange} />
                        Ham 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'chicken' onChange={onChange} />
                        Chicken 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'salami' onChange={onChange} />
                        Salami 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'extraCheese' onChange={onChange} />
                        Extra Cheese 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'onions' onChange={onChange} />
                        Onions 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'pickles' onChange={onChange} />
                        Pickles 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'jalapeno' onChange={onChange} />
                        Jalapeno 
                    </label>

                    <label>
                        <input type = 'checkbox' name = 'pineapple' onChange={onChange} />
                        Pineapple 
                    </label>
                </ToppingLabel>

                <label>
                <h3>Leave Us Special Instructions Below</h3>

                <input id = "special-text" name = 'instructions' type = 'text' onChange={onChange} value = {values.instructions}/>
                </label>
                <div className = "errors">
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                    <p>{errors.sauce}</p>
                </div>
                <button id = "order-button" onSubmit = {onSubmit} disabled={disabled}>Order Pizza</button>
            </form>
        </MainDiv>
    );
    };

    const MainDiv = styled.div`
    color: white;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

    const ToppingLabel = styled.label`
    display: flex;
    flex-direction: column;
    `

    const Required = styled.h6`
    color:red;
    `

export default Pizza; 