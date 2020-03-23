import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import macbook from '../assets/images/macbook_fav.jpg'
import headshot from '../assets/images/2019_headshot_circle.png'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Jennifer Ross Tutoring: All K-6 subject areas and computer programming" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Nice to Meet You</h2>
                </header>
                <p>
                  I'm a teacher, writer, musician, and web developer born and
                  raised in Lake County, Florida. I created this site
                  to begin offering my tutoring services and guitar lessons
                  through the online video conferencing platform Zoom. As a
                  state-certified professional eductor, I taught kindergarten,
                  first grade, and fourth grade at Sorrento Elementary for six
                  years. In 2016, I left the classroom and began teaching
                  online. Since then, I've helped dozens of Chinese students
                  learn English through{' '}
                  <a
                    href="https://www.vipkid.com/teach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIPKid's virtual platform
                  </a>{' '}
                  . I've also been providing private tutoring sessions and
                  guitar lessons for several students locally.
                </p>

                <p>
                  Last year, while continuing to teach part-time, I became a{' '}
                  <a
                    href="https://credly.com/credit/23155235"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    certified
                  </a>{' '}
                  full stack web developer after completing a rigorous UCF
                  continuing education program for computer programming/coding
                  in November. Now, I'm a part-time teaching assistant at UCF
                  and have started offering coding sessions as part of my
                  tutoring services.
                </p>

                <p>
                  If you're interested in booking a virtual coding or K-6
                  subject-area session, check out my services and book a session
                  below. If you have questions and would like to chat, please{' '}
                  <a href="mailto:hey@jenniferross.tech?subject=Scheduling a Zoom Session">
                    send me an email
                  </a>{' '}
                  .
                </p>
              </div>
              <span className="image">
                <img src={headshot} alt="Jennifer Ross headshot" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Services</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>
                  <strong>Coding Sessions</strong>
                </h3>
                <p>
                  Learn fundamentals of computer programming by making games.
                </p>

                <p className="service-description">
                  <strong>Duration:</strong> 1 hour
                </p>
                <p className="service-description">
                  <strong>Cost:</strong> $45 one student, $70 two students
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-edit"></span>
                <h3>
                  <strong>Tutoring</strong>
                </h3>
                <p>
                  All K-6 subject areas, including assistance with new online
                  curriculum.
                </p>
                <p className="service-description">
                  <strong>Duration:</strong> 1 hour
                </p>
                <p className="service-description">
                  <strong>Cost:</strong> $30
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-music"></span>
                <h3>
                  <strong>Guitar Lessons</strong>
                </h3>
                <p>
                  Learn to play your favorite songs, read music, and understand
                  music theory.
                </p>
                <p className="service-description">
                  <strong>Duration:</strong> 30 minutes
                </p>
                <p className="service-description">
                  <strong>Cost:</strong> $20
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/bookme" className="button">
                    Book Me
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Testimonials</h2>
              <p>Kind words from my students and parents.</p>
            </header>

            <p className="testimonial">
              "Two of our kids started coding once a week with Ms. Ross in May
              of 2019. They have continued to code with Jennifer once a week
              since. Ms. Ross makes learning fun! She’s introduced our kids to
              CSS, HTML, and JavaScript. We are now so much more aware of the
              impact of knowing how to code will affect their future; they are
              learning a foreign language that is globally useful. Coding is
              everywhere. We, as parents, are grateful for Ms. Ross’
              expertise/humor/kindness while teaching our children." -Parents of
              two coding students
            </p>
            <p className="testimonial">
              "I love coding because of the funny and intelligent teacher that
              educates me about coding! And because of the patterns and just the
              whole way coding works!" -Student
            </p>
            <p className="testimonial">
              "I like coding because it’s fun to learn how to make games that
              are enjoyable, but complicated." -Student
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
