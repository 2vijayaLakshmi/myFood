
import React from 'react';

class Profile extends React.Component{


  constructor(props){
      super(props);
      //Create State
      this.state = {
        count : 0,
        count2: 0
      }
  }  


  componentDidMount(){
    //API Calls
  }

    render(){  
        return (
            <div>
            <h1>Profile class component</h1>
            <h2>Name: {this.props.name}</h2>
            <h2>Count: {this.state.count}</h2>
            <button onClick={()=>{
                //We Do not Mutate state directly
                this.setState({
                    count: 1,
                    count2: 2
                }) 
            }}>setCount</button>
          </div>
        )
    }

} 

export default Profile;