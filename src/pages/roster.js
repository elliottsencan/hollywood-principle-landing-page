import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import roster from '../assets/images/roster.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>ROSTER - Hollywood Principle</title>
            <meta name="description" content="Roster of Artists signed by Hollywood principle" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Roster</h1>
                    </header>
                    <span className="image main"><img src={roster} alt="" /></span>
                    <p>We're committed to delivering personalized service to help artists grow their careers to both our signed acts and digital services customers</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic