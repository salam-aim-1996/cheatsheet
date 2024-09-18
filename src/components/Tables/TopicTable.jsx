import * as React from "react";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import ColumnsSwitch from "./TopicColumn";
import TableCellsSwitch from "./TopicRow";
import useTable from "../../hooks/useTable";

function TopicTable({ table, cheatsheets }) {
  const { rows, setRows } = useTable({ table, cheatsheets });
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Stack>
      {/* Table name */}
      <Stack flexDirection="row" justifyContent="center">
        <Typography
          fontSize="30px"
          fontWeight="bold"
          sx={{
            paddingRight: "20px",
            paddingLeft: "20px",
            marginBottom: "5px",
          }}
        >
          {table.table}
        </Typography>
        {/* Admin icon button */}
        {/* <IconButton color="primary" onClick={() => setIsOptions(!isOptions)}>
          <EditIcon />
        </IconButton> */}
      </Stack>
      {/* Table Contens */}
      <TableContainer
        component={Paper}
        sx={{ width: "100%", marginBottom: "150px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* Column */}
          <ColumnsSwitch columns={table.columns} isEditable={isEditable} />
          {/* Row */}
          <TableBody>
            {rows.map((row, index) => (
              <TableCellsSwitch
                row={row}
                rows={rows}
                isEditable={isEditable}
                setRows={setRows}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Admin create row button */}
      {/* <CreateRowButton rows={rows} setRows={setRows} /> */}
    </Stack>
  );
}

export default TopicTable;
