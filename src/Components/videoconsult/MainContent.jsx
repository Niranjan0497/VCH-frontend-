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

function MainContent() {
  return (
    <div>
      <Content />
      <Specialities1 />
      <HealthCard />
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
