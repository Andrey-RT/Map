import React from 'react';
import list from './katalogData'
import Item from './Item';

const KatalogItem = ({handle}) => {
 

    return (
        <div className='katalog_container_blok'>
            {
                list.map((item)=>(
                <Item key={item.id} item={item} handle={handle} />)
                )
            }
        </div>
    );
};

export default KatalogItem;