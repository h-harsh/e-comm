import {useFilter} from '../Filters/filterContext'

export const SearchBar = () => {
    const {setStatus, status} = useFilter();

  return (
    <>
      <input
        className="search-thing"
        type="text"
        placeholder="Search items..."
        onChange={ (event) => setStatus(event.target.value)}
        value={status}
      />
      {/* <button
      className="btn btn-link1"
      onClick={() => setStatus("")}
      >X</button> */}
    </>
  );
};

// products.filter(value => {
//     if (value.name.toLowerCase().includes(status.toLowerCase())) {
//        return value;
//    } else return false
// }).map(val => {
//    return(
//        <div>
//        <p>{val.name}</p>
//    </div>
//    )
// })
