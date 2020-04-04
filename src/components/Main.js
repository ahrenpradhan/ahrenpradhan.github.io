import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCgkZrRY_kYvAecmj022Ka9daPEZ1ohWTA",
    authDomain: "personal-webpage-b706e.firebaseapp.com",
    databaseURL: "https://personal-webpage-b706e.firebaseio.com",
    projectId: "personal-webpage-b706e",
    storageBucket: "personal-webpage-b706e.appspot.com",
    messagingSenderId: "832817224596",
    appId: "1:832817224596:web:89f3963cd85e215ffc8d81",
    measurementId: "G-56NFPE4NVL"
};
firebase.initializeApp(firebaseConfig)
firebase.analytics();

export default class Main extends Component {
    state = {
        Name: "temp_name",
        Designation: "temp_designation",
        Note: "temp_note",
        Header: "MY SPACE"
    }
    componentDidMount() {
        const test = firebase.database().ref().child('PersonalInfo');
        test.on('value', snap => {
            console.log(snap.val())
            this.setState({
                Name: snap.val().Name,
                Designation: snap.val().Designation,
                Note: snap.val().Note
            })
        })
        const header = firebase.database().ref().child('Header');
        header.on('value', snap => {
            this.setState({
                Header : snap.val().Title
            })
        })
    }
    render() {
        return (
            <div className='Main'>
                <Header headerTitle={this.state.Header} />
                <div className='MyPersonalContent'>
                    <div className='MyPersonalContent--intro'>
                        Hi, my name is
                        <div className="MyPersonalContent--intro_name MyPersonalContent_underline">
                            {!!this.state.Name && this.state.Name}
                        </div>
                        <div className="MyPersonalContent--intro_designation">
                            ( {!!this.state.Designation && this.state.Designation} )
                        </div>
                        <div className="MyPersonalContent--intro_note">
                            <em>{!!this.state.Note && this.state.Note}</em>
                        </div>
                    </div>
                    <div className="MyPersonalContent--image"></div>
                </div>
                <MainSection />
            </div>
        )
    }
}