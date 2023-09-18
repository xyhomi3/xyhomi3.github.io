import XYMascot from "@assets/xyhomi3-mascot-wnb.svg";
import { GitHub, Twitter } from "@mui/icons-material";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="/">
          <img src={XYMascot} className="logo" alt="XY Mascot" />
        </a>
      </div>
      <h1>DEVFOLiO</h1>
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
        <button>Let's Connect</button>
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
