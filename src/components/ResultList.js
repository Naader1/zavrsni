const ResultList = ({ avatar, name }) => {
    return (
      <li className=" bg-zinc-700 text-white border-2  border-emerald-600 hover:bg-emerald-600 py-2 px-5 ">
        <a className="block" target="_blank" href={avatar}>
          {name}
        </a>
      </li>
    );
  };
  
  export default ResultList;