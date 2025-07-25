import React from "react";
import useMeta from "../../hooks/useMeta";

import { useNavigate,Link } from "react-router-dom";

export default function TermsAndConditions() {
   const navigate = useNavigate();
  useMeta({
    title: "Terms and Conditions | JointerX",
    description: "Read the official terms and conditions for using JointerX, including eligibility, user responsibilities, data privacy, and limitations of liability.",
    keywords: "Terms and Conditions, JointerX Terms, Privacy Policy, User Agreement, Account Usage Rules"
   ,canonical: "https://satyamjha.live/jointerx/termsandconditions"
  });
  
 const handleBack = () => {
  const cameFromLink =
    !document.referrer || !document.referrer.includes(window.location.host);

  if (!cameFromLink && window.history.length > 1) {
    navigate(-1); // Go back if user navigated from your site
  } else {
    navigate("/jointerx"); // Fallback if opened directly or no history
  }
};



  return (
    <div className="min-h-screen w-full text-gray-800  dark:text-white bg-gradient-to-br  dark:from-gray-800 dark:to-gray-900 pb-10">
       {/* Back Button */}
      <div className="w-full max-w-6xl flex justify-start px-6 pt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-1.5 text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full shadow-md transition duration-300 ease-in-out"
        >
          <span className="text-xl">←</span>
          <span className="font-semibold text-sm">Back</span>
        </button>
      </div>
      {" "}
      <div className="p-6 md:p-10 max-w-4xl mx-auto pt-10">
        {" "}
        <h1 className="text-3xl text-center font-bold mb-10">
          Terms and Conditions
        </h1>{" "}
        <h2 className="text-2xl text-center font-semibold mb-4">JointerX</h2>{" "}
        <p className="mb-6 font-medium">Effective Date: July 5, 2025</p>
        <p className="mb-4">
          Welcome to <strong>JointerX</strong> (“we”, “our”, “us”). These Terms
          and Conditions (“Terms”) govern your use of our mobile application,{" "}
          <strong>JointerX</strong> (“App”). By accessing or using the App, you
          agree to be bound by these Terms. If you do not agree, please do not
          use the App.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Eligibility</h2>
        <ul className="list-disc list-inside mb-4">
          <li>You must be at least 13 years old to use this App.</li>
          <li>
            By using the App, you represent and warrant that you meet this age
            requirement and have the legal capacity to enter into these Terms.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Accounts</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            You must provide accurate and complete information during
            registration.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            login credentials.
          </li>
          <li>
            You agree to notify us immediately of any unauthorized use of your
            account.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Use of the App</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Impersonate another person or entity.</li>
          <li>
            Post or transmit any content that is misleading, defamatory, or
            harmful.
          </li>
          <li>
            Use the App for any fraudulent activity or to violate any laws.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Employer and Candidate Content
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Employers are responsible for the accuracy and legitimacy of job
            listings they post.
          </li>
          <li>
            Candidates are responsible for ensuring the truthfulness of their
            profile and application data.
          </li>
          <li>
            We do not guarantee job placements, interview selections, or hiring
            outcomes.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Intellectual Property
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            All content and materials in the App, including text, graphics,
            logos, and software, are owned or licensed by JointerX.
          </li>
          <li>
            You may not reproduce, distribute, or create derivative works
            without our express written permission.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Termination</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            We reserve the right to suspend or terminate your account if you
            violate these Terms or your actions cause harm to the platform or
            its users.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          7. Limitation of Liability
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            To the fullest extent permitted by law, JointerX shall not be liable
            for any direct, indirect, or consequential damages arising from your
            use of the App.
          </li>
          <li>
            We are not liable for loss of data, employment opportunities, or
            business outcomes.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Privacy</h2>
        <p className="mb-4">
          Your use of the App is also governed by our{" "}
          <Link
            to="/jointerx/privacypolicy"
            className="underline text-blue-400"
            state={{from:"/jointerx/termsandconditions"}}
          >
            Privacy Policy
          </Link>
          . By using the App, you consent to the collection and use of
          information as described therein.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Modifications</h2>
        <p className="mb-4">
          We may revise these Terms from time to time. Changes will be posted
          within the App or via the website. Continued use of the App
          constitutes acceptance of the revised Terms.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p className="mb-1">
          For questions or concerns regarding these Terms, contact us at:
        </p>
        <p className="mt-2">Email: jha.satyam1976@gmail.com</p>
        <p>Phone: 9712932934</p>
      </div>
    </div>
  );
}
