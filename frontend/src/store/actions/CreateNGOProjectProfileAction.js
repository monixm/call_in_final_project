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
        privacy_setting: content.privacy_setting,
        location: content.organisationLocation,
        description: content.organisationDescription,
        website: content.organisationContact.website,
        phone: content.organisationContact.phone,
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
        },
        facebook: content.organisationProfile.facebook,
        instagram: content.organisationProfile.instagram,
        linkedin: content.organisationProfile.linkedIn,
    }

    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
        };

    await fetch(`${baseUrl}backend/api/organisations/new/`, config);
}
