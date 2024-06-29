
import { BrowserRouter  , Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import { Home } from './pagess/Home'
import Signin from "./pagess/Signin";
import Signup from "./pagess/Signup";
import GenerateDiet from "./pagess/Diet";
import PrivateRoute from './components/PrivateRoute';
import Profile from './pagess/Profile';
import Dashboard from './pagess/Dashboard';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route element={<PrivateRoute/>}>
      <Route path ='/profile' element={<Profile/>}/>    
      <Route path="/generate-diet" element={<GenerateDiet />} />  
      <Route path="/Dashboard" element={<Dashboard />} />  
        </Route>
      </Routes>

    </BrowserRouter>

  )
}