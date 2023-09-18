import XYMascot from "@assets/xyhomi3-mascot-wnb.svg";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import { GitHub, Twitter } from "@mui/icons-material";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import "./App.css";
import React from "react";
import QRCode from "react-qr-code";
import VCard from "vcard-creator";

// Define a new vCard
const myVCard = new VCard();

// Some variables
const lastname = "Loua";
const firstname = "Lucien";
const additional = "";
const prefix = "Cécé";
const suffix = "";

myVCard
  // Add personal data
  .addName(lastname, firstname, additional, prefix, suffix)
  // Add work data
  .addCompany("XY Conding Hub")
  .addJobtitle("Web Developer")
  .addRole("Frontend Developer")
  .addEmail("xy@homi3.dev")
  .addPhoneNumber("+221773946665", "PREF")
  .addAddress("Dakar", "Senegal")
  .addSocial("https://x.com/xyhomi3", "Twitter", "xyhomi3")
  .addURL("https://xyhomi3.github.io/XY/");

// Render the vCard

const style = {
  position: "absolute" as const,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "200px",
  maxWidth: "400px",
  bgcolor: "var(--blanc-xy)",
  color: "var(--noir-xy)",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 5,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <a href="/XY">
          <img src={XYMascot} className="logo" alt="XY Mascot" />
        </a>
      </div>
      <h2>DEVFOLiO</h2>
      <a className="rd">
        <code>Le Code</code> façonne le web. <br />
        Tout comme les chromosomes <b style={{ color: "var(--blanc-xy)" }}>
          X
        </b>{" "}
        et <b style={{ color: "var(--blanc-xy)" }}>Y</b> forment notre ADN.{" "}
        <br />
        Je donne vie à vos projets, en codant chaque élément avec soin et
        précision. <br />
        <br />
      </a>
      <div className="card">
        <button onClick={handleOpen}>Let's Connect</button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <QRCode
              size={256}
              style={{ height: "100%", maxWidth: "100%", width: "100%" }}
              value={myVCard.toString()}
              viewBox={`0 0 256 256`}
              bgColor="transparent"
              color="var(--orange-xy)"
            />
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                fontSize: "small",
                textTransform: "uppercase",
                color: "var(--blanc-xy)",
                padding: "13px",
                borderRadius: "5px",
                backgroundColor: "var(--noir-xy)",
              }}
            >
              Scan mon contact
              {
                <QrCodeScannerRoundedIcon
                  sx={{ color: "var(--orange-xy)", display: "flex" }}
                />
              }
            </h1>
          </Box>
        </Modal>
      </div>

      <div style={{ display: "inline-flex", gap: "15px" }}>
        <a href={"https://github.com/xyhomi3"} target="_blank">
          <GitHub sx={{ cursor: "pointer" }} />
        </a>
        <a href={"https://x.com/xyhomi3"} target="_blank">
          <Twitter sx={{ cursor: "pointer" }} />
        </a>
      </div>
    </>
  );
}

export default App;
