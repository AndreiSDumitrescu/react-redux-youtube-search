import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchVideos } from "../actions/index";
import VideoListItem from "../containers/VideoListItem";

class VideoList extends Component {
    componentDidMount() {
        this.props.fetchVideos( "formula 1" );
    }
    renderVideos() {
        if ( this.props.videos.length === 0 ) {
            return <div>Loading...</div>;
        }
        const videoItems = this.props.videos.map( ( video ) => (
            <VideoListItem
                key={ video.etag }
                video={ video }
            />
        ) );
        return videoItems;
    }
    render() {
        return (
            <ul className="col-sm-5 list-group">
                { this.renderVideos() }
            </ul>
        );
    }
}

VideoList.propTypes = {
    videos: PropTypes.arrayOf( PropTypes.object ),
    fetchVideos: PropTypes.func,
};

VideoList.defaultProps = {
    videos: [],
    fetchVideos: () => {},
};
function mapStateToProps( { videos } ) {
    return {
        videos,
    };
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { fetchVideos }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( VideoList );
