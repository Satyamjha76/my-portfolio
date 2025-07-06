
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
        <Route path='/Projects' element={<Projects/>} errorElement={<NotFound/>}/>
        <Route path='/Skills' element={<Skills/>} errorElement={<NotFound/>}/>
        <Route path='/About' element={<About/>} errorElement={<NotFound/>}/>
        <Route path='/Contact' element={<Contact/>} errorElement={<NotFound/>}/>
        <Route path='/JointerX/PrivacyPolicy' element={<JointerXPrivacyPolicy/>} errorElement={<NotFound/>}/>
        <Route path='/JointerX/TermsandConditions' element={<JointerXTermsAndConditions/>} errorElement={<NotFound/>}/>
        <Route path='/JointerX/AccountDeletion' element={<JointerXAccountDeletion/>} errorElement={<NotFound/>}/>
        <Route path="*" element={<NotFound />} />
        
       </Routes>
       <hr className='dark:bg-gray-900'/>
       <Footer/>
    </div>
  );
}

export default App;
