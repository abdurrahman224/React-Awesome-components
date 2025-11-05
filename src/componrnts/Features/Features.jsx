import React from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Features = ({feature}) => {
    return (
        <div >
            <li className='flex items-center mask-linear-0'><IoCheckmarkDoneCircle className='text-green-600 mr-2' /> {feature}
</li>

        </div>
    );
};

export default Features;