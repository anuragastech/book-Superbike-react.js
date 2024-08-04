import React from 'react';
import Item from '../item/item';

const Products = () => {
    const itemData = [
        {
            image: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 1',
            new_price: '$10.00',
            old_price: '$20.00'
        },
        {
            image: 'https://images.pexels.com/photos/2377893/pexels-photo-2377893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Sample Item 2',
            new_price: '$15.00',
            old_price: '$30.00'
        },
        {
            image: 'https://images.pexels.com/photos/2747793/pexels-photo-2747793.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 3',
            new_price: '$20.00',
            old_price: '$40.00'
        },
        {
            image: 'https://images.pexels.com/photos/34006/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 4',
            new_price: '$25.00',
            old_price: '$50.00'
        },
        {
            image: 'https://images.pexels.com/photos/2169104/pexels-photo-2169104.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 5',
            new_price: '$30.00',
            old_price: '$60.00'
        },
        // Duplicate items for demonstration purposes
        {
            image: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 1',
            new_price: '$10.00',
            old_price: '$20.00'
        },
        {
            image: 'https://images.pexels.com/photos/2377893/pexels-photo-2377893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Sample Item 2',
            new_price: '$15.00',
            old_price: '$30.00'
        },
        {
            image: 'https://images.pexels.com/photos/2747793/pexels-photo-2747793.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 3',
            new_price: '$20.00',
            old_price: '$40.00'
        },
        {
            image: 'https://images.pexels.com/photos/34006/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 4',
            new_price: '$25.00',
            old_price: '$50.00'
        },
        {
            image: 'https://images.pexels.com/photos/2169104/pexels-photo-2169104.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sample Item 5',
            new_price: '$30.00',
            old_price: '$60.00'
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
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

export default Products;
