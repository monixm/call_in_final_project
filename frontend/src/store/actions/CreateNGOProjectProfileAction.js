import {baseUrl} from "../constants";

export const createNGOProjectProfileAction = (content) => async (dispatch) => {

    // const token = localStorage.getItem('token');

    const headers = new Headers({
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${ token }`
        });
    
    const data = {
        name: content.organisationName,
        type: content.organisationType,
        privacy_setting: 'public',
        location: content.organisationLocation,
        description: content.organisationDescription,
        phone: '076455366477',
        terms_of_services: content.organisationTerms,

    }

    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
        };
    console.log(config)

    await fetch(`${baseUrl}backend/api/organisations/new/`, config);

    // dispatch({ type: 'post', payload: token });
}
