import React from 'react';
import Item from '../item/item';
import "./products.css"

const ParentComponent = () => {
    const itemData = [
        {
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
            name: 'Sample Item 1',
            new_price: '$10.00',
            old_price: '$20.00'
        },
        {
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
            name: 'Sample Item 2',
            new_price: '$15.00',
            old_price: '$30.00'
        },
        {
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
            name: 'Sample Item 3',
            new_price: '$20.00',
            old_price: '$40.00'
        },
        {
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
            name: 'Sample Item 4',
            new_price: '$25.00',
            old_price: '$50.00'
        },
        {
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
            name: 'Sample Item 5',
            new_price: '$30.00',
            old_price: '$60.00'
        },
        {
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
            name: 'Sample Item 6',
            new_price: '$35.00',
            old_price: '$70.00'
        }
    ];

    return (
        <div className='parent'>
            {itemData.map((item, index) => (
                <Item 
                    key={index}
                    image={item.image} 
                    name={item.name} 
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    );
}

export default ParentComponent;
