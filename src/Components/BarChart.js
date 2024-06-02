import React from 'react';

const BarChart = ({ data, maxCount }) => {
    return (
        <div className="flex min-h-[350px] gap-x-5 w-full border-b-4 border-l-4 border-white text-white">
            {data.map((count, index) => (
                <div key={index} className="flex flex-col justify-end ml-5">
                    <div
                        className="w-12 border transition-all duration-300 ease-in-out rounded-xl text-center"
                        style={{ height: `${(count / maxCount) * 100}%` }}
                    >
                        <span className="text-white text-xs font-bold pl-1">{count}</span>
                    </div>
                    <span className="mt-2 text-sm -mb-7 text-center">{index + 1}</span>
                </div>
            ))}
        </div>
    );
};

export default BarChart;