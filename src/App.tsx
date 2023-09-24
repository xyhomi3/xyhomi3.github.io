// eslint-disable-next-line @typescript-eslint/no-unused-vars

import XYMascot from "@assets/xycodelab-logo.svg";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import { GitHub, LinkedIn, QrCode, Twitter } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import QRCode from "react-qr-code";
import VCard from "vcard-creator";

// Define a new vCard
const myVCard = new VCard("vcard");

// Some variables
const lastname = "Loua";
const firstname = "Lucien";
const additional = "";
const prefix = "";
const suffix = "";

myVCard
  // Add personal data
  .addName(lastname, firstname, additional, prefix, suffix)
  // Add work data
  .addCompany("XY CodeLab")
  .addJobtitle("Web Developer")
  .addRole("Frontend Developer")
  .addEmail("lucien.loua@gmail.com")
  .addPhoneNumber("+221773946665", "PREF")
  .addAddress("Dakar", "Senegal")
  .addSocial("https://x.com/xyhomi3", "Twitter", "xyhomi3")
  .addURL("https://xyhomi3.github.io/");
//save to file
myVCard.buildVCard();

// Render the vCard

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
      <div className="card">
        <div>
          <a href="https://github.com/xy-codelab" target="_blank">
            <img src={XYMascot} className="logo" alt="XY Mascot" />
          </a>
        </div>
        <pre style={{ fontSize: "1em", paddingBottom: "25px" }}>
          <code>
            Le Code façonne le web, <br />
            tout comme les chromosomes <br />
            <b style={{ color: "var(--orange-xy)" }}>X</b> et{" "}
            <b style={{ color: "var(--orange-xy)" }}>Y</b> forment notre ADN.
          </code>
        </pre>
        <button onClick={handleOpen}>Let's Connect</button>

        <div
          style={{ paddingTop: "35px", display: "inline-flex", gap: "15px" }}
        >
          <a href={"https://github.com/xyhomi3"} target="_blank">
            <GitHub sx={{ cursor: "pointer" }} />
          </a>
          <a href={"https://linkedin.com/in/lucien-loua"} target="_blank">
            <LinkedIn sx={{ cursor: "pointer" }} />
          </a>
          <a href={"https://x.com/xyhomi3"} target="_blank">
            <Twitter sx={{ cursor: "pointer" }} />
          </a>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={handleClose}>
          <div className="cc">
            <QRCode
              className="qrcode"
              size={256}
              style={{ height: "100%", maxWidth: "100%", width: "100%" }}
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
                  fontSize: "1rem",
                }}
              >
                Scannez le code QR {<QrCode className="qr" />}
              </pre>
            </h4>

            <button
              onClick={downloadVCard}
              style={{
                display: "flex",
                width: "100%",
                fontSize: "0.73em",
                alignItems: "center",
                justifyContent: "space-around",
                textTransform: "uppercase",
                marginTop: "15px",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              Ajouter aux contacts
              {
                <ContactsRoundedIcon
                  style={{ fontSize: "15px" }}
                  className="icon"
                />
              }
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
