import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**/
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




class ToDoList extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:'Sourabh'
        }
    }
    render(){
        return(
            <ul>
                <li>{this.state.firstName}</li>
            </ul>
        )
    }
}




class RowList extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:'sourabh P'
        }
    }
    render(){
        return(
            <ul><RowItems/></ul>
        )
    }
}
class RowItems extends React.Component{
    render(){
        return(
            <li>asdfasdfasdf</li>
        )
    }
}




class ArrayList extends React.Component{
    constructor(){
        super();
        this.state={
            names:["Aman", "Raman", "Suman", "Boman"]
        }
    }
    render(){
        return(
            <ul>
                {
                    this.state.names.map(function(name){
                        return <ArrayItem key={name} detail={name} />
                    })
                }
            </ul>
        )
    }
}
class ArrayItem extends React.Component{
    render(){
        return(
            <li>
                {this.props.detail}
            </li>
        )
    }
}




class NameList extends React.Component{
    constructor(){
        super();
        this.state={
            names:['Mohan','Sohan','Rohan','Johan','Kphan']
        }
    }
    render(){
        return(
            <ul>
                {
                    this.state.names.map(function(name){
                        return <NameItem detail={name} key={name} />
                    })
                }
            </ul>
        )
    }
}
class NameItem extends React.Component{
    render(){
        return(
            <li>{this.props.detail}</li>
        )
    }
}


ReactDOM.render(<ToDoList/>,document.getElementById('toDoList'));
ReactDOM.render(<RowList/>,document.getElementById('rowList'));
ReactDOM.render(<ArrayList/>,document.getElementById('arrayList'));
ReactDOM.render(<NameList/>,document.getElementById('nameList'));