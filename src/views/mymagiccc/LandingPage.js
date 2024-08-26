import React from 'react'
import {
 CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'

import KamalaHarrisImg from 'src/assets/images/Kamala_Harris.jpg'
import MorganFreemanImg from 'src/assets/images/Morgan_Freeman.jpeg'
import TimotheeChalametImg from 'src/assets/images/Timothée_Chalamet.jpg'

const slidesLight = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23AAA%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23F5F5F5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23BBB%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23EEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23E5E5E5%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]

const LandingPage = () => {
  return (
    <CRow>
      <h1 className="website-title"><strong className="title-bold">My</strong><strong className="title-bold">MagicC</strong>hinese<strong className="title-bold">C</strong>haracters</h1>
      <h3 className="website-title website-title-sub">AI-Powered Chinese Name Generation Tool</h3>
      <CCol xs={12} className="celeb-name-carousel-container">
        <CCard className="mb-4">
          <CCardHeader>
            <strong> Celebrity Chinese Names </strong>
          </CCardHeader>
          <CCardBody>
            <CCarousel controls indicators className="celeb-name-carousel">
              <CCarouselItem className="celeb-name-carousel-item">
                <img className="d-block h-100 w-100" src={KamalaHarrisImg} alt="slide 1" />
                <CCarouselCaption className="carousel-caption d-none d-md-block">
                  <h5>Kamala Harris</h5>
                  <h5>贺锦丽 (hè jĭn lì)</h5>
                  <p>Harris adopted her Chinese name in 2003 when she was running for San Francisco District Attorney.</p>
                  <p>贺(hè)is one of the 100 common last names in China. It's origin can be traced back to the reign of Emperor An of the Eastern Han Dynasty, which is over 1800 years from now.</p>
                  <p>锦丽(jĭn lì) can be interpreted as successful intricate beauty, where 锦 means success and 丽 means beauty in Chinese.</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={MorganFreemanImg} alt="slide 2" />
                <CCarouselCaption className="carousel-caption d-none d-md-block">
                  <h5>Morgan Freeman</h5>
                  <h5>摩根·弗里曼 (mó gēn · fú lĭ màn)</h5>
                  <p>摩根·弗里曼 is the direct translation of Morgan Freeman based on the pronounciation of the words.</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img className="d-block w-100" src={TimotheeChalametImg} alt="slide 3" />
                <CCarouselCaption className="carousel-caption d-none d-md-block">
                  <h5>Timothée Chalamet</h5>
                  <h5>甜茶 (tián chá)</h5>
                  <p>甜茶 (tián chá) is a nickname given by Chinese fans of Timothée Chalamet, meaning Sweet Tea. It is a play on the first syllables in his first name, where Ti sounds similar to tián, and a nod to his heartthrob looks ;) </p>
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} className="try-now-button-container">
        <CButton color="primary" className="try-now-button">Generate Your Chinese Name Now</CButton>
      </CCol>
    </CRow>
  )
}

export default LandingPage
