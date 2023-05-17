import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Revisions</h1>
      <p>
        Upload your academic manuscripts, choose your desired journal, and we will reformat your papers to the appropriate journal style.
      </p>
      
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="Revisions Logo"
        width={180}
        height={37}
        priority
      />

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Join our Waitlist</h2>
          <p>Join our waitlist and be the first to know when we launch.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Join Waitlist</button>
          </form>
        </div>
      </div>
    </main>
  );
}
