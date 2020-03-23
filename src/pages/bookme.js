import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
// import pic04 from '../assets/images/pic04.jpg'

class BookMe extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Book Jennifer Ross" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            {/* <span className="image main"><img src={pic04} alt="" /></span> */}
            {/* <h2>Book Me</h2> */}
            <p>
              <a
                href="https://calendly.com/rosstutoring/coding-session"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coding Session (One Student)
              </a>
            </p>
            <p>
              <a
                href="https://calendly.com/rosstutoring/coding-session-2-students"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coding Session (Two Students)
              </a>
            </p>
            <p>
              <a
                href="https://calendly.com/rosstutoring/tutoring-session"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tutoring (One Student)
              </a>
            </p>
            <p>
              <a
                href="https://calendly.com/rosstutoring/guitar-lesson"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guitar Lesson (One Student)
              </a>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default BookMe
