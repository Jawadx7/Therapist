import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="search_form">
      <select className="dropdown">
        <option value="">Therapist</option>
        <option value="">Option Two</option>
        <option value="">Option Three</option>
        <option value="">Option Four</option>
      </select>
      <div className="input">
        <input type="text" placeholder="City, zip code" />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
