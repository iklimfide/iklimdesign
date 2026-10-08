import { Header } from "@/components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Header />
      <main className="w-full space-y-32 p-6 md:p-12 lg:ml-auto lg:w-2/3 lg:p-20 xl:w-3/4">
        {children}
      </main>
    </div>
  );
}
