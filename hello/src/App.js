
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';
function App() {
 
  const [post,setPost] = useState([])
  const [loading,setLoading]= useState(false)
  const [postPerPage, setPostPerPage] = useState(5)
  const [currentPage,setCurrentPage] = useState(1)


useEffect(() =>{
  const fetch_Post = async() =>{
    setLoading(true)
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPost(res.data)
    setLoading(false)
  }
  fetch_Post()
},[])

//getPost
const indexOfLastPage = postPerPage * currentPage
const indexOfFirstPage = indexOfLastPage - postPerPage
const currentPosts = post.slice(indexOfFirstPage,indexOfLastPage)

const paginate = pageNumber =>{
  setCurrentPage(pageNumber)

}

  return (
    <div className="container mt-g">
    <h1 className='text-primary mb-3'>My Blog</h1>
    <Posts post={currentPosts} loading={loading}></Posts>
    <Pagination postPerPage={postPerPage}
        totalPost={post.length}
        paginate={paginate}></Pagination>
    </div>
  );
}

export default App;
