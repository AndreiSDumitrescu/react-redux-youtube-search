import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { fetchVideos } from "../actions/index";

const SearchBar = ( props ) => {
    const videoSearch = ( term ) => {
        props.fetchVideos( term );
    };
    const inputChange = _.debounce( ( term ) => videoSearch( term ), 300 );
    return (
        <input
            placeholder="Search"
            className="form-control col-sm-12"
            onChange={ event => inputChange( event.target.value ) }
        />
    );
};

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { fetchVideos }, dispatch );
}

export default connect( null, mapDispatchToProps )( SearchBar );
