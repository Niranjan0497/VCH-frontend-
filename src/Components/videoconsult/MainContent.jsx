import React from 'react'
import Content from './Content'
import Specialities from './Specialities'
import HealthCard from './HealthCard'
import Offers from './Offers'
import Doctors from './Doctors'
import HowitWorks from './HowitWorks'
import OnlineConsult from './OnlineConsultant'
import DoctorConsultationVideos from './DoctorConsultationVideos'
import UserExperience from './UserExperience'
import Faq from './Faq'
import BookAppointment from './BookAppointment'

function MainContent() {
  return (
    <div>
      <Content/>
      <Specialities/>
      <HealthCard/>
      <Offers/>
      <Doctors/>
      <HowitWorks/>
      <OnlineConsult/>
      <DoctorConsultationVideos/>
      <UserExperience/>
      <Faq/>
      <BookAppointment/>
    </div>
  )
}

export default MainContent
