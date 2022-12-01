export default class SpotifyService {
    static async getTopTracks(accessToken: string = '') {
        if (!accessToken) return Promise.reject('Invalid Token!');

        return await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'authorization': `Bearer ${accessToken}`,
            },
        }).then(async (response: Response) => {
            if (response.ok) return await response.json();

            throw await response.json();
        });
    }
}