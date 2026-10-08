import { BrandLogo } from "@/components/BrandLogo";

export function ComingSoon() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-white px-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="flex max-w-[20rem] flex-col items-center gap-5 sm:max-w-none sm:gap-8">
        <BrandLogo
          size={180}
          priority
          className="h-28 w-28 object-contain sm:h-44 sm:w-44"
        />
        <p lang="en" className="text-center text-sm font-medium tracking-[0.2em] text-zinc-500 sm:text-lg sm:tracking-[0.28em]">
          COMING SOON
        </p>
      </div>
    </main>
  );
}
