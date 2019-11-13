import {baseUrl} from "../constants";

export const createNGOProjectProfileAction = (content) => async (dispatch) => {

    const token = localStorage.getItem('token');

    const headers = new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ token }`
        });
    
    const data = {
        name: content.organisationName,
        type: content.organisationType,
        privacy_setting: 'public',
        location: content.organisationLocation,
        description: content.organisationDescription,
        phone: '076455366477',
        terms_of_services: content.organisationTerms,
        focus: {
            social: content.organisationFocus.social,
            languages: content.organisationFocus.languages,
            sports: content.organisationFocus.sports,
            arts_culture: content.organisationFocus.artsCulture,
            coaching: content.organisationFocus.coaching,
            food: content.organisationFocus.food,
            politics: content.organisationFocus.politics,
            items: content.organisationFocus.items,
        }
    }

    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
        };
    console.log(config)

//    await fetch(`${baseUrl}backend/api/organisations/new/`, config);
    await fetch(`http://localhost:8003/backend/api/organisations/new/`, config);


    // dispatch({ type: 'post', payload: token });
}
