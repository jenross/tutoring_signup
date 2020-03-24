import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Booking Policy</h2>
      <p>
        Payment for each session must be submitted via PayPal to book. If
        you are unable to attend a scheduled session, please reschedule or
        cancel as soon as possible. A full refund will be issued if
        cancellation is submitted two hours prior to the start of the scheduled
        session. Should I need to cancel a scheduled session for any reason, I
        will issue a refund immediately. If we encounter technical difficulties
        and are unable to complete a session, a full or partial refund will be
        issued depending on how long we were able to work prior to the
        disruption. 
      </p>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Email:</dt>
        <dd>
          <a href="mailto:hey@jenniferross.tech?subject=Scheduling a Zoom Session">
            hey@jenniferross.tech
          </a>
        </dd>
      </dl>
      <dl className="alt">
        <dt>Portfolio:</dt>
        <dd>
          <a
            href="https://jenniferross.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jenniferross.tech
          </a>
        </dd>
      </dl>
    </section>
    <p className="copyright">
      &copy; Jennifer Ross. Design:{' '}
      <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">
        HTML5 UP
      </a>
      .
    </p>
  </footer>
)

export default Footer
