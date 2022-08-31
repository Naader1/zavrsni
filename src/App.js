import axios from "axios";
import { useState } from "react";
import Input from "./components/Input";
import ResultList from "./components/ResultList";

export const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchUsername = async (e) => {
    e.preventDefault();
    try {
      const result = await axios(`https://api.github.com/users/${searchInput}`);
      setUser(result.data);
    } catch (err) {
      console.log(err);
    }
    setShowList(false);
  };

  const handleSearchRepo = async (e) => {
    setShowList((prev) => !prev);
    e.preventDefault();
    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col justify-start items-center ">
      <h1 className="text-2xl md:text-4xl text-white font-semibold mt-5">
         Github user
      </h1>
      <Input
        searchInput={searchInput}
        handleChange={handleChange}
        handleSearchUsername={handleSearchUsername}
      />
      {user.name && (
        <div className="flex gap-10 items-center lg:items-start justify-around w-full lg:flex-row flex-col text-center mt-12 px-20">
          <div className="mt-2 lg:mt-0">
            <div className="flex justify-center items-center">
              <img className="w-52 rounded-3xl" src={user.avatar_url} alt="" />
            </div>
            <p className="text-center mt-2 text-white font-semibold text-xl">
              user: {user.name}
            </p>
            <p className="text-center mt-2 text-white font-semibold text-xl">
              Location: {user.location}
            </p>
            {user.bio && (
              <p className="max-w-[20ch] text-center mt-2 text-white font-semibold text-xl">
                Bio: {user.bio}
              </p>
            )}
            <button
              className=" w-full px-4 py-2 my-2 lg:my-5 bg-emerald-700 text-white hover:bg-emerald-500 rounded-full font-semibold"
              id="button"
              onClick={handleSearchRepo}>
              {showList ? "Hide user repos" : "Show user repos "}
            </button>
          </div>
          {showList ? (
            <div className="mt-0 lg:mt-2 w-full lg:w-[600px] ">
              <h2 className="text-white text-3xl uppercase tracking-wider font-semibold mb-5">
                Repositories:
              </h2>
              <ul>
                {repos.map((repo) => (
                  <ResultList
                    key={repo.id}
                    avatar={repo.svn_url}
                    name={repo.name}
                  />
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default App;