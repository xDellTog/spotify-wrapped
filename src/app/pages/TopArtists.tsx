import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Div } from "../components/Div";
import SpotifyService from "../services/SpotifyService";

export default function TopArtists({ accessToken }: any) {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    if (accessToken) {
      SpotifyService.getTopArtists(accessToken)
        .then((response) => {
          setArtists(response.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [accessToken]);

  return (
    <Div
      css={{
        display: "flex",
        flexDirection: "column",
        marginTop: "$2",
      }}
    >
      {artists &&
        artists.map((artist: any, idx: number) => (
          <Div css={{ marginTop: "$2" }} key={`artist${idx}`}>
            <Button as="a" target="_blank" href={artist.external_urls.spotify}>
              #{idx + 1} - {artist.name}
            </Button>
          </Div>
        ))}
    </Div>
  );
}
