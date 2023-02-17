import React, { useMemo, useState } from "react";
import Select from "react-select-country-list";
import countryList from "react-select-country-list";

export const CountriesDropdown = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return <Select options={options} value={value} onChange={changeHandler} />;
};
