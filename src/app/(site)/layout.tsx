import { LocalMobilePreview } from "@/components/LocalMobilePreview";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <LocalMobilePreview />
    </>
  );
}
