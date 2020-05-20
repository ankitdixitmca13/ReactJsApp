import React, { Component } from 'react'
import Purecomp from './Purecomp'
import Regcomp from './Regcomp'
import Memocomp from './Memocomp'

 class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ankit'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
               name:'Ankit' 
            })
        },2000)
    }
   
    
    render() {
        console.log('################ ----------------------  Parent Component ----------------------- ############## ')
        return (
            <div>
                Parent component
                <div>
                    <Memocomp name={this.state.name}/>
                {/* <Regcomp name={this.state.name}></Regcomp>
                <Purecomp name={this.state.name}></Purecomp> */}
                </div>
            </div>
        )
    }
}

export default Parentcomp
