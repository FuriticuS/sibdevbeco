import React from 'react';
import {block} from 'bem-cn';
import Header from "../Header/Header";

import './otherpages.scss';

const cn = block('otherpages');

const OtherPages = ({text}) => {
    return (
        <div className={cn()}>
            <Header text={text}/>

            <div className={cn('elsecontent')}>
                <div className='otheritems'>
                    <h1>{text}</h1>
                </div>
            </div>

        </div>
    );
};

export default OtherPages;
