import React, {Component} from 'react';
import SidePanel from './SidePanel'
import MainPanel from './MainPanel'

export default (props) => (
    <>
        {
            props.AdditionalDetails.map((e,i)=>{
                console.log(i)
                if((i+1)%2){
                    return (<div className='MainSection'>
                        <SidePanel data={e[0]}/>
                        <MainPanel data={e[1]}/>
                    </div>)
                } else {
                    return (<div className='MainSection'>
                        <MainPanel data={e[1]}/>
                        <SidePanel data={e[0]}/>
                    </div>)
                }
            })
        }
        {/* <div className='MainSection'>
            <SidePanel />
            <MainPanel />
        </div>
        <div className='MainSection'>
            <SidePanel />
            <MainPanel />
        </div> */}
    </>
)