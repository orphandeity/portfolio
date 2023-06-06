export default function Hero() {
  return (
    <figure className="relative">
      <img
        src="./8583_PNG.png"
        alt=""
        className="sm:absolute sm:w-2/3 sm:right-0 sm:bottom-0 sm:-z-10"
      />
      <figcaption className="absolute sm:static bottom-0 bg-gradient-to-t from-slate-900 w-full sm:mt-52">
        <h2>
          Hi, I'm Jeff.
          <br />
          Front End <span className="text-fuchsia-600">Developer</span>,
          <br />
          Musician and Cat Lover.
        </h2>
      </figcaption>
    </figure>
  );
}
