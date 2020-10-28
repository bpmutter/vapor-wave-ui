import "./App.css";
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import { Card, Box, Link, Hr, Button, Heading, Text } from "./components";
export default function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: `linear-gradient(60deg, ${theme.colors.background} 0%, ${theme.colors.secondary} 51%, ${theme.colors.background} 100%)`,
          position: "absolute",
          zIndex: -1,
        }}
      ></div>

      <Card
        dark
        sx={{
          p: 2,
          borderRadius: 4,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
          backgroundColor: "primary",
          display: "inline-block",
          m: 2,
        }}
      >
        <Box sx={{ p: 2, m: 2 }}>
          <Heading as="h3">Neo Vapor Wave</Heading>
          <Text fontSize={0}>what happens here</Text>
        </Box>
        <Button variant="primary" mr={2}>
          primary button
        </Button>
        <Button variant="secondary" mr={2}>
          secondary button
        </Button>
      </Card>
      <Card
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
          backgroundColor: "primary",
          display: "inline-block",
          m: 2,
        }}
      >
        <Box sx={{ p: 2, m: 2 }}>
          <Heading as="h3">Neo Vapor Wave</Heading>
          <Text fontSize={0}>
            what happens here{" "}
            <Link href="/#" glow>
              derp
            </Link>
          </Text>
          <Hr />
          <Text fontSize={0}></Text>
        </Box>
      </Card>
      <Card
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
          backgroundColor: "primary",
          display: "inline-block",
          m: 2,
        }}
        dark
      >
        <Box sx={{ p: 2, m: 2, style: "inline-block" }}>
          <Heading as="h3">Neo Vapor Wave</Heading>
          <Text fontSize={0}>dark box?</Text>
          <Hr sx={{ p: 2 }} />
          <Button variant="primary" mr={2}>
            primary button
          </Button>
          <Button variant="secondary" mr={2}>
            secondary button
          </Button>
          <Button variant="secondary" mr={2}>
            secondary button
          </Button>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
