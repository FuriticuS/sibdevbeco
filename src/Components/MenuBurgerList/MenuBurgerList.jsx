import React, {Component} from 'react';
import {block} from 'bem-cn';
import {NavLink} from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";
import Catalog from "../../Img/icons/Catalog";
import Health from "../../Img/icons/Health";
import Beauty from "../../Img/icons/Beauty";
import Entertaiment from "../../Img/icons/Entertaiment";
import Auto from "../../Img/icons/Auto";

import './menuburgerlist.scss';
import Logo from "../../Img/icons/Logo";

const cn = block('drawer');

const links = [
    {id:0, to:'/', label:'Каталог', component: <Catalog/>,exact: true},
    {id:1, to:'/health', label:'Здоровье', component: <Health/>,exact: false},
    {id:2, to:'/beauty', label:'Красота', component: <Beauty/>,exact: false},
    {id:3, to:'/entertainment', label:'Развлечение', component: <Entertaiment/>,exact: false},
    {id:4, to:'/auto', label:'Авто', component: <Auto/>,exact: false}
]

class MenuBurgerList extends Component {

    constructor(props) {
        super(props);
    }

    renderLinks(){
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = [
            cn()
        ]

        !this.props.isOpen && cls.push('close');

        return(

            <div>
                {
                    this.props.isOpen && <BackDrop onClick={this.props.onClose}/>
                }

                <nav className={cls.join(' ')}>

                    <p><Logo/>BECO</p>

                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MenuBurgerList;
