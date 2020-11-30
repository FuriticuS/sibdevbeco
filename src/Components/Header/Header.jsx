import React from 'react';
import {block} from 'bem-cn';
import Search from "../../Img/icons/Sarch";

import './header.scss';

const cn = block('header');

const Header = ({text}) => {
    return (
        <div className={cn()}>
            <h1>{text}</h1>
            <div className={cn('search')}>
                <label htmlFor="search"><Search/></label>
                <input type="text" id="search" placeholder="Какой магазин вам нужен?"/>
            </div>
        </div>
    );
};

export default Header;
