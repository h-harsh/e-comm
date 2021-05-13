import {useFilter} from '../Filters/filterContext'

export const SearchBar = () => {
    const {setStatus, status} = useFilter();

  return (
    <>
      <input
        style={{height: "2rem", marginTop: "1.2rem", width: "20rem"}}
        type="text"
        placeholder="Search items..."
        onChange={ (event) => setStatus(event.target.value)}
        value={status}
      />
      <button
      style={{height: "3rem", marginTop: "1.2rem", padding: "1rem", fontSize: "1.3rem"}}
      onClick={() => setStatus("")}
      >X</button>
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
