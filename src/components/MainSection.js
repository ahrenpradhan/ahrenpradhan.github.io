import React, {Component} from 'react';
import SidePanel from './SidePanel'
import MainPanel from './MainPanel'

export default class MainSection extends Component {
    render(){
        return (
            <>
            <div className='MainSection'>
                <SidePanel />
                <MainPanel />
            </div>
            <div className='MainSection'>
                <MainPanel />
                <SidePanel />
            </div>
            <div className='MainSection'>
                <SidePanel />
                <MainPanel />
            </div>
            </>
        )
    }
}