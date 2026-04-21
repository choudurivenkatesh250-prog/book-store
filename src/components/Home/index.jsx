import Header from "../Header"
import './index.css'
import { useNavigate } from "react-router"
const Home = () => {
 let navigate = useNavigate()
 const onClickNavigate =()=>{
    navigate("/books")
 }
    return (
        <div className="home-bg">
            <Header />
            <div className="banner">
                <div className="banner-text">
                    <h1>Expand Your Mind. <br />
                    Read a book </h1>
                    <p>My Book Application is a user-friendly platform designed to help users explore, read, and manage their favorite books efficiently. The application provides a wide collection of books across different genres, allowing users to search, filter, and select books based on their interests. It features a clean and responsive interface, making navigation smooth and engaging. Users can also save their favorite books, view detailed descriptions, and keep track of their reading progress. Built using modern technologies, the application ensures a seamless and interactive experience for all book lovers. </p>
                    <button onClick={onClickNavigate}>Explore More</button>

                </div>
            </div>
        </div>
    )
}
export default Home