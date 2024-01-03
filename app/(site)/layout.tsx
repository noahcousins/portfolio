export const metadata = {
  title: 'Noah Cousins',
  description: 'Frontend Web Developer'
};

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-4xl">{children}</div>
    </div>
  );
}
