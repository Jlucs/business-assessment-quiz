import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Dropdown from "../../../../../components/Dropdown/Dropdown.jsx"

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
        <div className="select-page">
          <div className="sidebar">
            <ul>
              <li className="active ">
                <a>
                  <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M-0.000976562 0.00390625H11.4132L17.999 6.58969V22.0039H-0.000976562V0.00390625ZM1.99902 2.00391V20.0039H15.999V8.00391H9.99902V2.00391H1.99902ZM11.999 3.41812L14.5848 6.00391H11.999V3.41812Z" fill="var(--color-icon-primary, rgba(0, 0, 0, 0.8))"></path></svg>All
                </a>
              </li>
              <li>
                <a>
                <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M-0.000976562 0.00390625H11.4132L17.999 6.58969V22.0039H-0.000976562V0.00390625ZM1.99902 2.00391V20.0039H15.999V8.00391H9.99902V2.00391H1.99902ZM11.999 3.41812L14.5848 6.00391H11.999V3.41812Z" fill="var(--color-icon-primary, rgba(0, 0, 0, 0.8))"></path></svg>Resolution
                </a>
              </li>
              <li>
                <a>
                <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M-0.000976562 0.00390625H11.4132L17.999 6.58969V22.0039H-0.000976562V0.00390625ZM1.99902 2.00391V20.0039H15.999V8.00391H9.99902V2.00391H1.99902ZM11.999 3.41812L14.5848 6.00391H11.999V3.41812Z" fill="var(--color-icon-primary, rgba(0, 0, 0, 0.8))"></path></svg>Control
                </a>
              </li>
              <li>
                <a>
                <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M-0.000976562 0.00390625H11.4132L17.999 6.58969V22.0039H-0.000976562V0.00390625ZM1.99902 2.00391V20.0039H15.999V8.00391H9.99902V2.00391H1.99902ZM11.999 3.41812L14.5848 6.00391H11.999V3.41812Z" fill="var(--color-icon-primary, rgba(0, 0, 0, 0.8))"></path></svg>Service Delivery
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="container container-fluid container-1120">
              <div className="form-group d-flex flex-column ">
                <dt className="input-label">
                  <label className="rename-field">
                    Assessment name
                  </label>
                </dt>
                <dd>
                  <input type="text" name="new_name" defaultValue="" className="form-control short " id="rename-field"  autoCapitalize="off" autoComplete="off" spellCheck="false"/>
                </dd>
              </div>
              <div className="box mt-3">
                <div className="box-body">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home
