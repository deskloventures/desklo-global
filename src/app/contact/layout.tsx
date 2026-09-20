// src/app/(pages)/layout.tsx (or place in any specific sub-directory)

export default function SubPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A clean, relative wrapper that ensures the content stretches 
    // properly within the main layout area.
    <div className="relative flex flex-col flex-1 w-full h-full bg-[#FAFAFA]">
      {children}
    </div>
  );
}