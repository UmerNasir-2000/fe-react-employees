import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        colors: {
          bg: ["#E9E8E8"],
          font: ["#242424"],
        },
        shadows: {
          md: "1px 1px 3px rgba(0, 0, 0, .25)",
          xl: "5px 5px 3px rgba(0, 0, 0, .25)",
        },
        globalStyles: (theme) => ({
          body: {
            fontFamily: "Inter, sans-serif",
            background: theme.colors.bg[0],
            color: theme.colors.font[0],
            lineHeight: 1.2,
            padding: "30px",
            webkitFontSmoothing: "antialiased",
          },
        }),
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
