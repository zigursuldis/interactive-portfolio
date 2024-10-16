import SocialMediaLinks from "./social-media-links";

export default function Banner() {
  return (
    <section className="my-20">
      <h1 className="text-3xl lg:text-4xl text-accent font-departure-mono [text-shadow:_0_4px_0_#000]">
        Hello, my name is Uldis.
      </h1>
      <h2 className="text-xl lg:text-2xl mt-2">
        I am a software developer based in Latvia, Riga. <br />I build engaging,
        user-focused applications for a seamless experience.
      </h2>
      <SocialMediaLinks />
    </section>
  );
}
