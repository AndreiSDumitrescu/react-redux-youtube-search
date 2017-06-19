import { combineReducers } from "redux";
import VideoListReducer from "./VideoListReducer";
import ActiveVideoReducer from "./ActiveVideoReducer";

const rootReducer = combineReducers( {
    videos: VideoListReducer,
    activeVideo: ActiveVideoReducer,
} );

export default rootReducer;
