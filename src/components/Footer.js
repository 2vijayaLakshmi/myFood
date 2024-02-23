import {useContext} from "react";
import UserContext from "./utils/userContext";

const Footer = () =>{

  const user = useContext(UserContext)
    return (
      <h4 className="footer">This site is developed by {user?.user?.name} - {user?.user?.email}</h4>
    )
  }

  export default Footer;