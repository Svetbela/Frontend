import React from 'react';
import {Link} from "react-router-dom";
import './Main.css'
import {Card} from '../../components/Card/Card';
import imgBasket from '../../Images/imgBasket.png';
import {itemList} from "../../content.js";
import {useSelector} from "react-redux";

export const Main = () => {
    //const menu = useSelector((state) => state.menu.menu);
    const count = useSelector((state) => state.menu.counter);
    const sum = useSelector((state) => state.menu.sum);
    return (
        <div className={'menu'}>
            <div className={'menu__header'}>
                <h1 className={'menu__title'}>Наше меню</h1>
                <div className={'menu__link'}>
                    <div className={'menu__total'}>
                        <span> количество выбранных товаров: {count} </span>
                        <br/>
                        <span> на сумму: {sum} </span>
                    </div>
                    <div className={'menu__basket'}>
                        <Link to='basket'><img src={(imgBasket)} alt={'basket'}/></Link>
                    </div>
                </div>

            </div>
            <div className={'card-list'}>
                {
                    itemList.map((item) => {
                        return (
                            <div className={'card-list__item'} key={item.id}>
                                <Card
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    weight={item.weight}
                                    avatar={item.avatar}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}