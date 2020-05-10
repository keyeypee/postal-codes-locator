import React, { useRef, Fragment } from "react";

import debounce from "../../utils/debounce";
import { SearchBox } from "./styles";

const SearchTypeahead = ({ options, onFilteredData }) => {
  const inputRef = useRef();

  const onSetFilters = () => {
    const { value } = inputRef.current;
    const filteredOptions = options.filter(
      (item) =>
        item.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        item.postal_code.indexOf(value) > -1
    );

    onFilteredData({ filteredOptions, value: value });
  };

  return (
    <Fragment>
      <SearchBox
        type="text"
        onChange={debounce(onSetFilters, 300)}
        ref={inputRef}
        placeholder="Search a postal code.."
      />
    </Fragment>
  );
};

export default SearchTypeahead;
