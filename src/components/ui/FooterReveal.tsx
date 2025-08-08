import React from "react";
import { motion } from "framer-motion";

type Social = { href: string; label: string; icon?: React.ReactNode };

type FooterRevealProps = {
  companyName?: string;
  tagline?: string;
  links?: { title: string; href: string }[];
  social?: Social[];
  copyrightYear?: number;
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FooterReveal({
  companyName = "GlowSpace",
  tagline = "Designing playful, useful UI",
  links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
  social = [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://github.com", label: "GitHub" },
  ],
  copyrightYear,
  className = "",
}: FooterRevealProps) {
  const year = copyrightYear ?? new Date().getFullYear();

  return (
    <motion.footer
      className={`bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent text-slate-100 px-6 md:px-12 py-12 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1 min-w-0">
            <h2 id="footer-heading" className="text-lg md:text-2xl font-semibold">
              {companyName}
            </h2>
            <p className="mt-2 text-sm text-slate-300">{tagline}</p>

            {/* Newsletter small */}
            <form
              className="mt-4 flex max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                // replace with actual submit logic
                // this demo prevents reload
                alert("Subscribed (demo) 🎉");
              }}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-slate-800 text-slate-100 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-end gap-8">
            <nav aria-label="footer navigation" className="flex gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-300 hover:text-white transition"
                >
                  {l.title}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.label}
                  className="text-slate-300 hover:text-white text-sm transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.icon ?? s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-sm text-slate-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span>© {year} {companyName}. All rights reserved.</span>
          <span>Made with ❤️ — Practice playground</span>
        </div>
      </div>
    </motion.footer>
  );
}
