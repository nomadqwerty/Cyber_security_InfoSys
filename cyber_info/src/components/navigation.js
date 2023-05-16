import { Fragment } from "react";
import styles from "./css/navigation.module.css";

const NavigationBar = () => {
  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <div className={styles.navBarWrap}>
        <div className={styles.headerTextWrap}>
          <h1 className={styles.headerText}>Cyber Security InfoSys.</h1>
        </div>
        <div className={styles.listWrap}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
            <li className={styles.listItem}>
              <p>Item 1 </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.menu}>menu</div>
    </div>
  );
};

export default NavigationBar;
