import Image from "next/image";
import React from "react";
import styles from "./globals.module.css";
import Link from "next/link";
import Card from "./card/card";
export default function Home() {
  return (
    <>
      <div className={styles.a1}>
        <div className={styles.a}>
          <img src="/am.png" ></img>
          <div className={styles.b}>
            <div className={styles.ac}> <Link href="/" >انشئ حساب </Link></div>
            <div className={styles.ca}> <Link href="/" >تواصل معنا  </Link></div>
            <div className={styles.wh}> <Link href="/"> احنا مين </Link></div></div>
          <div className={styles.c}>
            <button className={styles.d}><Link href="/">احسب استهلاكك وطرق لتقليل مصاريفك</Link></button>
          </div></div>
        {/*الكروت الاول  */}
     
      </div><div className={styles.v}>
        <h1>اهلا بكم في منصة حساب استهلاكك في المصاريف واية المساعدات الي نقدمهالك في التوفير</h1></div>
      <div className={styles.cardBox}>
      <Card></Card>
     </div>

      <div className={styles.footer}>
        <footer>جميع الحقوق محفوظة للمطور سالم © 2025</footer></div>
    </>
  );
}
