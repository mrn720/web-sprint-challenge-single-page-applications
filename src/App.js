import axios from 'axios'
import React, { useState, useEffect } from "react"
import { Route, Switch } from 'react-router-dom'
import * as yup from 'yup'
import Nav from './components/Nav'
import Pizza from './components/Pizza'
import Home from './components/Home'
import formSchema from './components/formSchema'

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: 'false',
  jalapeno: 'false',
  ham: 'false',
  pineapple: 'false',
  onion: 'false',
  chicken: 'false',
  pickles: 'false',
  extraCheese: 'false',
  salami: 'false',
  instructions:'',
};

const initialFormErrors = {
  name: "Name required to place order.",
  size: "Please choose a pizza size.",
  sauce: "Please choose a sauce."
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postPizza = orders => {
    axios.post('https://reqres.in/api/orders', orders)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  };

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: [ 'pepperoni', 'ham', 'salami', 'chicken', 'extraCheese', 'onions', 'pineapple', 'jalapeno', 'pickles' ].filter(topping => formValues[topping])
    }
    postPizza( pizza )
    setFormValues(initialFormValues)
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return ( 
    <>
     <Switch>
      <Route id = 'pizza-form' path="/pizza">
        <Nav />
        <Pizza 
        values={ formValues } 
        change={ inputChange } 
        submit={ formSubmit } 
        errors={ formErrors } 
        disabled = { disabled }/>
      </Route>
      <Route id= 'order-pizza' path="/">
        <Nav />
        <Home />
      </Route>
    </Switch>
    </>
  );
};

export default App