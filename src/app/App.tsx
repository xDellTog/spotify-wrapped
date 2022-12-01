import { useEffect } from "react";
import { styled, theme } from "../theme/stitches.config";
import TopTracks from "./pages/TopTracks";

const Theme = styled('div', {
  background: '$slate12',
  color: '$slate1',
  fontFamily: '$default',
});

function App() {
  useEffect(() => {
    if (theme) {
      document.body.style.background = theme.colors.slate12.value;
      document.body.style.color = theme.colors.slate1.value;
    }
  }, [theme]);

  return (
    <Theme className={theme}>
      <TopTracks />
    </Theme>
  );
}

export default App;
