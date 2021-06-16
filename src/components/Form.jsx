import "./form.css";
import { Link } from "react-router-dom";
const Form = ({ getRecipe, inputValue, handleChange }) => {
  return (
    <form onSubmit={getRecipe}>
      <input
        onChange={handleChange}
        value={inputValue}
        placeholder="enter recipe..."
      />

      <button>Search</button>
    </form>
  );
};
export default Form;
