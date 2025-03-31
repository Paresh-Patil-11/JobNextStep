import React from 'react';

const SingleCategory = ({ ct }) => {
    const {logo, title, available } = ct;
    // console.log(ct);
    return (
        <div>
            <div className='border-2 bg-slate-10 bg-black w-30 p-4 rounded-3xl'>
                <img className='w-20 mx-auto mb-2 rounded-xl'
                    src={logo} alt="" />
                <h1 className=' tracking-wider font-black text-2xl'>{title}</h1>
                <p>{available}</p>
            </div>
        </div>
    );
};

export default SingleCategory;