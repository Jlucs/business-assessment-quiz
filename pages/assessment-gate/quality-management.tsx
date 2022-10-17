import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'

const Home: NextPage = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("aside-enabled");
        return () => {
            body?.classList.remove("aside-enabled");
        }
    });
  return (
    <main className="">
        <div className="toolbar container-fluid">
            <div className="nav-path"><Link href="/assessment-gate"><a>Assessment Gate</a></Link><span className="spacer">-</span> Quality management</div>
        </div>
        <div className="new-action-topbar container-fluid">
            <Link href="/assessment-gate/quality-management/iso/20001-2018">
                <a>
                    <div className="action-start-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="action-text">
                    ISO	
                    </div>
                    <div className="action-end-icon">
                        <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
                        </svg>
                    </div>
                </a>
            </Link>
            <Link href="/assessment-gate/quality-management">
                <a>
                    <div className="action-start-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="action-text">
                    6SIGMA	
                    </div>
                    <div className="action-end-icon">
                        <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
                        </svg>
                    </div>
                </a>
            </Link>
            <Link href="">
                <a>
                    <div className="action-start-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="action-text">
                    PDCA	
                    </div>
                    <div className="action-end-icon">
                        <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
                        </svg>
                    </div>
                </a>
            </Link>
        </div>
    </main>
  )
}

export default Home
