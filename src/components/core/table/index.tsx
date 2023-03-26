import {
  Badge,
  Button,
  ScrollArea,
  Select,
  Switch,
  Table,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { IEmployee } from "../../../App";

type AppTableProps<T> = {
  data: T[];
};

function AppTable({ data }: AppTableProps<IEmployee>) {
  const rows = data.map((row, index) => (
    <tr key={index} style={{ padding: "5px" }}>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.designation}</td>
      <td>{row.age}</td>
      <td>
        <Switch size="sm" checked={row.status === "active"} />
      </td>
      <td>
        <Badge color={row.type == "full-time" ? "green" : "blue"}>
          {row.type}
        </Badge>
      </td>
      <td style={{ textAlign: "center" }} onClick={() => alert("Hello")}>
        <Button leftIcon={<IconTrash size="1rem" />}>Delete</Button>
      </td>
    </tr>
  ));
  return (
    <ScrollArea>
      <Table
        sx={{
          marginTop: "15px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          boxShadow: "md",
          padding: "10px",
          background: "#fff",
        }}
        highlightOnHover
      >
        <thead style={{ padding: "5px" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Age</th>
            <th>Status</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default AppTable;
