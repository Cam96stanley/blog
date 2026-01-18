"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/firebase/auth";
import styles from "./page.module.scss";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signIn(email, password);
      router.push("/admin");
    } catch {
      setError("Unauthorized");
    }
  }

  return (
    <form className={styles.login__page} onSubmit={handleLogin}>
      <div className={styles.form__container}>
        <h1 className={styles.login__title}>Admin Login</h1>

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />

        <button className={styles.submit__button} type="submit">
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </form>
  );
};

export default AdminLogin;
