import XYMascot from "@assets/xyhomi3-mascot-wnb.svg";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import { GitHub, QrCode, Twitter } from "@mui/icons-material";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import "./App.css";
import React from "react";
import QRCode from "react-qr-code";
import VCard from "vcard-creator";
import ParticleBackground from "./components/ParticleBackground";

// Define a new vCard
const myVCard = new VCard("vcard");

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

//save to file
myVCard.buildVCard();

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
  color: "var(--blanc-xy)",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 5,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          Tout comme les chromosomes{" "}
          <b style={{ color: "var(--blanc-xy)" }}>X</b> et{" "}
          <b style={{ color: "var(--blanc-xy)" }}>Y</b> forment notre ADN.{" "}
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
                fgColor="var(--noir-xy)"
              />

              <h4
                style={{
                  marginBottom: 0,
                  color: "var(--noir-xy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                }}
              >
                Scannez le code QR
                {<QrCode sx={{ color: "var(--orange-xy)" }} />}
              </h4>
              <h4
                style={{
                  marginBottom: 0,
                  color: "var(--orange-xy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                Ou
              </h4>

              <button
                onClick={downloadVCard}
                className="button2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  textTransform: "uppercase",
                  marginTop: "25px",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                Ajouter le contact
                {
                  <ContactsRoundedIcon
                    sx={{ color: "var(--blanc-xy)", display: "flex" }}
                  />
                }
              </button>
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
        <ParticleBackground/>

    </>
  );
}

export default App;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
