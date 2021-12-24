/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import assets from '../../public/assets';

const Navbar = () => {
  const [isMobileNavShown, setIsMobileNavShown] = useState(true);
  const mobileNavHandler = () => {
    setIsMobileNavShown(prevState => !prevState);
  };

  return (
    <>
      <div className="navbarWrapper fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-5 lg:px-24">
          <nav className="navbar flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Link href="/">
                <a>
                  <img
                    src={assets.logoFull}
                    alt="Doczo"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </div>
            <div className="block lg:hidden">
              <MenuOutlined className="text-3xl" onClick={mobileNavHandler} />
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
              <div
                className={`navbarLinks text-sm lg:flex-grow text-right ${
                  isMobileNavShown ? `hideMobileNav` : `showMobileNav`
                }`}
              >
                {/* <a
                  href="#responsive-header"
                  className="text-navy-default text-lg font-medium block mt-4 lg:inline-block lg:mt-0 mr-4"
                >
                  List your practice
                </a> */}
                <Link href="/contact">
                  <a className="text-navy-default text-lg font-medium block mt-4 lg:inline-block lg:mt-0 mr-4 cursor-pointer">
                    Contact Us
                  </a>
                </Link>
                <a href="/blog" target="_blank" className="text-navy-default text-lg font-medium block mt-4 lg:inline-block lg:mt-0 mr-4 cursor-pointer">
                    Blog
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="dupNav" />
      <style jsx>{`
        .navbarWrapper {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: saturate(180%) blur(20px);
        }
        .dupNav {
          height: 87px;
        }
        .hideMobileNav {
          display: none;
        }
        .showMobileNav {
          display: block;
        }
        @media screen and (max-width: 1024px) {
          .navbarLinks {
            text-align: left;
          }
        }
        @media screen and (min-width: 1024px) {
          .hideMobileNav {
            display: block;
          }
        }
      `}</style>
    </>
  );
};
export default Navbar;
