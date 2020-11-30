import React, {Component} from 'react';
import {block} from 'bem-cn';
import Logo from "../../Img/icons/Logo";
import {NavLink} from "react-router-dom";
import Catalog from "../../Img/icons/Catalog";
import Health from "../../Img/icons/Health";
import Beauty from "../../Img/icons/Beauty";
import Entertaiment from "../../Img/icons/Entertaiment";
import Auto from "../../Img/icons/Auto";
import MenuToggle from "../MenuToggle/MenuToggle";

import './menu.scss';
import MenuBurgerList from "../MenuBurgerList/MenuBurgerList";


const cn = block('menu');


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    toggleMenuCLose = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (

            <div className={cn()}>

                <div className={cn("logo")}>
                    <NavLink to={'/'}>
                        <Logo/>
                        <p>BECO</p>
                    </NavLink>
                </div>

                <ul className={cn("links")}>
                    <li><NavLink to='/' exact><Catalog/><p>Каталог</p></NavLink></li>
                    <li><NavLink to='/health' exact><Health/><p>Здоровье</p></NavLink></li>
                    <li><NavLink to='/beauty' exact><Beauty/><p>Красота</p></NavLink></li>
                    <li><NavLink to='/entertainment' exact><Entertaiment/><p>Развлечение</p></NavLink></li>
                    <li><NavLink to='/auto' exact><Auto/><p>Авто</p></NavLink></li>
                </ul>

                <MenuToggle
                    isOpen={this.state.menu}
                    onToggle={this.toggleMenuHandler}/>

                <MenuBurgerList
                    isOpen={this.state.menu}
                    onClose={this.toggleMenuCLose}
                />

            </div>
        )
            ;
    }

};

export default Menu;
