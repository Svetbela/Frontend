import React, {useState, useEffect} from 'react';
import './basketCard.css';
import {useDispatch} from "react-redux";
import {removeCardBasket, itemCounter, sumCounter} from "../../app/reducers/counter";

export const BasketCard = (props) => {
    const dispatch = useDispatch();
    function dispatchReducers() {
        dispatch(removeCardBasket(props.id));
        dispatch(itemCounter());
        dispatch(sumCounter());
    }

    return (
        <div className={'basket__container'}>
            <div className={'basket__item-image'}>
                <img src={props.avatar} alt='food'/>
            </div>
            <div className={'basket__item-title'}>{props.title}</div>
            <div className={'basket__item-result'}>
                <div className={'basket__item-price'}>{props.price} Р.</div>
                <button className={'basket__button'} onClick={() => dispatchReducers()}>X</button>
            </div>
        </div>
    )
}