import React from 'react';
import Header from "../Header/Header";
import {block} from 'bem-cn';
import Content from "../Content/Content";

import './main.scss';

const cn = block('main');

const Main = ({text}) => {
    return (
        <div className={cn()}>
            <Header text={text}/>
            <Content />
        </div>
    );
};

export default Main;
