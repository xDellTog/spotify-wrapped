import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Div } from "../components/Div";
import { Text } from "../components/Text";
import SpotifyService from "./../services/SpotifyService";

export default function TopTracks({ accessToken }: any) {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    if (accessToken) {
      SpotifyService.getTopTracks(accessToken)
        .then((response) => {
          setTracks(response.items);
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
      {tracks &&
        tracks.map((track: any, idx: number) => (
          <Button
            css={{ marginTop: "$2" }}
            key={`track${idx}`}
            as="a"
            target="_blank"
            href={track.external_urls.spotify}
          >
            <Text as="b">
              #{idx + 1} - {track.name}
            </Text>
            <Text as="p" css={{ color: "$slate9" }}>
              {track.artists.map((artist: any) => artist.name).join(", ")}
            </Text>
          </Button>
        ))}
    </Div>
  );
}
