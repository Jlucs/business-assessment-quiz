import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Dropdown from "../../../../components/Dropdown/Dropdown.jsx"

const Home: NextPage = () => {
  return (
    <main className="">
        <div className="assessment-header">
            <div className="container container-fluid d-flex justify-content-between align-items-center">
                <div className="url">
                    Quality-Management / ISO
                </div>
                <div></div>
            </div>
        </div>
        <div className="container container-fluid container-1120 mt-5">
            <div className="d-flex flex-auto flex-justify-start">
                <div className="select-container">
                    <Dropdown/>
                </div>
                <div className="select-version">ISO - 20001-2018</div>
            </div>
            <div className="box mt-5">
                <div className="box-body">
                    <div className="container container-fluid container-768">
                        <div className="">
                            content
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 button-">
                <div className="button-spacer">
                    <Link href="http://localhost:3000/assessment-gate/quality-management/iso/20001-2018/maturity-assessment">
                        <a className="btn btn-blue">
                            General ISO 20001 Maturity		
                        </a>
                    </Link>
                </div>
                <div className="button-spacer">
                    <Link href="">
                        <a className="btn btn-blue">
                            Specific Processes Maturity 		
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home
