import './App.css';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Cities from './pages/Cities/Cities';
import Hotels from './pages/Hotels/Hotels';
import Main from './layouts/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NewCity  from './pages/NewCity/Newcity';
import {NewHotel} from './pages/NewHotel/NewHotel';
import  DetailsCity  from './pages/DetailCity/DetailCity';
import DetailHotel from './pages/DetailHotel/DetailHotel';
import MyCities from './pages/Mycities/MyCities';
import MyItineraries from './pages/MyTineraries/MyTineraries';
import MyHotels from './pages/Myhotels/MyHotels';
import MyShows from './pages/MyShows/MyShows';
import {useEffect} from 'react';

import NewItinerary from "./pages/NewItinerary/NewItinerary";
import NewShows from './pages/NewShows/NewShows';

import Profile from './pages/Profile/Profile';


import { useDispatch, useSelector } from "react-redux";
import userActions from './redux/actions/userActions';
import React from 'react';
import RouteProtect from './components/RouteProtect/RouteProtect';



function App() {

  const dispatch = useDispatch()
  const {reLogin} = userActions
  const token = JSON.parse(localStorage.getItem('token'))
  const { online, role} = useSelector(state => state.user)


  useEffect(()=>{
    if(token){
      dispatch(reLogin(token.token.user))
    }
  
  },[])






  return (
    <>

<Main>
  <ScrollToTop />
<Routes>
  
<Route path='/' element={<Home />} />
<Route path='/index' element={<Home />} />
<Route path='/Cities' element={<Cities />} />
<Route path='/Hotels' element={<Hotels />} />
<Route path='/*' element={<NotFound />} />
<Route path='/SignIn' element={<SignIn/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/NewCity' element={<NewCity/>}/>
<Route path='/NewHotel' element={<NewHotel/>}/>

<Route path="/detailsC/:id" element={<DetailsCity />} />
<Route path="/detailsH/:id" element={<DetailHotel />} />
<Route element={<RouteProtect isAllowed={!!online  && role === 'admin'} reDirect='/signin' />}>
<Route path='/Mycities' element={<MyCities />} />
<Route path='/MyHotels' element={<MyHotels />} />
</Route>
<Route element={<RouteProtect isAllowed={!!online} reDirect='/signin' />}>
<Route path="/newItinerary" element={<NewItinerary />} />
<Route path='/newShow' element={<NewShows/>}/>
    <Route path='/MyTineraries' element={<MyItineraries />} />
    <Route path='/MyShows' element={<MyShows />} />
</Route>
<Route path='/Profile' element={<Profile />}/>
</Routes>

   </Main>
    


   {/*  <Route path='/DetailCity/:id' element={<DetailCity />} /> */}
    
    
    
   
   
    </>
  );
}



export default App;
