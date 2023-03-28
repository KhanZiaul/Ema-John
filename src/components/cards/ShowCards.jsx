import React from 'react';

const ShowCards = (props) => {
    console.log(props.data)
    const {name , price , seller , ratings} = props.data ;
    return (
        <div className='border-2 border-gray-800 p-6 '>

        </div>
    );
};

export default ShowCards;