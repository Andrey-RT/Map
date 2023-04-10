import React from 'react';
import list from './blogData'
import Item from './Item';

const BlogItem = ({handle}) => {
 

    return (
        <div className='item_container_blok'>
            {
                list.map((item)=>(
                <Item key={item.id} item={item} handle={handle} />)
                )
            }
        </div>
    );
};

export default BlogItem;