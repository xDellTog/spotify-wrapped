import { useEffect } from "react";
import { styled, theme } from "../theme/stitches.config";
import Home from "./pages/Home";

const Theme = styled("div", {
  background: "$slate12",
  color: "$slate1",
  fontFamily: "$default",
});

function App() {
  useEffect(() => {
    document.body.style.background = theme.colors.slate12.value;
    document.body.style.color = theme.colors.slate1.value;
  }, []);

  return (
    <Theme className={theme}>
      <Home />
    </Theme>
  );
}

export default App;
