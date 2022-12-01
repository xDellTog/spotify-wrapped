import React, { useEffect, useState } from 'react';

function App() {
  // const [accessToken, setAccessToken] = useState<string>();
  // const [expiresIn, setExpiresIn] = useState<number>();

  // useEffect(() => {
  //   const query: any = Object.fromEntries(new URLSearchParams(window.location.hash.replace('#', '?')));
  //   console.log(query);
  //   if (!!query.access_token) {
  //     setAccessToken(query.access_token);
  //     setExpiresIn(query.expires_in);
  //     window.location.hash = '';
  //   }
  // }, []);

  console.log(process.env.SPOTIFY_CLIENT_ID);

  return (
    <div>
      <h1>Spotify Wrapped</h1>
    </div>
  );
}

export default App;
