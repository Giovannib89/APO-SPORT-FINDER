import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

import './modalPrivacyData.scss';

export default function ModalPrivacyData({ onClickClosePrivacyData }) {
  const handleOnClickClosePrivacyData = () => {
    // console.log('click');
    onClickClosePrivacyData();
  };
  return (
    <div className="modalPrivacyData">
      <div className="modalPrivacyData__modal">
        <button
          type="submit"
          className="modalPrivacyData__modal__close"
          onClick={handleOnClickClosePrivacyData}
        >
          <IoIosCloseCircleOutline className="modalPrivacyData__modal__close__circle" />
        </button>
        <h1 className="modalPrivacyData__modal__title">Privacy and Data</h1>
        <div className="modalPrivacyData__modal__container">
          <h2 className="modalPrivacyData__modal__container__h2">
            Privacy Policy
          </h2>
          <p className="modalPrivacyData__modal__container__text">
            Your privacy is important to us. It is Sport Finder's policy to
            respect your privacy and comply with any applicable law and
            regulation regarding any personal information we may collect about
            you, including across our website,{' '}
            <a className="modalPrivacyData__container__text__a" href="">
              https://sportfinder.fr
            </a>{' '}
            , and other sites we own and operate.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            This policy is effective as of 18 August 2021 and was last updated
            on 18 August 2021.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Information We Collect
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Information we collect includes both information you knowingly and
            actively provide us when using or participating in any of our
            services and promotions, and any information automatically sent by
            your devices in the course of accessing our products and services.
          </p>
          <strong className="modalPrivacyData__modal__container__strong">
            Log Data
          </strong>
          <p className="modalPrivacyData__modal__container__text">
            When you visit our website, our servers may automatically log the
            standard data provided by your web browser. It may include your
            device’s Internet Protocol (IP) address, your browser type and
            version, the pages you visit, the time and date of your visit, the
            time spent on each page, other details about your visit, and
            technical details that occur in conjunction with any errors you may
            encounter.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Please be aware that while this information may not be personally
            identifying by itself, it may be possible to combine it with other
            data to personally identify individual persons.
          </p>
          <strong className="modalPrivacyData__modal__container__strong">
            Personal Information
          </strong>
          <p className="modalPrivacyData__modal__container__text">
            We may ask for personal information which may include one or more of
            the following:
          </p>
          <ul className="modalPrivacyData__modal__container__list">
            <li>Name</li>
            <li>Email</li>
          </ul>
          <strong className="modalPrivacyData__modal__container__strong">
            Legitimate Reasons for Processing Your Personal Information
          </strong>
          <p className="modalPrivacyData__modal__container__text">
            We only collect and use your personal information when we have a
            legitimate reason for doing so. In which instance, we only collect
            personal information that is reasonably necessary to provide our
            services to you.
          </p>
          <strong className="modalPrivacyData__modal__container__strong">
            Collection and Use of Information
          </strong>
          <p className="modalPrivacyData__modal__container__text">
            We may collect personal information from you when you do any of the
            following on our website:
          </p>
          <ul className="modalPrivacyData__modal__container__list">
            <li>Use a mobile device or web browser to access our content</li>
            <li>
              Contact us via email, social media, or on any similar technologies
            </li>
            <li>When you mention us on social media</li>
          </ul>
          <p className="modalPrivacyData__modal__container__text">
            We may collect, hold, use, and disclose information for the
            following purposes, and personal information will not be further
            processed in a manner that is incompatible with these purposes:
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Please be aware that we may combine information we collect about you
            with general information or research data we receive from other
            trusted sources.
          </p>
          <strong className="modalPrivacyData__modal__container__strong">
            Security of Your Personal Information
          </strong>
          <p className="modalPrivacyData__modal__container__text">
            When we collect and process personal information, and while we
            retain this information, we will protect it within commercially
            acceptable means to prevent loss and theft, as well as unauthorized
            access, disclosure, copying, use, or modification.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Although we will do our best to protect the personal information you
            provide to us, we advise that no method of electronic transmission
            or storage is 100% secure, and no one can guarantee absolute data
            security. We will comply with laws applicable to us in respect of
            any data breach.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            You are responsible for selecting any password and its overall
            security strength, ensuring the security of your own information
            within the bounds of our services.
          </p>
          <strong className="modalPrivacyData__modal__container__strong">
            How Long We Keep Your Personal Information
          </strong>
          <p className="modalPrivacyData__modal__container__text">
            We keep your personal information only for as long as we need to.
            This time period may depend on what we are using your information
            for, in accordance with this privacy policy. If your personal
            information is no longer required, we will delete it or make it
            anonymous by removing all details that identify you.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            However, if necessary, we may retain your personal information for
            our compliance with a legal, accounting, or reporting obligation or
            for archiving purposes in the public interest, scientific, or
            historical research purposes or statistical purposes.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Children’s Privacy
          </p>
          <p className="modalPrivacyData__modal__container__text">
            We do not aim any of our products or services directly at children
            under the age of 13, and we do not knowingly collect personal
            information about children under 13.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            International Transfers of Personal Information
          </p>
          <p className="modalPrivacyData__modal__container__text">
            The personal information we collect is stored and/or processed where
            we or our partners, affiliates, and third-party providers maintain
            facilities. Please be aware that the locations to which we store,
            process, or transfer your personal information may not have the same
            data protection laws as the country in which you initially provided
            the information. If we transfer your personal information to third
            parties in other countries: (i) we will perform those transfers in
            accordance with the requirements of applicable law; and (ii) we will
            protect the transferred personal information in accordance with this
            privacy policy.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Your Rights and Controlling Your Personal Information
          </p>
          <p className="modalPrivacyData__modal__container__text">
            You always retain the right to withhold personal information from
            us, with the understanding that your experience of our website may
            be affected. We will not discriminate against you for exercising any
            of your rights over your personal information. If you do provide us
            with personal information you understand that we will collect, hold,
            use and disclose it in accordance with this privacy policy. You
            retain the right to request details of any personal information we
            hold about you.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            If we receive personal information about you from a third party, we
            will protect it as set out in this privacy policy. If you are a
            third party providing personal information about somebody else, you
            represent and warrant that you have such person’s consent to provide
            the personal information to us.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time.
            We will provide you with the ability to unsubscribe from our
            email-database or opt out of communications. Please be aware we may
            need to request specific information from you to help us confirm
            your identity.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            If you believe that any information we hold about you is inaccurate,
            out of date, incomplete, irrelevant, or misleading, please contact
            us using the details provided in this privacy policy. We will take
            reasonable steps to correct any information found to be inaccurate,
            incomplete, misleading, or out of date.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            If you believe that we have breached a relevant data protection law
            and wish to make a complaint, please contact us using the details
            below and provide us with full details of the alleged breach. We
            will promptly investigate your complaint and respond to you, in
            writing, setting out the outcome of our investigation and the steps
            we will take to deal with your complaint. You also have the right to
            contact a regulatory body or data protection authority in relation
            to your complaint.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Use of Cookies
          </p>
          <p className="modalPrivacyData__modal__container__text">
            We use “cookies” to collect information about you and your activity
            across our site. A cookie is a small piece of data that our website
            stores on your computer, and accesses each time you visit, so we can
            understand how you use our site. This helps us serve you content
            based on preferences you have specified.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Limits of Our Policy
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            policies of those sites, and cannot accept responsibility or
            liability for their respective privacy practices.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Changes to This Policy
          </p>
          <p className="modalPrivacyData__modal__container__text">
            At our discretion, we may change our privacy policy to reflect
            updates to our business processes, current acceptable practices, or
            legislative or regulatory changes. If we decide to change this
            privacy policy, we will post the changes here at the same link by
            which you are accessing this privacy policy.
          </p>
          <p className="modalPrivacyData__modal__container__text">
            If required by law, we will get your permission or give you the
            opportunity to opt in to or opt out of, as applicable, any new uses
            of your personal information.
          </p>
          <p className="modalPrivacyData__modal__container__text">Contact Us</p>
          <p className="modalPrivacyData__modal__container__text">
            For any questions or concerns regarding your privacy, you may
            contact us using the following details:
          </p>
          <p className="modalPrivacyData__modal__container__text">
            Sport finder
          </p>
          <a href="#" className="modalPrivacyData__modal__container__a">
            https://sportfinder/contact
          </a>
        </div>
      </div>
    </div>
  );
}

ModalPrivacyData.propTypes = {
  onClickClosePrivacyData: PropTypes.func.isRequired,
};
