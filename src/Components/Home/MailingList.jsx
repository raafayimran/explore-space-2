import React, { Component } from "react";
import "../../Styles/Home/MailingList.css";

class MailingList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={`mailinglist mailinglist-${this.props.style}`}>
        <div
          className={`mailinglist-container mailinglist-container-${this.props.style}`}
        >
          <h1 className="mailinglist-title">Subscribe to our mailing list!</h1>
          <p className="mailinglist-text">
            Satisfy your space curiosity by joining our mailing list to receive
            regular updates to changes that are made to the site. New
            interactives, new features, all will be updated in the mailing list!
          </p>
          <form action="" className="mailinglist-form">
            <div className="mailinglist-names">
              <div className="mailinglist-fname">
                <label className="fname-label" htmlFor="fname">
                  First name
                </label>
                <input
                  className={`fname input-${this.props.style}`}
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="First name"
                />
              </div>
              <div className="mailinglist-lname">
                <label className="lname-label" htmlFor="lname">
                  Last name
                </label>
                <input
                  className={`lname input-${this.props.style}`}
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mailinglist-email">
              <div className="mailinglist-email-elements">
                <label className="email-label" htmlFor="email">
                  Email address
                </label>
                <div className="mailinglist-email-inputs">
                  <input
                    className={`email input-${this.props.style}`}
                    type="text"
                    id="email"
                    placeholder="Email Address"
                  />
                  <input
                    className={`mailinglist-subscribe mailinglist-subscribe-${this.props.style}`}
                    type="submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default MailingList;
