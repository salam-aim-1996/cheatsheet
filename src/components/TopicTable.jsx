import * as React from "react";
import { useEffect, useState } from "react";
import { Stack, useColorScheme, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Fuse from "fuse.js";
import GUICell from "./GUICell";
import CodeCell from "./CodeCell";
import ActionCell from "./ActionCell";
import VisualCell from "./VisualCell";
import CLICell from "./CLICell";
import EmojiCell from "./EmojiCell";
import CreateRowForm from "./CreateRowForm";

function TopicTable({ cheatsheets }) {
  const [rows, setRows] = useState([]);
  const { mode } = useColorScheme();

  const fuse = new Fuse(cheatsheets, {
    keys: ["table"],
    // threshold: 0.3,
  });

  useEffect(() => {
    const result = [...fuse.search("Basic Snapshotting")];
    // do the array sorting
    console.log(result[0]);
    setRows(result);
  }, []);

  return (
    <Stack alignItems={"flex-end"}>
      <h1>Navigation</h1>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell>Visual</TableCell>
              <TableCell>GUI</TableCell>
              <TableCell>CLI</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Emoji</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item.action}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <ActionCell action={row.item.action}></ActionCell>
                <VisualCell visual={row.item.visual}></VisualCell>

                <GUICell gui={row.item.gui}></GUICell>
                <CLICell cli={row.item.cli}></CLICell>
                <CodeCell mode={mode}></CodeCell>
                <EmojiCell emoji={row.item.emoji}></EmojiCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* if admin */}
      <CreateRowForm></CreateRowForm>
    </Stack>
  );
}

export default TopicTable;
