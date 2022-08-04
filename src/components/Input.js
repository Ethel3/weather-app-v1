import "./input.css";
import { FiSearch } from "react-icons/fi";

const Input = () => {
  return (
    <form className='input'>
        <input  type ={"text"} placeholder="Please enter the location" className="input_value"/>
        <span className="input_icons">
        <FiSearch />
        </span>

    </form>
  )
}

export default Input