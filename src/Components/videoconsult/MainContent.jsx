import React from 'react'
import Content from './Content'
import HealthCard from './HealthCard'
import Offers from './Offers'
import Doctors from './Doctors'
import HowitWorks from './HowitWorks'
import OnlineConsult from './OnlineConsultant'
import DoctorConsultationVideos from './DoctorConsultationVideos'
import UserExperience from './UserExperience'
import Faq from './Faq'
import Specialities1 from './Specialities1'
import LegalCard from './LegalCard'
import FinancialCard from './FinanceCard'

function MainContent() {
  return (
    <div className='bg-gray-100'>
      <Content />

      <HealthCard />
      <LegalCard/>
      <FinancialCard/>
      <Offers />
      <Doctors />
      <HowitWorks />
      <OnlineConsult />
      <DoctorConsultationVideos />
      <UserExperience />
      <Faq />
    </div>
  )
}

export default MainContent
