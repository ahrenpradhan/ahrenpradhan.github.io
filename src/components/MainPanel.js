import React from 'react';

export default (props) => (
    <div className='MainPanel'>
        <div className='MainPanel--content'>
            {(props.data.length==1)?props.data:(
                <ol>
                {props.data.map(e=>(
                    <li className="MainPanel--content_sub">
                        <h3>{e[0]}</h3>
                        <h4>{e[1]}</h4>
                        {
                            (!Array.isArray(e[2]))?(e[2]):(
                                <ul>
                                    {
                                        e[2].map(f=>(
                                            <li>{f}</li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </li>
                ))}
                </ol>
            )}
        </div>
    </div>
)