import {
  Box,
  Burger,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";

function AppNavigation() {
  const theme = useMantineTheme();
  return (
    <Header
      height={{ base: 50, md: 70 }}
      p="md"
      sx={{ boxShadow: theme.shadows.md }}
    >
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={false}
            onClick={() => {
              console.log("clicked");
            }}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <Group>
          <Box>
            <div>Logo</div>
            <div>Company</div>
          </Box>
        </Group>
      </div>
    </Header>
  );
}

export default AppNavigation;
