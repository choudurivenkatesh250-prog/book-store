import Home from "./components/Home"
import {BrowserRouter,Routes,Route} from 'react-router'
 
const App = () => {
return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path = "/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>
)
}
export default App