// Importing css and NavLink
import {NavLink} from "react-router-dom";
import "./Nav.css"

// Exporting functional component
export default function Nav(){
  return (
    <nav>
      
      <NavLink to="/" style={({isActive}) => {
        return isActive ? {color: "var(--blue)", filter: "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))"} : {};
      }} className="navElement">About Me</NavLink>
      
     
      <NavLink to="/portfolio" style={({isActive}) => {
        return isActive ? {color: "var(--blue)", filter: "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))"} : {};
      }} className="navElement">Portfolio</NavLink>
 

      <NavLink to="/resume" style={({isActive}) => {
        return isActive ? {color: "var(--blue)", filter: "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))"} : {};
      }} className="navElement">Resumé</NavLink>
      
      
      <NavLink to="/contact" style={({isActive}) => {
        return isActive ? {color: "var(--blue)", filter: "drop-shadow(3px 3px 2px var(--black)) drop-shadow(-1px -1px 3px var(--pink))"} : {};
      }} className="navElement">Contact Me</NavLink>
    </nav>    
  )
}