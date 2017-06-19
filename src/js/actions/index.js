import axios from "axios";

const API_KEY = "AIzaSyBd5aCAoX5MIWvCLiEvkSQ_csbz8hBf8Fw";
const ROOT_URL = "https://www.googleapis.com/youtube/v3/search";

export const FETCH_VIDEOS = "FETCH_VIDEOS";

export function fetchVideos( term ) {
    const params = {
        part: "snippet",
        key: API_KEY,
        q: term,
        type: "video",
    };
    const request = axios.get( ROOT_URL, { params } );

    return {
        type: FETCH_VIDEOS,
        payload: request,
    };
}
