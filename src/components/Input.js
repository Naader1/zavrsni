const Input = ({ searchInput, handleChange, handleSearchUsername }) => {
    return (
      <form onSubmit={handleSearchUsername} className="flex mt-5">
        <input
          id="input"
          className="rounded-l-full px-3 py-1 border-none outline-none "
          type="text"
          placeholder="Github username "
          value={searchInput}
          onChange={handleChange}
        />
        <button
          className="bg-emerald-700 text-white hover:bg-emerald-500 font-semibold  transition duration-300 rounded-r-full px-3 py-1"
          onClick={handleSearchUsername}>
          search
        </button>
      </form>
    );
  };
  
  export default Input;