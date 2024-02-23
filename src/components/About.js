import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass";
import ProfileFun from "./Profile"

const About  = () =>{
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This the React Course</p>
            <ProfileFun name={"Viji"}/>
            <Profile name={"ClassViji"}/>
        </div>
    )
} 

export default About