
// ParentComponent.js
import React from 'react';
import Item from './Item';

const ParentComponent = () => {
    const itemData = {
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        name: 'Sample Item',
        new_price: '$10.00',
        old_price: '$20.00'
    };

    return (
        <div className='parent'>
            <Item 
                image={itemData.image} 
                name={itemData.name} 
                new_price={itemData.new_price}
                old_price={itemData.old_price}
            />
        </div>
    );
}

export default ParentComponent;
