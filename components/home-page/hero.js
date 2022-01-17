import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/pic.jpg"}
          alt="An image"
          width={300}
          height={300}
        />
      </div>
      <h1>Dat Anh</h1>
      <p>
        Hi I'm about web development - Frontend frameworks like Angular , React,
        Vue
      </p>
    </section>
  );
}
//174