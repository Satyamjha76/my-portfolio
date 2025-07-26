// src/pages/JointerXPage.jsx
import React from "react";
import useMeta from "../../hooks/useMeta";
import { Link, useNavigate } from "react-router-dom";
import GetItOnGooglePlayStoreBadge from "../../assets/GetItOnGooglePlayStoreBadge.png";
import jointerxDarkLogo from "../../assets/project_JointerX/jointerxdarkmodelogo.png";
import jointerxLightLogo from "../../assets/project_JointerX/jointerxlightmodelogo.png";
import img1 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileWelcome.png";
import img2 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileCandidatesJobs.png";
import img3 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileJobDetails.png";
import img4 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileManageInterviewDetails.png";
import img5 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileShortlistedCandidates.png";
import img6 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileAddJobPost.png";
import img7 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileCandidateHome.png";
import img8 from "../../assets/project_JointerX/ScreenShotsPlayStore/MobileEmployerHome.png";
import ImageCarousel from "../../components/JointerXImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faBuilding, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function JointerXPage() {
  const navigate = useNavigate();

  useMeta({
    title: "JointerX – Jobs & Hiring | Projects",
    description:
      "JointerX connects job seekers and employers with one-tap applications, interviews, and smart hiring tools. Download now on Google Play.",
    keywords:
      "JointerX, job portal app, hiring app, Android recruitment platform, job seekers, employers",
    canonical: "https://satyamjha.live/jointerx",
  });

  const handleBack = () => {
  const cameFromLink =
    !document.referrer || !document.referrer.includes(window.location.host);

  if (!cameFromLink && window.history.length > 1) {
    navigate(-1); // Go back if user navigated from your site
  } else {
    navigate("/projects"); // Fallback if opened directly or no history
  }
};

  return (
    <div className="min-h-screen w-full text-gray-800 dark:text-white bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 pb-10">
      {/* Back Button */}
      <div className="w-full max-w-6xl flex justify-start px-6 pt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-1.5 text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full shadow-md transition duration-300 ease-in-out"
        >
          <span className="text-xl">←</span>
          <span className="font-semibold text-sm">Back to Projects</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto text-center py-16 px-6">
        <img
          src={jointerxLightLogo}
          alt="JointerX Logo Light"
          className="mx-auto h-24 md:h-28 object-contain mb-6 block dark:hidden"
        />
        <img
          src={jointerxDarkLogo}
          alt="JointerX Logo Dark"
          className="mx-auto h-24 md:h-28 object-contain mb-6 hidden dark:block"
        />

        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The all-in-one recruitment platform that connects job seekers and
          employers — apply, schedule, and hire effortlessly.
        </p>

        {/* Google Play Badge */}
        <div className="flex justify-center mt-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.jointerx.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GetItOnGooglePlayStoreBadge}
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>
        </div>

        {/* App Mockups Heading */}
        <h2 className="text-3xl font-bold text-center mt-14 mb-6">
          App Screenshots
        </h2>

        {/* Play Store Style Screenshots */}
        <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900">
          <ImageCarousel images={[img1, img2, img3, img4, img5, img6, img7, img8]} />
        </div>
      </section>

{/* Story Section */}
<section className="w-full max-w-4xl mx-auto text-center py-16 px-6">
  <h2 className="text-3xl font-bold mb-6">The Story Behind JointerX</h2>
  <div className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">

    <p>
      The idea for JointerX began with a frustration I felt while using other job apps.
      Most were cluttered — packed with unnecessary features and pop‑ups that distracted
      from what truly mattered. I wanted to create something different: a platform that
      felt <span className="font-medium text-blue-400">simple, direct, and focused</span>,
      where anyone opening it immediately knows — this is for finding or posting jobs,
      and nothing else.
    </p>

    <p>
      Building it, however, was far from simple. Fresh out of college and still in the
      process of mastering new technologies, I ran into challenge after challenge —
      from stubborn <span className="font-medium text-blue-400">Android navigation bugs</span>
      to endless polishing to make every screen feel right. My original plan was to use
      Spring Boot for the backend, but with time being critical and my learning curve steep,
      I pivoted to Firebase so the project could move forward without losing momentum.
    </p>

    <p>
      In just <span className="font-medium text-blue-400">three weeks</span>, I had the
      core functionality built. But shipping a production‑ready app is much more than
      coding. I had to optimize it for different screens, refine the design, prepare
      thorough documentation, and meet Google Play’s extensive requirements. I organized
      a closed testing phase with <span className="font-medium text-blue-400">15–20 testers</span>,
      who used the app daily for two weeks, helping refine every detail before launch.
    </p>

    <p>
      From the first line of code to the day it went live on Google Play, the entire
      journey took about <span className="font-medium text-green-500">two months</span>.
      Every line of code, every screen, every test was handled by me — while I was
      simultaneously continuing to learn Spring Boot on the side.
    </p>

    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8">
       JointerX isn’t just another app. It’s the result of countless late nights,
      persistence, and the belief that a better job platform could exist — built
      start to finish by a single developer.
    </p>
  </div>
</section>






      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Makes JointerX Different?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "For Job Seekers",
              desc: "Apply to jobs instantly, save your favorite listings, and manage your interviews with ease.",
              icon:faUserTie
            },
            {
              title: "For Employers",
              desc: "Post openings, shortlist candidates, and manage interviews in one simple dashboard.",
              icon:faBuilding
            },
            {
              title: "Smart Matching",
              desc: "Skill-based job recommendations and real-time status updates — so you never miss an opportunity.",
              icon:faBolt
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition text-center bg-white dark:bg-gray-900"
            >
              <div className="w-10 h-10 mx-auto mb-4">
                <div className="w-full h-full rounded-full border-2 border-gray-500 dark:border-gray-400">
                <FontAwesomeIcon
        icon={item.icon}
        className="text-gray-700 dark:text-gray-300 text-2xl mt-1.5"
      />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Links */}
      <section className="w-full max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Legal & Support</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-700 dark:text-gray-300">
          <Link to="/jointerx/privacypolicy" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>
            Privacy Policy
          </Link>
          <Link to="/jointerx/termsandconditions" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>
            Terms & Conditions
          </Link>
          <Link to="/jointerx/accountdeletion" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>
            Account Deletion
          </Link>
        </div>
      </section>
    </div>
  );
}
