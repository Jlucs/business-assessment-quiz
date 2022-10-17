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
              <div className="mt-3 button">
                <div className="button-spacer">
                    <Link href="http://localhost:3000/assessment-gate/quality-management/iso/20001-2018/maturity-assessment/new-assessment">
                        <a className="btn btn-grey">
                            Start assessment →		
                        </a>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home
