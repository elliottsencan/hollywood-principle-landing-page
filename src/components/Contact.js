import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form action="https://hollywoodprinciple.us9.list-manage.com/subscribe/post?u=61143e36dd2b444f1dd45ad6b&amp;id=55c9d07ae7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div className="field half first">
                        <label htmlFor="mce-NAME">Name</label>
                        <input type="text"  name="NAME" class="" id="mce-NAME" />
                    </div>
                    <div className="field half">
                        <label htmlFor="mce-EMAIL">Email</label>
                        <input type="email"  name="EMAIL" class="required email" id="mce-EMAIL"/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea rows="6"  name="MESSAGE" class="required" id="mce-MESSAGE"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">hollywoodprinciple@gmail.com</a>
                    </div>
                </section>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(619) 992 1510</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>738 Wilbur Avenue<br />
                        San Diego, CA, 92109<br />
                        United States of America</span>
                    </div>
                </section> */}
            </section>
        </div>
    </section>
)

export default Contact
