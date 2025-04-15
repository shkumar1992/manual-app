'use client'

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from 'next/image'
import ModalDialog from "./modal-dialog";
import { Questions } from "@/app/libs/types";
import styles from "./hero.module.css";

type HeroProps = {
  data: Questions
}

export default function Hero({ data }: HeroProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const html = document.body.parentElement;
    if (dialogOpen) {
      document.body.style.overflowY = 'hidden';
      if (html) html.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
      if (html) html.style.overflow = 'visible';
    }
  }, [dialogOpen]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.topBar}>
        <Image src="/symbol.svg" alt="Brand Logo" width={40} height={40} className={styles.logo} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>Be good to yourself</h1>
        <p className={styles.paragraph}>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <button className={styles.button} onClick={() => setDialogOpen(true)}>Take the quiz</button>
      </div>
      <AnimatePresence>
        {dialogOpen && <ModalDialog data={data} onClose={() => setDialogOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
