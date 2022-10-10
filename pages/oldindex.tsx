import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main>
      <div className="container container-fluid mt-5">
        <div className="page-title">
          <div className=""></div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="mb-2">Start a new assessment</h5>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link href="">
                  <a className="">
                    Create a new assessment
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="mb-2">Benchmarks</h5>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link href="">
                  <a className="">
                    Create a new benchmark
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="mb-2">Documentation</h5>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link href="">
                  <a className="">
                    View Documentation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <h5 className="p-3">Recent assessments</h5>
                <div className="widget-1">
                  <div className="item">
                    <div className="container lg-row">
                      <div>
                        <Link href="">
                          <a className="fw-600 color-default">
                            ISO-20001-2018-First-assessment
                          </a>
                        </Link>
                      </div>
                      <div>
                        <span className="bullet bullet-dot me-2 h-10px w-10px bg-success"></span>
                        <span className="fw-400">Completed</span>
                      </div>
                      <div>1d ago</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="container lg-row">
                      <div>
                        <Link href="">
                          <a className="fw-600 color-default">
                          ISO-27001-Iso-checkup
                          </a>
                        </Link>
                      </div>
                      <div>
                        <span className="bullet bullet-dot me-2 h-10px w-10px bg-success"></span>
                        <span className="fw-400">Completed</span>
                      </div>
                      <div>4d ago</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="container lg-row">
                      <div>
                        <Link href="">
                          <a className="fw-600 color-default">
                          6SIGMA-x-test-assessment
                          </a>
                        </Link>
                      </div>
                      <div>
                        <span className="bullet bullet-dot me-2 h-10px w-10px bg-warning"></span>
                        <span className="fw-400">In progress</span>
                      </div>
                      <div>7d ago</div>
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex flex-stack">
                  <div className="d-flex align-items-center fs-5 fw-bold">
                    <Link href="">
                      <a className="">ISO/20001-2018/First-assessment</a>
                    </Link>
                    <span className="badge badge-light-success fs-7 ms-2">Completed</span>
                  </div>
                </div>
                <div className="separator separator-dashed mx-0"></div>
                <div className="d-flex flex-stack">
                  <Link href="">
                    <a className="">ISO/9001-2015/Test-assessment</a>
                  </Link>
                </div>
                <div className="separator separator-dashed mx-0"></div>
                <div className="d-flex flex-stack">
                  <Link href="">
                    <a className="">ISO/27001/Iso-checkup</a>
                  </Link>
                </div>
                <div className="separator separator-dashed mx-0"></div>
                <div className="d-flex flex-stack">
                  <Link href="">
                    <a className="">6SIGMA/x/...</a>
                  </Link>
                </div>
                <div className="separator separator-dashed mx-0"></div>
                <div className="d-flex flex-stack">
                  <Link href="">
                    <a className="">PDCA/x/...</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-fluid container-1120 mt-5">
        <div className="container-inner container-840">
            <div className="row mb-5">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="mb-2">Start a new assessment</h2>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link href="">
                            <a className="">
                                Create a new assessment
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="mb-2">Start a new assessment</h2>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Link href="">
                            <a className="">
                                Create a new assessment
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Home
