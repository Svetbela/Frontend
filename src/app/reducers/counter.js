import {createSlice} from "@reduxjs/toolkit";
import {itemList} from "../../content";

const initialState = {
    menu: itemList,
    basket: [],
    counter: 0,
    sum: 0
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.menu.forEach(element => {
                if (element.id === action.payload) {
                    state.basket.push(element)
                }
            });
        },

        removeCardBasket: (state, action) => {
            state.basket = state.basket.filter(function(item) {
                return item.id !== action.payload;
            })
        },

        itemCounter: (state, action) => {
            state.counter = state.basket.length
        },

        sumCounter: (state, action) => {
           /*let sum = state.basket.reduce((previousValue, currentValue) => {
                return {price: previousValue.price + currentValue.price}
            })
            state.sum = sum.price;*/

            let initialValue = 0;
            let sum = state.basket.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.price;
            }, initialValue)
            state.sum = sum;
        }
    },
});

export const {addToBasket, removeCardBasket, itemCounter, sumCounter} = counterSlice.actions;

export default counterSlice.reducer;