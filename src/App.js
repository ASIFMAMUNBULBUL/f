import React from 'react';
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Team from './pages/team'
import Faqs from './pages/faqs'
import Contact from './pages/contact'
import AddStepZero from './pages/addproperty/addstepzero'
import AddStepOne from './pages/addproperty/addstepone'
import AddStepTwo from './pages/addproperty/addsteptwo'
import AddStepThree from './pages/addproperty/addstepthree'
import AddStepFour from './pages/addproperty/addstepfour'
import AddStepFive from './pages/addproperty/addstepfive'
import UserPersonal from './pages/useraccount/userpersonal'
import Userprofile from './pages/useraccount/userprofile'
import Usersecurity from './pages/useraccount/usersecurity'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Router>
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/faq' exact component={Faqs} />
        <Route path='/team' exact component={Team}/>
        <Route path='/contact' exact component={Contact} />
        <Route path='/addpropertystep0' exact component={AddStepZero} />
        <Route path='/addpropertystep1' exact component={AddStepOne} />
        <Route path='/addpropertystep2' exact component={AddStepTwo} />
        <Route path='/addpropertystep3' exact component={AddStepThree} />
        <Route path='/addpropertystep4' exact component={AddStepFour} />
        <Route path='/addpropertystep5' exact component={AddStepFive}/>
        <Route path='/userpersonaldetail' exact component={UserPersonal} />
        <Route path='/userprofile' exact component={Userprofile} />
        <Route path='/usersecurity' exact component={Usersecurity}/>
     </Router>
    </div>
  );
}

export default App;
