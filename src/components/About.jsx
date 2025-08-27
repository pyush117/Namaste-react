import User from "./user";
import UserClass from "./userClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1> About class component</h1>
        <div> LoggedIn User 
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste react web series </h2>
        <User />
        <UserClass name={"pk"} location={"delhi"} />
      </div>
    );
  }
}

/*
life cycle of class based component
- parent constructor
-parent render
   -pk constructor
   -pk render
    -bk constructor
   -bk render
   <dom updated in single batch>
   -pk componentDidMount
   -bk componentDidMount
  - parent compoenentDidMount;
  */

// const About = () => {
//   return (
//     <div>
//       <h1> About</h1>
//       <h2>This is Namaste react web series </h2>
//       <User/>
//       <UserClass name={"pk"} />
//     </div>
//   );
// };
export default About;
