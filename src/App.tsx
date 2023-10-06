/* eslint-disable @atlaskit/design-system/ensure-design-token-usage */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./themes/theme";
import light from "@assets/xycodelab-logo-blanc.svg";
import dark from "@assets/xycodelab-logo-noir.svg";
import { GitHub, LinkedIn, QrCode, Twitter } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import QRCode from "react-qr-code";
import VCard from "vcard-creator";
import { useState } from "react";
import { Box } from "@atlaskit/primitives";
import { Code } from "@atlaskit/code";
// import SyntaxHighlighter from "./components/SyntaxHighlighter";
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 0,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fffcf7",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#1c2826"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#e49435" : "#e49435",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#fffcf7" : "#fffcf7",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#e49435"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#e49435" : "e49435",
    borderRadius: 20 / 2,
  },
}));

///////Define a new vCard///////
const myVCard = new VCard("vcard");
///////Some variables///////
const lastname = "Loua";
const firstname = "Lucien";
const additional = "";
const prefix = "";
const suffix = "";

myVCard
  ///////Add personal data///////
  .addName(lastname, firstname, additional, prefix, suffix)
  ///////Add work data///////
  .addCompany("XY CodeLab")
  .addJobtitle("Web Developer")
  .addRole("Frontend Developer")
  .addEmail("lucien.loua@gmail.com")
  .addPhoneNumber("+221773946665", "PREF")
  .addAddress("Dakar", "Senegal")
  .addSocial("https://x.com/xyhomi3", "Twitter", "xyhomi3")
  .addURL("https://xyhomi3.github.io/");
///////save to file///////
myVCard.buildVCard();
///////Render the vCard///////
function App() {
  ////////////////////////////////
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  ////////////////////////////////
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  const ButtonTheme = {
    backgroundColor: theme.palette.mode === "dark" ? "#fffcf7" : "#1c2826",
    color: theme.palette.mode === "dark" ? "#1c2826" : "#fffcf7",
  };
  const QrTheme = {
    backgroundColor: theme.palette.mode === "light" ? "#fffcf7" : "#fffcf7",
  };
  const IconTheme = {
    color: theme.palette.mode === "light" ? "#1c2826" : "#fffcf7",
  };
  const CardTheme = {
    backgroundColor: theme.palette.mode === "dark" ? "#1c2826" : "#fffcf7",
  };
  ////////////////////////////////
  const downloadVCard = () => {
    const blob = new Blob([myVCard.buildVCard()], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "xy-contact.vcf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };
  ////////////////////////////////
  const StyledApp = styled("div")({
    fontFamily:
      "Montserrat,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.4,
  });

  return (
    <>
      <StyledApp>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="card">
            <div>
              <a href="https://github.com/XYCodeLab" target="_blank">
                {theme === lightTheme ? (
                  <img src={dark} className="logo" alt="XY Mascot" />
                ) : (
                  <img src={light} className="logo" alt="XY Mascot" />
                )}
              </a>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "1em",
                paddingBottom: "25px",
                minWidth: "250px",
                maxWidth: "375px",
              }}
            >
              <Box
                backgroundColor={"utility.elevation.surface.current"}
                style={{
                  padding:"15px",
                  borderRadius: "5px",
                  border: "solid 0.5px var(--noir-xy)",
                  minWidth: "267px",
                  maxWidth: "375px",
                }}
              >
                <Code  style={{color: "var(--noir-xy)", background: "none" }}>
                  <code>
                    <>
                      Hello Word! <br />
                      I'm <b>Lucien</b> aka {`{XYHOMi3}`},
                      <br />
                      passionate about Ui/UX,
                      <br />
                      enhancing web interfaces
                      <br />& Sound Designing.
                    </>
                    <br />
                    <br />
                    <>
                      My goal is to enhance users
                      <br />
                      experiences by crafting high
                      <br />
                      performing web products.
                      <br />
                    </>
                  </code>
                </Code>
              </Box>
            </div>
            <button
              style={ButtonTheme}
              onClick={handleOpen}
              className={`button`}
            >
              Let's Connect
            </button>

            <div
              style={{
                width: "100%",
                paddingTop: "35px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <a href={"https://github.com/xyhomi3"} target="_blank">
                <GitHub
                  className={`icon icon-hover`}
                  sx={{ cursor: "pointer" }}
                  style={IconTheme}
                />
              </a>
              <a href={"https://linkedin.com/in/lucien-loua"} target="_blank">
                <LinkedIn
                  sx={{ cursor: "pointer" }}
                  style={IconTheme}
                  className={`icon icon-hover`}
                />
              </a>
              <a href={"https://x.com/xyhomi3"} target="_blank">
                <Twitter
                  sx={{ cursor: "pointer" }}
                  style={IconTheme}
                  className={`icon icon-hover`}
                />
              </a>
              <MaterialUISwitch
                onChange={toggleTheme}
                sx={{ m: -0.5 }}
                defaultChecked={theme.palette.mode === "dark"}
              />
            </div>
          </div>

          {/* MODAL */}

          <div>
            <Modal open={open} onClose={handleClose}>
              <div style={CardTheme} className="cc">
                <QRCode
                  style={QrTheme}
                  className="qrcode"
                  size={256}
                  value={myVCard.toString()}
                  viewBox={`0 0 256 256`}
                  bgColor="transparent"
                  fgColor="var(--noir-xy)"
                />
                <h4>
                  <pre
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    Scan the QR code {<QrCode className="qr" />}
                  </pre>
                </h4>
                <b style={{color:"var(--orange-xy)"}}>OR</b>
                <button
                  className="boutton"
                  onClick={downloadVCard}
                  style={ButtonTheme}
                >
                  Add to contacts
                </button>
              </div>
            </Modal>
          </div>
        </ThemeProvider>
      </StyledApp>
    </>
  );
}

export default App;
