import React from 'react';

const MemoriesPhoto = ({imageURL}) => {
    return (
        <div class="border-solid border-white border-6 border-b-20 lg:border-b-64">
            <img className='w-full h-full' src={imageURL} alt="" />
        </div>
    );
}

export default MemoriesPhoto;