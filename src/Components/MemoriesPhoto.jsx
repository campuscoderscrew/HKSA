import React from 'react';

const MemoriesPhoto = ({imageURL}) => {
    return (
        <div class="w-[200px] h-[250px] border-solid border-white border-6 border-b-64">
            <img className='w-full h-full' src={imageURL} alt="" />
        </div>
    );
}

export default MemoriesPhoto;