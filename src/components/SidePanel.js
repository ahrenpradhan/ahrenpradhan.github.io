import React from 'react';

export default (props) => (
    <div className='SidePanel'>
        <div className="SidePanel--content">
            {props.data.split(' ').map(e=>{
                return (
                    <>
                    {e}<br/>
                    </>
                )
            })}
        </div>
    </div>
)