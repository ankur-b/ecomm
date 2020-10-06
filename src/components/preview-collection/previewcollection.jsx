import React from 'react'
import './previewcollection.scss'
import CollectionItem from '../collection-item/collectionitem'
const PreviewComponent = (props) => (
    <div className='collection-preview'>
        <h1 className='title'>{props.title}</h1>
        <div className='preview'>
            {props.items.filter((item,index)=> index < 4).map(item=>(
               <CollectionItem name={item.name} imageUrl={item.imageUrl} price={item.price} />
            ))}
        </div>
    </div>
)
export default PreviewComponent