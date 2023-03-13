import React from "react";
import Box from "@mui/material/Box";

const Input = ({ lable, name, value, onChg, type, ph }) => {
  return (
    <Box display="flex" flexShrink={2} mt={1.7} flexDirection="column">
      <lable style={{ marginBottom: "5px", fontWeight: "600" }}>{lable}</lable>
      <input
        name={name}
        value={value}
        onChange={onChg}
        placeholder={ph}
        style={{
          height: "1.5rem",
          paddingLeft: "8px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
        type={type}
      />
    </Box>
  );
};

export default Input;
