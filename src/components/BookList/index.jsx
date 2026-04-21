import BookItem from '../BookItem'
import Header from '../Header'
import { useState, useEffect, use } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import './index.css'
import { IoSearch } from "react-icons/io5";


const BookList = () => {
   const [bookList, setBookList] = useState([]);
   const [isloading, setIsLoading] = useState(true)
   const [searchInput,setSearchInput]= useState("")

   useEffect(() => {
      const getBookList = async () => {
         const apiUrl = "https://www.jsonkeeper.com/b/SQID2"
         const response = await fetch(apiUrl)
         const fetchedData = await response.json()
         console.log(fetchedData)
         setBookList(fetchedData)
         setIsLoading(false)
      }
      getBookList()
   }, [])
   const onChangeSearchInput = (event) => {
      setSearchInput(event.target.value)
   }
   const filteredBooks = bookList.filter((eachObj)=>
      eachObj.Title.toLowerCase().includes(searchInput.toLowerCase())
   )
   const renderLoadingView = () => {
      return (
         <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
         }}>
            <BallTriangle/>
            <h1>Loading</h1>
         </div>
      )
   }
   const renderBookList = () => {
      return (
         <ul>
            {filteredBooks.map((each) => (
               <BookItem bookObj={each} key={each.Id} />
            ))}
         </ul>
      )
   }
   return (
      <div>
         <Header />
         <div className='search-input-cont'>
       
         <input type='search' placeholder='Search Book...' onChange={onChangeSearchInput} value={searchInput}/>
            <button><IoSearch /></button>
         </div>
         {isloading ? renderLoadingView() : renderBookList()}
      </div>
   )
}
export default BookList