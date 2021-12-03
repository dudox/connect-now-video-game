import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'

class Contact extends Component {
  render() {
    return (
      <section className="row mt-5 justify-content-center align-items-center">
        <div className="col-md-8">
          <h1>GET IN TOUCH</h1>
          <p>
            T rysail transom furl Sea Legs Scallywag jack Ketch Chandler mizzenmost reef sail
            skysail. Trysail transom furl Sea Legs Scallywag jack Ketch Chandler mizzenmost reef
            sail skysail.
          </p>
          <div className="card p-3">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <h5 className="mb-4">Contact Form</h5>
                </div>
                <div className="col-md-6">
                  <label>
                    Name <i className="asterik">*</i>{' '}
                  </label>
                  <input
                    ref={(el) => (this.name = el)}
                    type="text"
                    name="name"
                    className="pl-2 pr-2 w-100 form-control mt-1"
                  />
                </div>
                <div className="col-md-6">
                  <label>
                    Email Address <i className="asterik">*</i>{' '}
                  </label>
                  <input
                    ref={(el) => (this.email = el)}
                    type="text"
                    name="email"
                    className="pl-2 pr-2 w-100 form-control mt-1"
                  />
                </div>
                <div className="col-md-12">
                  <label>
                    Message <i className="asterik">*</i>{' '}
                  </label>
                  <textarea
                    ref={(el) => (this.message = el)}
                    rows="4"
                    name="message"
                    className="pl-2 pr-2 w-100 form-control mt-1"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button className="button">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
