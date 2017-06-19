import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectVideo } from "../actions/SelectVideo";

const VideoListItem = ( props ) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    const onVideoSelect = ( selectedVideo ) => {
        props.selectVideo( selectedVideo );
    };

    return (
        <li className="list-group-item" >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } alt="img" />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        <a role="button" aria-pressed="true" tabIndex="0" onClick={ () => onVideoSelect( video ) }>
                            {video.snippet.title}
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};

VideoListItem.propTypes = {
    video: PropTypes.shape( {
        object: PropTypes.object,
    } ),
    selectVideo: PropTypes.func,
};

VideoListItem.defaultProps = {
    video: {},
    selectVideo: () => {},
};

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { selectVideo }, dispatch );
}

export default connect( null, mapDispatchToProps )( VideoListItem );
