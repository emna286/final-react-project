import {createStore}from 'redux';
import {productsReducer} from './productsReducer'

//1-create store
export const store = createStore(productsReducer);

