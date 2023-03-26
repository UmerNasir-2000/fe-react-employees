import { Button, ScrollArea, Table } from "@mantine/core";
import { IconDatabase, IconTrash } from "@tabler/icons-react";
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
      <td>{row.status}</td>
      <td>{row.type}</td>
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
        <thead>
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
