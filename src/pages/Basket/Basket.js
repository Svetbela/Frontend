import React, { useEffect, useState } from 'react';
import './Basket.css';
import {useSelector} from "react-redux";
import {BasketCard} from '../../components/basketCard/basketCard';

export const Basket = () => {
    const basketMenu = useSelector((state) => state.menu.basket)
    const sum = useSelector((state) => state.menu.sum);
    return (
        <div className={'basket'}>
            <h1 className={'basket__title'}>Корзина с выбранными товарами</h1>
                {
                    basketMenu.map((item) => {
                        return (
                            <div className={''} key={item.id}>
                                <BasketCard
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    avatar={item.avatar}/>
                            </div>
                        )
                    })
                }
            <div className={'basket__footer'}>
                <div className={'footer__container'}>
                    <div className={'footer__total'}>
                        <span>Заказ на сумму:</span>
                        <div className={'basket__price'}>{sum} Р.</div>
                    </div>
                    <div>
                        <button className={'footer__button'}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}