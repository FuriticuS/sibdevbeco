import React, {Component} from 'react';
import {block} from 'bem-cn';
import * as Images from './catalog';

import './content.scss';

const cn = block('content');

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {
                item1: {
                    header: 'пробка на мира',
                    span: 'вечер для двоих',
                    sale: '50%',
                    saleText: 'скидка',
                    img: Images.vine
                },
                item2: {
                    header: 'кино и немцы',
                    span: 'бесплатный бокал пива',
                    sale: 'варвар',
                    saleText: 'промокод',
                    img: Images.beer
                },
                item3: {
                    header: 'valery cakes',
                    span: 'торт',
                    sale: '30%',
                    saleText: 'скидка',
                    img: Images.cake
                },
                item4: {
                    header: 'suchi sell',
                    span: 'набор "Праздник"',
                    sale: '45%',
                    saleText: 'скидка',
                    img: Images.role
                },
                item5: {
                    header: 'mangosteen',
                    span: 'фрукт в подарок',
                    sale: 'j130',
                    saleText: 'купон',
                    img: Images.fruits
                },
                item6: {
                    header: 'теленок табака',
                    span: 'стейк "Мачете"',
                    sale: '20%',
                    saleText: 'скидка',
                    img: Images.meat
                },
                item7: {
                    header: 'fire food',
                    span: 'вторая шаурма в подарок',
                    sale: 'огонь',
                    saleText: 'промокод',
                    img: Images.shavuha
                },
                item8: {
                    header: 'aroma cremeria',
                    span: 'джелато "Пармезан"',
                    sale: '20%',
                    saleText: 'скидка',
                    img: Images.icecreame
                },
                item9: {
                    header: 'пробка на мира',
                    span: 'вечер для двоих',
                    sale: 'j130',
                    saleText: 'купон',
                    img: Images.vine
                },
                item10: {
                    header: 'кино и немцы',
                    span: 'бесплатный бокал пива',
                    sale: 'варвар',
                    saleText: 'промокод',
                    img: Images.beer
                },
                item11: {
                    header: 'valery cakes',
                    span: 'торт',
                    sale: '30%',
                    saleText: 'скидка',
                    img: Images.cake
                },
                item12: {
                    header: 'suchi sell',
                    span: 'набор "Праздник"',
                    sale: '45%',
                    saleText: 'скидка',
                    img: Images.role
                }
            }
        }
    }

    render() {
        return (
            <div className={cn()}>
                {
                    Object.keys(this.state.items).map((item, index) => {
                        // для укорочевания записи
                        const control = this.state.items[item];
                        return (
                            <div className={cn('item')} key={index}>
                                <div className="triangel-left"/>

                                <div className="text">
                                    <div>
                                        <h3>{control.header}</h3>
                                        <span>{control.span}</span>
                                    </div>

                                    <div>
                                        <p className="numb">{control.sale}</p>
                                        <p className="label">{control.saleText}</p>
                                    </div>
                                </div>

                                <div className="images">
                                    <img src={control.img} alt={control.header}/>
                                </div>

                                <div className="triangel-right"/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


};

export default Content;
