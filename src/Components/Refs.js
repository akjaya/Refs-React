import React, { Component } from 'react'

// refs cannot be attached to functional components they can
// be added only to class components
 class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
// the input element is focused in the componentdidmount method
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
    render() {     
        return (
            <div>
                <input type ="text" ref = {this.inputRef}></input><br></br>
                <button onClick = {this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default Refs
