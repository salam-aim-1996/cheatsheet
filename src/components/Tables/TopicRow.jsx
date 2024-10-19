import React from "react";
import { TableRow } from "@mui/material";
import OptionsCell from "../TableCells/OptionsCell";
import UniversalCell from "../TableCells/UniversalCell";
import { useColorScheme } from "@mui/material";

function TopicRow({ row, rows, isEditable, setRows, index }) {
  const { action, description, visual, code, emoji } = row.item.item;
  const { mode } = useColorScheme();

  const rowData = [
    {
      key: "action",
      value: action,
    },
    {
      key: "description",
      value: description,
    },
    {
      key: "code",
      value: code,
    },
    {
      key: "visual",
      value: visual,
    },

    // { key: "emoji", value: emoji, width: "5%" },
  ];

  return (
    <TableRow
      sx={{
        verticalAlign: "baseline",
        borderBottom: "1px solid #EDEDED",
        backgroundColor: mode === "light" ? "#f5f5f5" : "#1a1a1a",
      }}
    >
      {rowData.map(({ key, value, width }) =>
        value ? (
          <UniversalCell key={key} column={key} data={value} index={index} />
        ) : null
      )}

      {/* Render OptionsCell if isEditable is true */}
      {/* {isEditable && (
        <OptionsCell
          key={`${action}-options`}
          row={row}
          rows={rows}
          setRows={setRows}
        />
      )} */}
    </TableRow>
  );
}

export default TopicRow;
