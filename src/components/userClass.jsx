import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
            name:"Dummy Name",
            location:"Default Location"
        }
    };
  }
  async componentDidMount() {
    const data=await fetch("https://api.github.com/users/pyush117");
    const json= await data.json();
    console.log(json);
    this.setState({
        userInfo:json
    })

  }
  componentDidUpdate(){
    console.log("component did update")
  }
  componentWillUnmount(){
    console.log("component Will Unmount")
  }
  render() {
    const{name,location}=this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact:6299646654</h3>
      </div>
    );
  }
}
export default UserClass;
