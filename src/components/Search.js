import React from "react";
import {FormControl} from "react-bootstrap";

function Search({searchByCountryName}) {
    return <FormControl className="mb-3"
        placeholder="Search"
        aria-label="Search"
        onKeyUp={e => searchByCountryName(e.currentTarget.value.trim().toLowerCase())}
    />
}

export default Search;