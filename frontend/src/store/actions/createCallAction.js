import {baseUrl} from "../constants";

export const createCallAction = (content) => async (dispatch) => {

    const token = localStorage.getItem('token');

    const headers = new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ token }`
        });

    const data = {
        title: content.title,
        call_picture: content.picture,
        start_datetime: content.startDate,
        end_datetime: content.startDate,
        location: content.location,
        description: content.description,
        call_options: {
            title: content.fieldOne
        },
        must_be_approved: content.checkboxValue,
    }

    console.log(data)
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
        };

    await fetch(`${baseUrl}backend/api/calls/new/`, config);
}
