import React from 'react';

const Heading = () => {
    const title = "Todo App";
    return (
        <div>
            <h1 className="font-bold text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-8  pointer-events-none">
                { title }
            </h1>

        </div>
    );
};

export default Heading;
