import { useEffect, useState } from "react";
import { authUrl } from "../../lib/authUrl";
import { styled } from "../../theme/stitches.config";
import SpotifyService from "./../services/SpotifyService";

const Div = styled("div");
const Text = styled("span", { margin: 0 });
const Button = styled("button", {
  textDecoration: "none",
  color: "$slate1",
  cursor: "pointer",

  "&:hover": {
    color: "$slate2",
    textDecoration: "underline",
  },
  "&:focus": {
    color: "$slate3",
    textDecoration: "underline",
  },
});

enum Tab {
  Tracks,
  Artists,
}

export default function TopTracks() {
  const [accessToken, setAccessToken] = useState<string>();
  const [tracks, setTracks] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  const [tab, setTab] = useState<Tab>(Tab.Tracks);

  useEffect(() => {
    const query: any = Object.fromEntries(
      new URLSearchParams(window.location.hash.replace("#", "?"))
    );
    if (!!query.access_token) {
      setAccessToken(query.access_token);
      window.location.hash = "";
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      SpotifyService.getTopTracks(accessToken)
        .then((response) => {
          setTracks(response.items);
        })
        .catch((err) => {
          console.error(err);
        });

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
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Text as="h1">Spotify Wrapped</Text>

      {!accessToken && (
        <Button as="a" href={authUrl} css={{ marginTop: "$2" }}>
          Entrar
        </Button>
      )}

      {accessToken && (
        <Div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Div css={{ display: "flex", gap: "$1" }}>
            <Button
              as="h2"
              css={{
                marginTop: "$2",
                color: tab === Tab.Tracks ? "$grass8" : "$slate1",
              }}
              onClick={() => setTab(Tab.Tracks)}
            >
              Top 10 Tracks
            </Button>
            <Button
              as="h2"
              css={{
                marginTop: "$2",
                color: tab === Tab.Artists ? "$grass8" : "$slate1",
              }}
              onClick={() => setTab(Tab.Artists)}
            >
              Top 10 Artists
            </Button>
          </Div>

          {tab === Tab.Tracks && (
            <Div
              css={{
                display: "flex",
                flexDirection: "column",
                marginTop: "$2",
              }}
            >
              {tracks &&
                tracks.map((track: any, idx: number) => (
                  <Div css={{ marginTop: "$2" }}>
                    <Text as="b">
                      #{idx + 1} - {track.name}
                    </Text>
                    <Text as="p" css={{ color: "$slate9" }}>
                      {track.artists
                        .map((artist: any) => artist.name)
                        .join(", ")}
                    </Text>
                  </Div>
                ))}
            </Div>
          )}
          {tab === Tab.Artists && (
            <Div
              css={{
                display: "flex",
                flexDirection: "column",
                marginTop: "$2",
              }}
            >
              {artists &&
                artists.map((artist: any, idx: number) => (
                  <Div css={{ marginTop: "$2" }}>
                    <Text as="b">
                      #{idx + 1} - {artist.name}
                    </Text>
                  </Div>
                ))}
            </Div>
          )}
        </Div>
      )}
    </Div>
  );
}
