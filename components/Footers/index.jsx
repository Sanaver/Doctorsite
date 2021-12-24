import React from 'react';
import Link from 'next/link';
import assets from '../../public/assets';

const Footers = () => {
  return (
    <>
      <footer className="pr-3 pl-3 mb-3">
        <div className="footer__wrapper bg-navy pt-10 px-4 md:px-24">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-10">
              <h3 className="font-bold text-white text-lg mb-5">Doczo</h3>
              <ul>
                <li className="text-snow-lighter mb-3 cursor-pointer">Home</li>
                {/* <li className="text-snow-lighter mb-3 cursor-pointer">About</li> */}
                {/* <li className="text-snow-lighter mb-3 cursor-pointer">
                  <Link href="/contact">Contact Us</Link>
                </li> */}
                <li className="text-snow-lighter mb-3 cursor-pointer">
                  {/* <Link href="/blog" >Blog</Link> */}
                  <a href="/blog" target="_blank">Blog</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-10">
              <h3 className="font-bold text-white text-lg mb-5">
                For patients
              </h3>
              <ul>
                <li className="text-snow-lighter mb-3 cursor-pointer">
                  Search for doctors
                </li>
                <li className="text-snow-lighter mb-3 cursor-pointer">
                  Search for hospitals
                </li>
                {/* <li className="text-snow-lighter mb-3 cursor-pointer">
                  Book diagnostic tests
                </li>
                <li className="text-snow-lighter mb-3 cursor-pointer">Help</li> */}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-10">
              <h3 className="font-bold text-white text-lg mb-5">
                For Doctors/Hospitals
              </h3>
              <ul>
                <li className="text-snow-lighter mb-3 cursor-pointer">
                  <Link href="/contact">
                    <a>List your practice</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
              <h3 className="font-bold text-white text-lg mb-5">
                Get the Doczo App
              </h3>
              <ul>
                <li className="text-snow-lighter mb-3">
                  <img
                    src={assets.googlePlay}
                    alt=""
                    className="h-auto"
                    style={{ width: '122px' }}
                  />
                </li>
                <li className="text-snow-lighter mb-3">
                  <img
                    src={assets.appStore}
                    alt=""
                    className="h-auto"
                    style={{ width: '122px' }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__details flex flex-wrap text-white mt-10">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={assets.callnowBlue}
                alt="Call"
                className="inline-block mr-3"
              />
              <span>830-198-0000</span>
            </div>
            <div className="w-full md:w-1/2 uppercase flex justify-start md:justify-end pb-8">
              <p className="mr-5">Follow us</p>
              <ul>
                <li className="mr-5 inline-block cursor-pointer">
                  <img src={assets.instagram} alt="" />
                </li>
                <li className="mr-5 inline-block cursor-pointer">
                  <img src={assets.facebook} alt="" />
                </li>
                <li className="mr-5 inline-block cursor-pointer">
                  <img src={assets.linkedin} alt="" />
                </li>
                <li className="mr-5 inline-block cursor-pointer">
                  <img src={assets.twitter} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center footer__ceredits mt-3 pb-4">
            Copyright {new Date().getFullYear()}, Doczo Private Limited. All
            rights reserved.
          </p>
        </div>
      </footer>
      <style jsx>{`
        footer ul li,
        .footer__ceredits {
          color: #8896a6;
        }
        footer ul li:hover,
        .footer__ceredits:hover {
          color: white;
        }
        .footer__wrapper {
          border-radius: 20px;
        }
        .footer__details {
          border-bottom: 1px solid #3a5670;
        }
      `}</style>
    </>
  );
};
export default Footers;
