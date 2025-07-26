
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import JointerXPrivacyPolicy from './pages/JointerX/PrivacyPolicy';
import JointerXTermsAndConditions from './pages/JointerX/TermsandCondition';
import JointerXAccountDeletion from './pages/JointerX/DeleteAccount';

function App() {

  return (
    <div className="App">
      
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} errorElement={<NotFound/>}/>
        <Route path='/projects' element={<Projects/>} errorElement={<NotFound/>}/>
        <Route path='/skills' element={<Skills/>} errorElement={<NotFound/>}/>
        <Route path='/about' element={<About/>} errorElement={<NotFound/>}/>
        <Route path='/contact' element={<Contact/>} errorElement={<NotFound/>}/>
        <Route path='/jointerx/privacypolicy' element={<JointerXPrivacyPolicy/>} errorElement={<NotFound/>}/>
        <Route path='/jointerx/termsandconditions' element={<JointerXTermsAndConditions/>} errorElement={<NotFound/>}/>
        <Route path='/jointerx/accountdeletion' element={<JointerXAccountDeletion/>} errorElement={<NotFound/>}/>
        <Route path="*" element={<NotFound />} />
        
       </Routes>
       <hr className='dark:bg-gray-900'/>
       <Footer/>
    </div>
  );
}

export default App;
