import "./input.css";
import { FiSearch } from "react-icons/fi";

const Input = ({text, submit}) => {
  return (
    <form className="input" onSubmit={submit}>
        <input  type ={"text"} placeholder="Please enter the location" className="input_value" onChange={text}/>
        <span className="input_icon">
        <FiSearch />
        </span>

    </form>
  )
}

export default Input