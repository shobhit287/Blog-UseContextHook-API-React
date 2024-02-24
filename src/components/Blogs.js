import { useContext } from "react";
import { AppContext } from "../hooks/AppContext";
import './blogs.css';

function Blog(){
    const {posts,loader}=useContext(AppContext);
    return(
        loader?(<h3>Loading...</h3>):(<>
        <div className="post_section">
            {posts.map((data)=>{
                return(
            <div className="post_card">
              <h3>{data.title}</h3>
              <p>By <span>{data.author}</span> on <span>{data.category}</span></p>
              <p>Posted on <span>{data.date}</span></p>
              <p>{data.content}</p>
              <div className="card_tags">
              {data.tags.map((tag)=>{
                return(
                    <p>#{tag}</p> 
                )
              })}
              </div>
              </div>);
            })}
          </div>
      </>  
    ))
}
export default Blog;