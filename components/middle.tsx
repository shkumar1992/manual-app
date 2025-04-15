import styles from "./middle.module.css";
import Image from "next/image";

export default function Middle() {
  return (
    <section className={styles.middleSection}>
      <h3 className={styles.mainHeading}>What we can help with</h3>

      <div className={styles.helpItem}>
        <div className={styles.helpImageWrapper}>
          <Image
            src="/hair-loss.jpg"
            alt="Hair loss example"
            height={445}
            width={370}
            className={styles.helpImage}
          />
        </div>
        <span className={styles.bgNumber}>01</span>
        <div className={styles.helpText}>
          <p className={styles.subTitle}>HAIR LOSS</p>
          <h3 className={styles.helpTitle}>
            Hair loss needn’t be irreversible. We can help!
          </h3>
          <p className={styles.helpParagraph}>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
      </div>

      <div className={styles.helpItem}>
        <div className={styles.helpImageWrapper}>
          <Image
            src="/erection.jpg"
            alt="Erection concerns example"
            height={445}
            width={370}
            className={styles.helpImage}
          />
        </div>
        <span className={styles.bgNumber}>02</span>
        <div className={styles.helpText}>
          <p className={styles.subTitle}>ERECTIONS</p>
          <h3 className={styles.helpTitle}>
            Erections can be a tricky thing. But no need to feel down!
          </h3>
          <p className={styles.helpParagraph}>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </div>
      </div>
    </section>
  );
}
