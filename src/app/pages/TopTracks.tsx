import { useEffect, useState } from 'react';
import { authUrl } from '../../lib/authUrl';
import { styled } from '../../theme/stitches.config';
import SpotifyService from './../services/SpotifyService';

const Div = styled('div');
const Text = styled('span', { margin: 0 });
const Button = styled('button', {
    textDecoration: 'none',
    color: '$slate1',
    '&:hover': {
        color: '$slate2',
        textDecoration: 'underline',
    },
    '&:focus': {
        color: '$slate3',
        textDecoration: 'underline',
    },
});

export default function TopTracks() {
    const [accessToken, setAccessToken] = useState<string>();
    const [tracks, setTracks] = useState<any[]>([]);

    useEffect(() => {
        const query: any = Object.fromEntries(new URLSearchParams(window.location.hash.replace('#', '?')));
        if (!!query.access_token) {
            setAccessToken(query.access_token);
            window.location.hash = '';
        }
    }, []);

    useEffect(() => {
        if (accessToken) {
            SpotifyService.getTopTracks(accessToken).then((response) => {
                setTracks(response.items);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [accessToken]);

    return (
        <Div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text as="h1">Spotify Wrapped</Text>

            {!accessToken && (
                <Button as="a" href={authUrl} css={{ marginTop: '$2' }}>
                    Entrar
                </Button>
            )}

            <Text as="h2" css={{ marginTop: '$2' }}>Top 10 Tracks</Text>

            {accessToken && (
                <Div css={{ display: 'flex', flexDirection: 'column', marginTop: '$2' }}>
                    {tracks && tracks.map((track: any, idx: number) => (
                        <Div css={{ marginTop: '$2' }}>
                            <Text as="b"> #{idx + 1} - {track.name} </Text>
                            <Text as="p" css={{ color: '$slate9' }}> {track.artists.map((artist: any) => artist.name).join(', ')} </Text>
                        </Div>
                    ))}
                </Div>
            )}
        </Div>
    );
}
