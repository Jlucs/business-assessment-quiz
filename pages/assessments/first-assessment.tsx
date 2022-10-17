import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'


import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  export const data = {
    labels: ['label', 'label', 'label', 'label', 'label'],
    datasets: [
      {
        label: 'Maturity',
        data: [2, 2, 2, 2, 2],
        borderColor: '#1b78e7',
        borderWidth: 1,
      },
      {
        label: 'Target',
        data: [3, 3, 3, 3, 3],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  export const options = {
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 5
        }
    }
  };
  


const Home: NextPage = () => {
  return (
    <main className="assessment">
        <div className="assessment-header">
            <div className="container container-fluid">
                <div className="assessment-toolbar d-flex flex-wrap flex-justify-end">
                    <div className="d-flex">
                        <span className="assessment-title">first-assessment</span>
                        <span className="assessment-type">ISO - 200001-2018 / General</span>
                    </div>
                </div>
                <div className="assessment-tabs">
                    <ul>
                        <li>
                            <Link href="">
                                <a>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                    </svg>
                                    <span>Overview</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                    </svg>
                                    <span>tab 2</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                    </svg>
                                    <span>tab 3</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                    </svg>
                                    <span>tab 4</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container container-fluid container-1480 mt-5 assessment-content">
            <div className="score">
                <span>Score : 2.0</span>
                <span>Managed</span>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <Radar data={data} options={options} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="header-title">Gaps</div>
                        </div>
                        <div className="card-body">
                            <ul className="ul-1">
                                <li>
                                    Continuous Trend Analysis
                                </li>
                                <li>
                                    Repeated incidents are not identified 
                                </li>
                                <li>
                                    Knowledge articles 
                                </li>
                                <li>
                                    Service Improvement Initiatives
                                </li>
                                <li>
                                    Reports are generated manually (Meaningful  dashboard for management ) 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="header-title">Future state for the next level ( 4 )</div>
                        </div>
                        <div className="card-body">
                            <ul className="ul-1">
                                <li>
                                    Focus service-level monitoring on areas where there is risk of business process failure.
                                </li>
                                <li>
                                    Utilize SLA’s Documents to cover all the orgnization mandaites 
                                </li>
                                <li>
                                    Predictive trend analysis to be included on the SLA Review Meeting  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="header-title">Improvement Task for Target State (Level 4)</div>
                        </div>
                        <div className="card-body">
                            <ul className="ul-1">
                                <p>Formalize and implement release, service-level, capacity and performance management consistently across the entire organization, including partner integration.</p>
                                <p>Ensure that all the processes implemented are governed using  metrics which demonstrate achievement of process objectives.  As a minimum: incident, request, problem, change configuration, service level, capacity and performance management processes.</p>
                                <p>Implement business service management (BSM) processes and tools.</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="header-title">Recommended Measurement</div>
                        </div>
                        <div className="card-body">
                            <ul className="ul-1">
                                <p>(S) Percentage of stakeholders subject to documented service level management policy including scope, purpose, controls and exception management</p>
                                <p>(S) Percentage of stakeholders subject to documented service level management process including objectives, process workflow, inputs, outputs, roles and responsibilities, metrics and partner integration</p>
                                <p>(P) Percentage of IT services with agreed SLAs</p>
                                <p>(P) Percentage of IT services with agreed OLAs</p>
                                <p>(P) Benefits and costs of corrective performance actions in progress and implemented for service level management.</p>
                                <p>(S) Monthly reports for service level management highlighting improvements and targets missed leading to a corrective action plan</p>
                                <p>(S) Percentage of planned corrective action plans implemented for service level management</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home
