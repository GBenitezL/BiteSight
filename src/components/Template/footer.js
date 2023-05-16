import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import "./navbar.css";

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  });

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "static", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          className="footerBox"
          value={value}
          style={{background:"#2074d4"}}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <div className="footer">
            <p className="footerText">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              {" "}
              ViajaTec{" "}
            </a>
            </p>
          </div>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
