export const SELECT_VIDEO = "SELECT_VIDEO";

export function selectVideo( video ) {
    return {
        type: SELECT_VIDEO,
        payload: video,
    };
}
