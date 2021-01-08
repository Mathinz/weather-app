import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from "antd";
import "./searchbar.css";
import { searchZipWeather } from "../../store/actions/SearchZipWeather";
import { useDispatch, useSelector } from "react-redux";
const SearchZip = () => {
  const [searchValue, setSearchValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);
  const dispatch = useDispatch();

  const favourites = useSelector(
    (state) => state.uiState.favouriteReducer?.favourite
  );

  const onSearch = async () => {
    setIsLoading(true);
    await dispatch(searchZipWeather(searchValue));
    setIsLoading(false);
  };

  useEffect(() => {
    let suggestions = [];
    if (favourites.length > 0) {
      favourites.forEach((element, index) => {
        suggestions.push({ key: index, value: element.data.zipCode });
      });
      setAutoComplete(suggestions);
    } else {
      setAutoComplete([]);
    }
  }, [favourites]);

  return (
    <div className="search-container">
      <AutoComplete
        dropdownMatchSelectWidth={252}
        size="large"
        value={searchValue}
        autoComplete={true}
        options={autoComplete}
        onSelect={(e) => setSearchValue(e)}
        onChange={(e) => (!isNaN(e) && e.length < 6 ? setSearchValue(e) : "")}
      >
        <Input.Search
          onSearch={onSearch}
          loading={isLoading}
          size="large"
          placeholder="Enter Zip Code"
          enterButton
        />
      </AutoComplete>
    </div>
  );
};

export default SearchZip;
