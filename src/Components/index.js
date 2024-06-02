import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';

const LayOut = () => {
    const [ratings, setRatings] = useState([35, 50, 40, 22, 10]);
    const maxCount = 50;

    const regenerateRatings = () => {
        const newRatings = ratings.map(() => Math.floor(Math.random() * (maxCount + 1)));
        setRatings(newRatings);
    };

   
    return (
        <div className="container mx-auto px-4 py-8 max-w-xl">
            <h1 className="text-3xl font-bold mb-6">Rating Breakdown Analysis</h1>
            <div className="shadow-lg p-6 bg-black">
                <div className='flex text-white'>
                    <div style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
                        <span className="font-semibold vertical">X-Axis:</span> Rating Scale (1-5)
                    </div>
                    <BarChart data={ratings} maxCount={maxCount} />
                </div>
                <span className='block text-center mt-10 font-bold text-blue-600 text-xl'>Rating</span>
                <button
                    className="mt-6 border border-green-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out block ml-auto text-green-500"
                    onClick={regenerateRatings}
                >
                    Regenerate
                </button>
            </div>
        </div>
    );
};

export default LayOut;