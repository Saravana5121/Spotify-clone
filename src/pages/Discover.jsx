import { genres } from "../assets/constants";

const Discover = () => {
  const genreTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h1 className="font-bold text-3xl text-violet-800 text-left">
          Discover{" "}
          <span className="font-bold text-2xl text-white bg-black rounded-full px-4 py-1">
            {genreTitle}
          </span>
        </h1>
        <select
          onChange={() => {}}
          value=""
          className="bg-white font-bold text-violet-800 p-1 text-sm rounded-lg border-2 border-gray-300 sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value} className="font-bold text-violet-500">{genre.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">

      </div>
    </div>
  );
};

export default Discover;
