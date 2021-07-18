import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().trim().required('Name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().required('Size is required'),
    sauce: yup.string().required('Sauce is required'),
    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    chicken: yup.boolean(),
    salami: yup.boolean(),
    extraCheese: yup.boolean(),
    pineapple: yup.boolean(),
    pickles: yup.boolean(),
    jalapeno: yup.boolean(),
    onions: yup.boolean(),
    instructions: yup.string()
})

export default formSchema 