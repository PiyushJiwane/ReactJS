import React,{useState,useEffect} from 'react'
import axios from 'axios'

function PostDataFetching() {
    const [posts, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
            setPost(res.data)
            console.log("data-fetched");
        }).catch(err=>{
            console.log(err);
        })
    },[id])

    return (
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <ul>
                {
                    // posts.map(post=>(
                        <li key={posts.id}>{posts.title}</li>
                    // ))
                }
            </ul>
        </div>
    )
}

export default PostDataFetching
