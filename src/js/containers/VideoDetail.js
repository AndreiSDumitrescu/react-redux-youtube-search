import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectVideo } from "../actions/SelectVideo";

class VideoDetail extends Component {
    componentWillUpdate( nextProps ) {
        if ( this.props.videos !== nextProps.videos ) {
            this.props.selectVideo( nextProps.videos[ 0 ] );
        }
    }
    render() {
        let video = this.props.activeVideo[ 0 ];
        if ( this.props.activeVideo.length === 0 ) {
            if ( this.props.videos.length === 0 ) return <div className="col-sm-7" >Loading...</div>;
            video = this.props.videos[ 0 ];
        }

        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${ videoId }`;
        return (
            <div className="video-detail col-sm-7">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={ url } />
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }

}

VideoDetail.propTypes = {
    videos: PropTypes.arrayOf( PropTypes.object ),
    activeVideo: PropTypes.arrayOf( PropTypes.object ),
    selectVideo: PropTypes.func,
};

VideoDetail.defaultProps = {
    videos: [],
    activeVideo: [],
    selectVideo: () => {},
};

function mapStateToProps( state ) {
    return {
        videos: state.videos,
        activeVideo: state.activeVideo,
    };
}
function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { selectVideo }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( VideoDetail );
