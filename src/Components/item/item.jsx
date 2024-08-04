import React from 'react';

const Item = (props) => {
    return (
        <div className="flex flex-col items-center m-2 p-2 border border-gray-300 rounded-lg shadow-sm bg-white">
            <img
                src={props.image}
                alt={props.name}
                className="w-48 h-48 object-cover rounded-lg"
            />
            <p className="my-2 text-lg text-gray-800">{props.name}</p>
            <div className="flex justify-between w-full">
                <div className="text-lg font-bold text-red-500">
                    {props.new_price}
                </div>
                <div className="text-sm line-through text-gray-500">
                    {props.old_price}
                </div>
            </div>
        </div>
    );
}

export default Item;
