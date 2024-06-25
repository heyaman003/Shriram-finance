import { useState , useEffect , useRef } from 'react'

import './App.css'
import Chairman from './components/Chairman'
import CFO from './components/CFO'
import EffectiveGovernance from './components/EffectiveGovernance'
import BOD from './components/BOD'
import ManagementTeam from './components/ManagementTeam'
import PeopleCore from './components/PeopleCore'
import NavigatingChallenges from './components/NavigatingChallenges'
import EmpoweringCommunities from './components/EmpoweringCommunities'
import BusinessModel from './components/BusinessModel'
import AdoptingDigitisation from './components/AdoptingDigitisation'
import FinancialInclusion from './components/FinancialInclusion'
import RobustProcess from './components/RobustProcess'
import LeadingFinancialAgility from './components/LeadingFinancialAgility'
import ExploringNewFrontiers from './components/ExploringNewFrontiers'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/Home/LandingPage';
 

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Navbar/>
<div className="wrapper-main w-[90%] m-auto overflow-x-hidden">

 <Routes>

<Route path='/' element={<LandingPage/>}/>
<Route path='/Chairman-message' element={<Chairman/>}/>
<Route path='/CFO' element={<CFO/>}/>
<Route path='/BOD' element={<BOD/>}/>
<Route path='/ManagementTeam' element={<ManagementTeam/>}/>
<Route path='/PeopleCore' element={<PeopleCore/>}/>
<Route path='/NavigatingChallenges' element={<NavigatingChallenges/>}/>
<Route path='/EmpoweringCommunities' element={<EmpoweringCommunities/>}/>
<Route path='/BusinessModel' element={<BusinessModel/>}/>
<Route path='/AdoptingDigitisation' element={<AdoptingDigitisation/>}/>
<Route path='/FinancialInclusion' element={<FinancialInclusion/>}/>
<Route path='/RobustProcess' element={<RobustProcess/>}/>
<Route path='/LeadingFinancialAgility' element={<LeadingFinancialAgility/>}/>
<Route path='/ExploringNewFrontiers' element={<ExploringNewFrontiers/>}/>

    </Routes>
</div>
</BrowserRouter>
    </>
  )
}

export default App
