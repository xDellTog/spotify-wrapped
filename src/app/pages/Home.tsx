import { useEffect, useState } from "react";
import { authUrl } from "../../lib/authUrl";
import { Button } from "../components/Button";
import { Div } from "../components/Div";
import { Text } from "../components/Text";
import TopArtists from "./TopArtists";
import TopTracks from "./TopTracks";

enum Tab {
  Tracks,
  Artists,
}

export default function Home() {
  const [accessToken, setAccessToken] = useState<string>();
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

          {tab === Tab.Tracks && <TopTracks accessToken={accessToken} />}
          {tab === Tab.Artists && <TopArtists accessToken={accessToken} />}
        </Div>
      )}

      <Text
        as="p"
        css={{
          position: "fixed",
          bottom: 0,
          paddingBottom: "$1",
        }}
      >
        Developed by{" "}
        <Button
          as="a"
          target="_blank"
          href="https://github.com/xDellTog"
          color="primary"
        >
          xDellTog
        </Button>{" "}
        using Spotify API
      </Text>
    </Div>
  );
}
