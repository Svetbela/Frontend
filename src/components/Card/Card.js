import React from 'react';
import './Card.css';
import {useDispatch} from "react-redux";
import {addToBasket, itemCounter, sumCounter} from "../../app/reducers/counter"

export const Card = (props) => {
    const dispatch = useDispatch();
    function dispatchReducers() {
        dispatch(addToBasket(props.id));
        dispatch(itemCounter());
        dispatch(sumCounter());
    }
    return (
        <div className={'card'}>
            <div className={'card__image'}>
                <img src={props.avatar} alt='food'/>
            </div>
            <div className={'card__title'}>
                {props.title}
            </div>
            <div className={'card__description'}>
                {props.description}
            </div>
            <div className={'card__footer'}>
                <div className={'card__info'}>
                    <span className={'card__price'}>{props.price} Р.</span> / <span className={'card__weight'}>{props.weight}</span>
                </div>
                <button className={'card__add'} onClick={() => dispatchReducers()}>+</button>
            </div>
        </div>
    )
}