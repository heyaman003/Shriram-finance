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

 

function App() {
  // const [count, setCount] = useState(0)
  // const a = useRef(0)
  

  // useEffect(() => {
  //   a.current = a.current + 1;
  //   console.log(`rendering and value of a is ${a.current}..`)
  // })

  return (
    <>

    <Chairman/>
    <CFO/>
    <EffectiveGovernance />
    <BOD />
    <ManagementTeam />
    <PeopleCore />
    <NavigatingChallenges />
    <EmpoweringCommunities />
    <BusinessModel />
    <AdoptingDigitisation />
    <FinancialInclusion />
    <RobustProcess />
    <LeadingFinancialAgility />
    <ExploringNewFrontiers />
      
    </>
  )
}

export default App
