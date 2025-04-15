import styles from './footer.module.css';
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img src="/symbol.svg" alt="Brand Logo" className={styles.footerLogo} />
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>PRODUCT</h4>
            <ul className={styles.columnList}>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Guided</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>COMPANY</h4>
            <ul className={styles.columnList}>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Strategy</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>INFO</h4>
            <ul className={styles.columnList}>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>FOLLOW US</h4>
            <ul className={styles.socialList}>
              <li>
                <a href="#" aria-label="Facebook">
                  <FaFacebookF color='#7E0707' size={20}/>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Google">
                  <FaGoogle color='#7E0707' size={20}/>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <FaTwitter color='#7E0707' size={20}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        <p>© 2021 Manual. All rights reserved</p>
      </div>
    </footer>
  );
}
