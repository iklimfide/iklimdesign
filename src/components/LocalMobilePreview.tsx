"use client";

import { useEffect, useState } from "react";

const PARAM = "mobilePreview";
const PHONE_W = 390;
const PHONE_H = 844;

function isLocalHost() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]";
}

export function LocalMobilePreview() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState("");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get(PARAM) === "1") return;
    if (!isLocalHost()) return;

    url.searchParams.set(PARAM, "1");
    setSrc(url.toString());
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const updateScale = () => {
      const next = Math.min(
        1,
        (window.innerHeight - 88) / PHONE_H,
        (window.innerWidth - 48) / PHONE_W,
      );
      setScale(next);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!visible) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setLoaded(false);
          setOpen(true);
        }}
        className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 rounded-full bg-arch-900 px-4 py-2.5 text-xs font-medium tracking-wide text-white shadow-lg disabled:opacity-0"
        disabled={open}
      >
        Mobil önizleme
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            style={{
              width: PHONE_W * scale,
              height: PHONE_H * scale,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-sm text-white/90"
            >
              Kapat
            </button>
            <div
              className="relative origin-top-left overflow-hidden rounded-[2.4rem] border-[10px] border-zinc-900 bg-white shadow-2xl"
              style={{
                width: PHONE_W,
                height: PHONE_H,
                transform: `scale(${scale})`,
              }}
            >
              {loaded ? null : (
                <p className="absolute inset-0 flex items-center justify-center text-xs tracking-wide text-zinc-400">
                  Yükleniyor…
                </p>
              )}
              <iframe
                title="Mobil önizleme"
                src={src}
                onLoad={() => setLoaded(true)}
                className="relative h-full w-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
