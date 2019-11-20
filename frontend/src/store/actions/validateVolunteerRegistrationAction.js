import { baseUrl } from "../constants";

export const validateVolunteerRegistrationAction = async data => {
  const headers = new Headers({

    'Content-Type': 'application/json'
  });

  const validation = {code: data.code,
                      email: data.email,
                      password: data.password,
                      password_repeat:data.passwordConfirm,
                      first_name:data.name,
                      last_name:data.lastName,
                      };
  const volunteer = {profile_picture:data.profilePicture,
                     first_name:data.name,
                     last_name:data.lastName,
                     location:data.location,
                     interests:data.volunteerInterest,
                     privacy_settings:data.privacySettings,
                     instagram:data.instagram,
                     linkedin:data.linkedin,
                     facebook:data.facebook,
                     }

  const body  = JSON.stringify({validation, volunteer});

  const config = {
    headers,
    body,
    method: 'POST'
  };
  const response = await fetch(`${baseUrl}backend/api/volunteers/new/`, config);
  return await response.json();
};
