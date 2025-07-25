import { useState } from "react";
import { BsSearch } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ searchItems }) => {
  const [value, setValue] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    searchItems(value);
  };

  return (
    <form onSubmit={onSubmit} className="search flex-fill d-flex align-items-center">
      <div className="input-group">
        <input
          type="text"
          placeholder="جستجوی فست فود ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control rounded-end pe-5 border-sucess"
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3" />
      </div>
    </form>
  );
};
