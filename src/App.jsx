import Home from "./components/Home"
import {BrowserRouter,Routes,Route} from 'react-router'
import LoginPage from "./components/loginPage"
import BookList from "./components/BookList"
import ProtectedRoute from "./components/ProtectedRoute"
 
const App = () => {
return (
  <>
  <BrowserRouter>
  <Routes>
      <Route path = "/Login" element={<LoginPage/>}/>
      <Route path = "/" element={<Home/>}/>
      <Route path="/books" element={<BookList/>}/>
  </Routes>
  </BrowserRouter>
  </>
)
}
export default App