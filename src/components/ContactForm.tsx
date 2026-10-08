"use client";

import { FormEvent, useState } from "react";

type Props = {
  email?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ email }: Props) {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !from || !message) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    if (!isValidEmail(from)) {
      setError("Geçerli bir e-posta adresi girin.");
      return;
    }
    if (!email) {
      setError("İletişim e-postası henüz tanımlı değil.");
      return;
    }

    setError("");
    const subject = encodeURIComponent(`İklim Güvenç — ${name}`);
    const body = encodeURIComponent(`${message}\n\nGönderen: ${name} <${from}>`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex max-w-md flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        Ad
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          className="border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-neutral-900"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        E-posta
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
          className="border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-neutral-900"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Mesaj
        <textarea
          name="message"
          required
          rows={5}
          maxLength={2000}
          className="resize-y border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-neutral-900"
        />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        className="mt-2 inline-flex w-fit rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white hover:bg-neutral-700"
      >
        Gönder
      </button>
    </form>
  );
}
