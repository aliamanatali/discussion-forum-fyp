import React from 'react'

function home() {
    const[postList, setPostList] = useState([]);
    
    useEffect(() => {
        Axios.get('http://localhost:3001/home').then((response) => {
          setPostList(response.data);
          console.log(response.data);
        }).catch(() => {
          console.log("error");
        });
      }
      , []);

  return (
    <div>
    <h1>Post List</h1>
      {postList.map((val, key) => {
    return(
    <div style={{border: "1px solid black", width:"400px", margin: "5px", padding: "10px"}} key={key}>
            <h1>{val.title}</h1>
            <h1>{val.body}</h1>
            <h1>{val.tags}</h1>
            <h1>{val.body}</h1>
          </div>
  );
    })}
    </div>
  )}
export default home