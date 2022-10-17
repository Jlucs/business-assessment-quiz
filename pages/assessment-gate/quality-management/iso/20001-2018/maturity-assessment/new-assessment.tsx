import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import ScoreDropdown from "../../../../../../components/Dropdown/ScoreDropdown.jsx"
import ListBox from "../../../../../../components/ListBox/ListBox.jsx"

const Home: NextPage = () => {
  return (
    <main className="">
        <div className="toolbar container-fluid">
            <div className="nav-path">
              <Link href="/assessment-gate"><a>Assessment gate</a></Link>
              <span className="spacer">/</span>
              <Link href="/assessment-gate/quality-management"><a>Quality-management</a></Link>
              <span className="spacer">/</span>
              <Link href="/assessment-gate/quality-management/iso/20001-2018"><a>ISO - 200001-2018</a></Link>
              <span className="spacer">/</span>
              General-assessment
            </div>
        </div>
        <div className="container container-fluid container-1120 padded">
            <table>
                <tbody>
                    <tr>
                        <th>Area Name</th>
                        <th>Activity</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td rowSpan={6}>Identify I&T services.</td>
                        <td>1.  Assess current I&T services and service levels to identify gaps between existing services and the business activities they support. Identify areas for improvement of existing services and service level options.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>2.  Analyze, study and estimate future demand and confirm capacity of existing I&T-enabled services.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>3.  Analyze business process activities to identify the need for new or redesigned I&T services.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>4.  Compare identified requirements to existing service components in the portfolio. If possible, package existing service components (I&T services, service level options and service packages) into new service packages to meet identified business requirements.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>5.  Regularly review the portfolio of I&T services with portfolio management and business relationship management to identify obsolete services. Agree on retirement and propose change.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>6.  Where possible, match demands to service packages and create standardized services to obtain overall efficiencies.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>Catalog I&T-enabled services.</td>
                    </tr>
                    <tr>
                        <td>1.  Publish in catalogues relevant live I&T-enabled services, service packages and service level options from the portfolio.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>2.  Continually ensure that the service components in the portfolio and the related service catalogues are complete and up to date.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>3.  Inform business relationship management of any updates to the service catalogues.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td rowSpan={6}>Define and prepare service agreements.</td>
                        
                    </tr>
                    <tr>
                        <td>1.  Analyze requirements for new or changed service agreements received from business relationship management to ensure that the requirements can be matched. Consider aspects such as service times, availability, performance, capacity, security, privacy, continuity, compliance and regulatory issues, usability, demand constraints, and data quality.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>2.  Draft customer service agreements based on the services, service packages and service level options in the relevant service catalogues.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>3.  Finalize customer service agreements with business relationship management.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>4.  Determine, agree on and document internal operational agreements to underpin the customer service agreements, if applicable.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>5.  Liaise with supplier management to ensure that appropriate commercial contracts with external service providers underpin the customer service agreements, if applicable.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td rowSpan={6}>Monitor and report service levels.</td>
                        
                    </tr>
                    <tr>
                        <td>1.  Establish and maintain measures to monitor and collect service level data.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>2.  Evaluate performance and provide regular and formal reporting of service agreement performance, including deviations from the agreed values. Distribute this report to business relationship management.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>3.  Perform regular reviews to forecast and identify trends in service level performance. Incorporate quality management practices in the service monitoring.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>4.  Provide the appropriate management information to aid performance management.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>5.  Agree on action plans and remediations for any performance issues or negative trends.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>Review service agreements and contracts.</td>
                        
                    </tr>
                    <tr>
                        <td>1.  Regularly review service agreements according to the agreed terms to ensure that they are effective and up to date. When appropriate, take into account changes in requirements, I&T-enabled services, service packages or service level options.</td>
                        <td><ListBox/></td>
                    </tr>
                    <tr>
                        <td>2.  When needed, revise the existing service agreement with the service provider. Agree on and update the internal operational agreements.</td>
                        <td><ListBox/></td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-3 button">
                <div className="button-spacer">
                    <Link href="/assessments/first-assessment">
                        <a className="btn btn-grey">
                            Submit		
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home
