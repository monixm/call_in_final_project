
export const createProfileAction = (content) => async (dispatch) => {

    // const token = localStorage.getItem('token');

    const headers = new Headers({
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${ token }`
        });
    
    const data = {
        name: content.organisationName,
        type:'',
        location: content.organisationLocation,
        description: content.organisationDescription,
        phone: content.organisationContact.phone,

    }

    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
        };

    await fetch("http://localhost:8003/backend/api/organisations/new/", config);

    // dispatch({ type: 'post', payload: token });
}

