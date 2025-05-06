import { useState } from "react";

const ControlForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    alert(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Name : </label>
      <input type="text" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlForm;
