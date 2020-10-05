import React from 'react';
import './menu-item.styles.scss'
const MenuIteam = (props) =>(
    <div className={`${props.size} menu-item`}>
        <div className="background-image"
        style={{
            backgroundImage:`url(${props.imageUrl})`
        }}/>
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">SHOP</span>
        </div>
    </div>
)
export default MenuIteam