import { SELECT_VIDEO } from "../actions/SelectVideo";

export default function( state = [], action ) {
    switch ( action.type ) {
        case SELECT_VIDEO:
            return [ action.payload ];
        default:
            return state;
    }
}
