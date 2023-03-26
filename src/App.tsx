import { Button, Center, Loader } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import AppTable from "./components/core/table";
import LayoutProvider from "./providers/layout";

export interface IEmployee {
  _id: string;
  name: string;
  email: string;
  age: number;
  status: string;
  color: string;
  designation: string;
  type: string;
}

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    const response = await axios.get<IEmployee[]>(
      "https://clothes-clownfish.cyclic.app/api/employee"
    );
    setEmployees(response.data);
    setLoading(false);
  };

  return (
    <LayoutProvider>
      <main>
        {!loading && (
          <section style={{ width: "70%", marginInline: "auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h1 style={{ fontSize: "20px" }}>Employee Records</h1>
              </div>
              <div>
                <Button leftIcon={<IconPlus size="1rem" />}>Add</Button>
              </div>
            </div>

            <AppTable data={employees} />
          </section>
        )}
        {loading && (
          <Center>
            <Loader color="gray" />
          </Center>
        )}
      </main>
    </LayoutProvider>
  );
}

export default App;
