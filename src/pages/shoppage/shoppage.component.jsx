import React, { Component } from 'react'
import PreviewCollection from '../../components/preview-collection/previewcollection'
import {SHOP_DATA} from './shopdata.js';

class shoppage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.collections.map((collection)=> (
                       <PreviewCollection items={collection.items} title={collection.title} key={collection.id}/>
                    ))
                }
            </div>
        )
    }
}

export default shoppage