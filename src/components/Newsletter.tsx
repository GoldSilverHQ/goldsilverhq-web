import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      id="newsletter"
      className="rounded-xl bg-raised px-6 py-10 text-center shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Ebook companion</p>
      <h2 className="mt-2 font-display text-3xl text-fg">A Short History of Sound Money</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        The ebook follows the same map as this site. Join the list for launch notes — media, not advice.
      </p>
      {done ? (
        <p className="mt-6 text-sm text-gold-soft">Saved on this device. We will not pretend this is a mailing server.</p>
      ) : (
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim()) return;
            localStorage.setItem("gshq-newsletter", email.trim());
            setDone(true);
          }}
        >
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="min-h-11 flex-1 rounded-full bg-bg px-4 text-sm text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_16%,transparent)] outline-none placeholder:text-faint focus:shadow-[0_0_0_1px_var(--color-gold)]"
          />
          <Button type="submit">Get launch note</Button>
        </form>
      )}
    </section>
  );
}
