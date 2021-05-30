import "./Main.css";
const Pages = () => {
  return (
    <div className="p-6 bg-gray-600 main">
      <h3 className="font-sans text-6xl font-light text-gray-100 nav-heading">
        Hello
      </h3>
      <div className="together">
        <h4 className="font-sans text-6xl font-thin tracking-wider text-center text-gray-100 ">
          Hii, this is
        </h4>
        <h1 className="mx-4 font-sans font-semibold leading-loose text-center text-gray-100 heading text-9xl">
          Mayank
        </h1>
      </div>
      <h3 className="mb-8 font-sans text-3xl text-gray-100 nav-heading">
        <div className="text-2xl italic"> a bit about me,</div> I do Web
        developing, Competitve Programmer, Find more productive tools as a
        hobby.
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto text-gray-100 fill-current animate-bounce w-14 h-14 arrow"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
};

export default Pages;
