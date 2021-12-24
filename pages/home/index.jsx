import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import Layout from '../../components/Layout';
import assets from '../../public/assets';
import SearchForm from '../../components/SearchForm';
import styles from './styles.module.scss';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ListBox from '../../components/ListBox/ListBox';
import constants from '../../utils/constants';
import { useSendDoczoAppLink } from '../../containers/HomeContainer';
import { getDoczoAppSchema } from '../../schemas/homeSchema';
import AlertMessage from '../../components/AlertMessage/index';
import GridIcons from '../../components/GridIcons';
import Util from '../../utils/Util';

const Home = () => {
  const router = useRouter();
  const { Specifications, TopSpecialities, FindDoctorByCity } = constants;
  const [isMoreShown, setIsMoreShown] = useState(false);
  const [
    sentGetDoczoAppMail,
    showFormStatus,
    formMessage,
    hideFormStatusMessage,
  ] = useSendDoczoAppLink();

  return (
    <>
      <Layout>
        <div className="block px-5  -mt-5 sm:mt-2">
          <div className="banner rounded-lg sm:bg-snow-lighter ml-50 sm:p-5 sm:p-10 flex bg-right-bottom relative ">
            <div className={`${styles.searchFormWrapper} z-10`}>
              <h1 className={`${styles.searchFormTitle} mb-12 text-navy-dark`}>
                Find best doctors near you.
              </h1>
              <SearchForm type="col" />
            </div>
            <img
              src={assets.topRing}
              className={`${styles.ring}`}
              alt="topring"
            />
            <img
              src={assets.middleRing}
              className={`${styles.middleRing}`}
              alt="middilering"
            />
            <img
              src={assets.bottomRing}
              className={`${styles.bottomRing}`}
              alt="middilering"
            />
            <img
              src={assets.doczoDoctor}
              className={`${styles.bannerImage} absolute z-0 hidden sm:block `}
              alt="banner"
            />
          </div>
        </div>
        <section className="specialities">
          <div className="container px-5 mx-auto lg:px-24 mt-32">
            <h3
              className={`${styles.specialities__heading} specialities__heading text-center font-bold uppercase text-2xl text-navy-dark mb-10`}
            >
              Top Specialities
            </h3>
            <div className="grid grid-row grid-cols-12  gap-4  ">
            {TopSpecialities.default.map(item => {
               return <>
               <div className="col-span-4 sm:col-span-3">
            <GridIcons
            
                  key={item.route}
                  iconSrc={assets[item.imageSrc]}
                  title={item.title}
                  route={item.route}
                />
            </div>
               </>
              })}
            </div>
            <div className="grid grid-row grid-cols-12  gap-4  ">
            {TopSpecialities.default.map(item => {
               return <>
               <div className="col-span-4 sm:col-span-3">
               {isMoreShown &&
                TopSpecialities.showMore.map(item => (
                  <GridIcons
                    key={item.route}
                    iconSrc={assets[item.imageSrc]}
                    title={item.title}
                    route={item.route}
                  />
                ))}
              
            </div>
           
           
                  
            
               </>
              })}
            </div>
            {/* <div className="flex flex-wrap mb-4">
              {TopSpecialities.default.map(item => (
                <GridIcons
                  key={item.route}
                  iconSrc={assets[item.imageSrc]}
                  title={item.title}
                  route={item.route}
                />
              ))}

              {isMoreShown &&
                TopSpecialities.showMore.map(item => (
                  <GridIcons
                    key={item.route}
                    iconSrc={assets[item.imageSrc]}
                    title={item.title}
                    route={item.route}
                  />
                ))}
            </div> */}
            <Button
              label={isMoreShown ? `Show Less` : 'Show More'}
              icon={isMoreShown ? 'blueUpIcon' : 'blueDownIcon'}
              iconAfter
              iconClassName="inline-block ml-2"
              disablePresetTheme
              className="border-b-2 border-blue text-blue font-medium pb-1 block mx-auto "
              onClick={() => {
                setIsMoreShown(prevState => !prevState);
              }}
            />
          </div>
        </section>
        <section className="online_video_consultation mt-32 mb-24">
          <div className="container px-5 mx-auto lg:px-24">
            <div
              className={`${styles.online_video_consultation__wrapper} p-10`}
            >
              <div className="flex flex-wrap z-10">
                <div className="w-full lg:w-1/2 sm:pr-8">
                  <h4 className="font-bold  text-3xl sm:text-4xl text-navy-dark mb-2 ">
                    Online video consultation
                  </h4>
                  <p className="leading-loose mb-10 hidden sm:block text-sm sm:text-base ">
                    Want to get a second opinion? No need to travel to meet the
                    best doctors anymore. Doczo offers a secure and
                    user-friendly platform for online video consultations with
                    the best-rated doctors all over the world.
                  </p>
                  <Button
                    label="Coming Soon..."
                    disablePresetTheme
                    className={`${styles.online_video_consultation__button}  hidden sm:block  py-3 px-20 rounded-md font-bold  `}
                  />
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <img
                    src={assets.onlineVideoConsultation}
                    alt="doczo-online-video-consultation"
                  />
                </div>
                <p className="leading-loose my-8 block sm:hidden text-sm sm:text-base ">
                    Want to get a second opinion? No need to travel to meet the
                    best doctors anymore. Doczo offers a secure and
                    user-friendly platform for online video consultations with
                    the best-rated doctors all over the world.
                  </p>
                  <Button
                    label="Coming Soon..."
                    disablePresetTheme
                    className={`${styles.online_video_consultation__button}  block sm:hidden text-xs  py-3 px-20 rounded-md font-bold  `}
                  />
              </div>
            </div>
          </div>
        </section>
        <section className="doczo_app mb-10 sm:mb-32">
          <div className="container px-5 mx-auto lg:px-24">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <img
                  src={assets.doczoMobile}
                  alt="doczo-app"
                  className="w-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div>
                  <h4 className="font-bold text-4xl mb-5 text-navy">
                    Get the Doczo app
                  </h4>
                  <ul className="mb-10">
                    <li className="mb-4 text-navy-default font-medium">
                      - Book doctor right from phone
                    </li>
                    <li className="mb-4 text-navy-default font-medium">
                      - View doctors as per your requirement and location
                    </li>
                    <li className="mb-4 text-navy-default font-medium">
                      - Book the best doctor based on reviews
                    </li>
                  </ul>

                  <Formik
                    initialValues={{
                      phone: '',
                    }}
                    validationSchema={getDoczoAppSchema}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                      // Message and name fields are hardcoded
                      values.message = 'GET DOCZO APP';
                      values.name = 'APP REQUEST';
                      sentGetDoczoAppMail(values);
                      setSubmitting(false);
                      resetForm();
                    }}
                  >
                    {({ isValid, isSubmitting }) => {
                      return (
                        <>
                          <Form>
                          {/*...............................  */}
                          <div className="grid grid-row grid-cols-3    ">
                          <div className="col-span-3 sm:col-span-2">
                          <div className=" wrapper relative">
                                <div className="flag absolute z-10 pt-3 pl-4 flex">
                                  <img src={assets.india} alt="india flag" />{' '}
                                  <span
                                    className="text-navy-default font-medium pl-2 border-r pr-2"
                                    style={{ borderColor: '#BDC2C9' }}
                                  >
                                    +91
                                  </span>
                                </div>
                                <Field
                                  autocomplete="off"
                                  name="phone"
                                  withIcon={false}
                                  component={Input}
                                  placeholder="Enter mobile number"
                                  inputType="text"
                                  className="pl-24 bg-snow-lighter focus:outline-none rounded-lg py-3 px-4 block w-full mb-5 relative z-0"
                                />
                              </div>
                          </div>
                          <div className="col-span-3 sm:col-span-1">
                          <Button
                                  disablePresetTheme
                                  label="Get the app"
                                  className="btn py-3 bg-blue w-full rounded-md sm:ml-3 text-white font-medium"
                                  type="submit"
                                  disabled={isSubmitting || !isValid}
                                />
                          </div>
                          </div>
                          {/*...........................  */}
                           
                          </Form>
                          {showFormStatus && formMessage && (
                            <AlertMessage
                              type={formMessage.type}
                              message={formMessage.message}
                              onClick={() => hideFormStatusMessage()}
                            />
                          )}
                        </>
                      );
                    }}
                  </Formik>

                  <div className="flex mt-4">
                    <img
                      src={assets.googlePlay}
                      alt=""
                      className="h-auto"
                      style={{ width: '122px' }}
                    />
                    <img
                      src={assets.appStore}
                      alt=""
                      className="ml-4 h-auto"
                      style={{ width: '118px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`doczo_practice ${styles.arehospitalbg}  mb-10 sm:mb-40`}>
          <div className="container px-5 lg:px-24 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className='hidden sm:block' >
                  <h4 className="font-bold  text-3xl sm:text-4xl mb-5 text-navy sm:text-center lg:text-left">
                    Are you a doctor or hospital ?
                  </h4>
                  <ul className="mb-10 sm:text-center lg:text-left">
                    <li className="mb-4 text-navy-default font-medium">
                      - List your practice with us to reach more patients
                    </li>
                    <li className="mb-4 text-navy-default font-medium">
                      - Build and strengthen your online reputation
                    </li>
                    <li className="mb-4 text-navy-default font-medium">
                      - Deliver best in class experience to patients
                    </li>
                  </ul>
                  <div className="flex flex-wrap w-full">
                    <Button
                      onClick={() => {
                        Util.scrollToTop();
                        router.push('/contact');
                      }}
                      width="14rem"
                      label="List your practice"
                      className="mx-auto lg:ml-0"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 sm:mt-16 lg:mt-0">
                <img
                  src={assets.doctos_or_hospital}
                  alt="doczo-app"
                  className="w-auto mx-auto lg:ml-0"
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-4">
                <div className='block sm:hidden' >
                  <h4 className="font-bold  text-3xl sm:text-4xl mb-5 text-navy sm:text-center lg:text-left">
                    Are you a doctor or hospital ?
                  </h4>
                  <ul className="mb-10 sm:text-center lg:text-left">
                    <li className="mb-4 text-navy-default font-medium">
                      - List your practice with us to reach more patients
                    </li>
                    <li className="mb-4 text-navy-default font-medium">
                      - Build and strengthen your online reputation
                    </li>
                    <li className="mb-4 text-navy-default font-medium">
                      - Deliver best in class experience to patients
                    </li>
                  </ul>
                  <div className="flex flex-wrap w-full">
                    <Button
                      onClick={() => {
                        Util.scrollToTop();
                        router.push('/contact');
                      }}
                      
                      label="List your practice"
                      className="mx-auto w-full  lg:ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <section className="partners mb-40">
          <h3
            className={`${styles.specialities__heading} specialities__heading text-center font-bold uppercase text-2xl text-navy-dark mb-20`}
          >
            Partners that trust us
          </h3>
          <div className="container px-5 mx-auto lg:px-24">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-16 lg:mb-0">
                <img
                  src={assets.client1}
                  alt="docozo client"
                  className="block mx-auto"
                />{' '}
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-16 lg:mb-0">
                <img
                  src={assets.client2}
                  alt="docozo client"
                  className="block mx-auto"
                />{' '}
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-16 lg:mb-0">
                <img
                  src={assets.client3}
                  alt="docozo client"
                  className="block mx-auto"
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
                <img
                  src={assets.client4}
                  alt="docozo client"
                  className="block mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        */}
        <section className="doctors_by_city  mb-20">
          <div className="container px-5 lg:px-24 mx-auto">
            <h3
              className={`${styles.specialities__heading} specialities__heading text-center font-bold uppercase text-2xl text-navy-dark mb-4  sm:mb-20`}
            >
              Find Doctors by city
            </h3>
            <div className="flex flex-wrap justify-center">
              {FindDoctorByCity.map(loc => {
                return (
                  <div key={loc.slug} className="w-full sm:w-1/2 md:w-1/3">
                    <ListBox
                      locationLabel={loc.label}
                      locationRoute={loc.slug}
                      dropList={Specifications}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
