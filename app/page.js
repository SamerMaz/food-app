import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideShow";

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageSlideshow />
      </div>
      <div>
      <div className={classes.hero}>
        <h1>NExt level food for next leve</h1>    
        <p>Taste & share food from all over the world</p>
      </div>
      <div className={classes.cta}>
        <Link href={"/meals"}>Explore Meals</Link>
        <Link href="/community">Join The Community</Link>
      </div>
      </div>
    </header>
    <main>
      <section>
        <h2>How it works</h2>
        <p>Get started in 3 simple steps</p>
        <div>
          <div>
            <h3>1. Choose</h3>
            <p>Explore a variety of meals and find your favorite</p>
          </div>
          <div>
            <h3>2. Cook</h3>
            <p>Follow the instructions and create the meal yourself</p>
          </div>
          <div>
            <h3>3. Share</h3>
            <p>Share your creation with the community and get feedback</p>
          </div>
        </div>
      </section>
     
    </main>
    </>
  );
}
