import React from "react";
import Alert from "@mui/material/Alert";

export const AlertBox = () => {
  return (
    <div>
      <Alert
        id="cityAlert"
        sx={{ textAlign: "center", display: "none", marginTop: "10px" }}
        severity="error"
      >
        City does not exist!
      </Alert>
    </div>
  );
};
