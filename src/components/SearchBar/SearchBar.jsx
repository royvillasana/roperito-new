import { InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ value, onChange, placeholder = "Buscar prendas..." }) => (
  <InputGroup className="search-bar">
    <InputGroup.Text className="search-icon">
      <FaSearch />
    </InputGroup.Text>
    <Form.Control
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </InputGroup>
);

export default SearchBar; 