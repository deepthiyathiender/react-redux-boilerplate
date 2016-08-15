import fetch from 'isomorphic-fetch';

export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

function makeInfo(FBId, data) {
    return {
        type: RECEIVE_USER_INFO,
        FBId: FBId,
        data: data
    }
}

export function requestInfo(FBId) {
    return function (dispatch) {
        return fetch(`https://graph.facebook.com/${FBId}/?fields=first_name,last_name,cover&access_token=1600426660257642|f7WhVDODh9N1hcSrDCWsgv7Uo6k`)
            .then((response) => response.json() ) //implicit return
            .then((json) => dispatch(makeInfo(FBId, json))
            );
    }
}