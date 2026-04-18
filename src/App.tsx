import React, { useState } from 'react';
import AlreadyAppliedCard from './features/components/AlreadyApplied';

import { ApplicationForm } from './features/components/ApplicationForm';


export default function App () {
  const [showSearchedUser, setShowSearchedUser] = useState(false);
  const [isApply, setApply] = useState(false);
  



  return (
  
  <div>
    
    { !showSearchedUser && !isApply && <div className='d-flex align-items-center justify-content-around mt-5'>
      <button className='btn btn-primary' onClick={()=>setApply(true)}>Apply for New</button>

      <button className='btn btn-primary' onClick={()=>setShowSearchedUser(!showSearchedUser)}>Already Applied credit card</button>

    </div>}
      

    {showSearchedUser && <AlreadyAppliedCard />}
    {isApply && <ApplicationForm/>}
    </div>
  );
};
