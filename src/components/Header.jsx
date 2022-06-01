import React from "react";
import { CryptoState } from "../CryptoContext";
import {
  Select,
  MenuItem,
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles,
  createTheme,
  ThemeProvider
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    type: "dark"
  }
});
const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                className={classes.title}
                variant="h6"
              >
                Crypto Finder
              </Typography>

              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginRight: 15
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="NGN">NGN</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};
export default Header;
