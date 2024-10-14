export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-20 lg:h-24 w-full flex justify-center items-center border-t-[1px] border-border-light">{`\u00a9 ${currentYear} Uldis Zigurs. All rights reserved.`}</footer>
  );
}
