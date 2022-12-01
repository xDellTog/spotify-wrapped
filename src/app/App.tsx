import React, { useEffect, useState } from 'react';
import { authUrl } from '../lib/authUrl';
import SpotifyService from './services/SpotifyService';

function App() {
  const [accessToken, setAccessToken] = useState<string>();
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    const query: any = Object.fromEntries(new URLSearchParams(window.location.hash.replace('#', '?')));
    console.log(query);
    if (!!query.access_token) {
      setAccessToken(query.access_token);
      window.location.hash = '';
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      SpotifyService.getTopTracks(accessToken).then((response) => {
        console.log(response);
        setTracks(response.items);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Spotify Wrapped</h1>

      {!accessToken && (
        <a href={authUrl}>
          Entrar
        </a>
      )}

      {accessToken && (
        <div>
          {tracks && tracks.map((track: any, idx: number) => (
            <>
              <b> #{idx + 1} - {track.name} </b>
              <p> {track.artists.map((artist: any) => artist.name).join(', ')} </p>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
