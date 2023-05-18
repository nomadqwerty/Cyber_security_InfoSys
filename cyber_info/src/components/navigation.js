import { Fragment, useState } from "react";
import styles from "./css/navigation.module.css";

const menuOptions = [
  "Cyber-security",
  "Cyber-threats",
  "Pentesting",
  "intrusion-detection",
];

const subcategoryObj = {
  "Cyber-security": [
    "What is cyber security?",
    "Layers of cyber security",
    "The digital world",
    "cyber space",
    "functionality of cyber security",
  ],
  "Cyber-threats": [
    "Cybercrime",
    "Cyber attack",
    "Cyber terrorism",
    "Malware",
    "Trojan Horse",
    "BOTNET",
  ],
  Pentesting: [
    "Phases of penetration tests",
    "Types of penetration tests",
    "Penetration testing tools",
  ],
  "intrusion-detection": [
    "Intrusion detection",
    "Types of intrusion prevention",
    "Intrusion detection system Methods",
  ],
};

const Subcategory = ({ option, setOption }) => {
  const subcatOpts = subcategoryObj[option];
  const subcatList = subcatOpts.map((e, i) => {
    return (
      <li key={i} className={styles.sublistItem}>
        <p>{e}</p>
      </li>
    );
  });

  return (
    <div className={styles.menu}>
      <ul className={styles.sublist}>{subcatList ? subcatList : ""}</ul>
      <div className={styles.close}>
        <button
          onClick={() => {
            setOption(null);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const NavigationBar = () => {
  const [option, setOption] = useState(null);

  const listItem = menuOptions.map((e, i) => {
    return (
      <li key={i} className={styles.listItem}>
        <p
          onClick={() => {
            setOption(e);
          }}
        >
          {e}
        </p>
      </li>
    );
  });
  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <div className={styles.navBarWrap}>
        <div className={styles.headerTextWrap}>
          <h1 className={styles.headerText}>Cyber Security InfoSys.</h1>
        </div>
        <div className={styles.listWrap}>
          <ul className={styles.list}>{listItem}</ul>
        </div>
      </div>

      {!option ? null : <Subcategory option={option} setOption={setOption} />}
    </div>
  );
};

export default NavigationBar;
