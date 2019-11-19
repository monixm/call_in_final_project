import {baseUrl} from "../constants";

export const createEventAction = (content) => async (dispatch) => {

    const token = localStorage.getItem('token');

    const headers = new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ token }`
        });

    const data = {
        title: content.title,
        picture: content.picture,
        organisation: content.organisation,
        start_datetime: content.startDate,
        end_datetime: content.startDate,
        location: content.location,
        description: content.description,
        must_be_approved: content.checkboxValue,
    }

    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
        };

    await fetch(`${baseUrl}backend/api/events/new/`, config);
}
