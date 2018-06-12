import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends React.Component{
    render(){
        return (
            <div>
            <h1>Hello World</h1>
            <h2>
                <Hello /><World />
            </h2>
            </div>
        )
    }
}
//ReactDOM.render(Component,mount);

class Hello extends React.Component{
    render(){
        return(
            <span>Hello</span>
        )
    }
}

class World extends React.Component{
    render(){
        return(
            <span>World</span>
        )
    }
}
ReactDOM.render(<HelloWorld/>,document.getElementById('helloWorld'));