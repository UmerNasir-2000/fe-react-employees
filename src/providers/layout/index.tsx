import { AppShell, Header } from "@mantine/core";
import AppNavigation from "../../components/core/navbar";

type LayoutProviderProps = {
  children: React.ReactNode;
};

function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <AppNavigation />
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default LayoutProvider;
