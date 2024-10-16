export default function ContactMe() {
  return (
    <div className="flex flex-col mt-4 mb-8 items-center">
      <p>Want to get in touch?</p>

      <a
        href="mailto:uldis.zigurs@outlook.com"
        className="bg-accent-dark text-text-primary px-2 py-1 rounded-none hover:translate-y-[-2px] duration-200 mt-4 block "
      >
        Contact me
      </a>
    </div>
  );
}
