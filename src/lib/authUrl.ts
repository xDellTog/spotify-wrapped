const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || '';
const SCOPES = process.env.REACT_APP_SPOTIFY_SCOPES || '';

const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    response_type: 'token',
});

export const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;