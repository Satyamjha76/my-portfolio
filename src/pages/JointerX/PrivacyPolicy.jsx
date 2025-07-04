import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
      {" "}
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        {" "}
        <h1 className="text-3xl text-center font-bold mb-10">
          Privacy Policy for JointerX
        </h1>{" "}
        <p className="mb-6 font-medium">Effective Date: July 5, 2025</p>
        <p className="mb-4">
          Welcome to <strong>JointerX</strong> (“we,” “our,” “us”). We are
          committed to protecting your privacy and ensuring a safe user
          experience. This Privacy Policy explains how we collect, use, store,
          and disclose your personal information when you use our mobile
          application
          <strong> JointerX</strong> (the “App”).
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <h3 className="text-xl font-semibold mt-4">
          a. Authentication & Sign-Up
        </h3>
        <p className="mb-2">
          We use <strong>Firebase Authentication</strong> to manage login and
          signup. During registration, we collect:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>For Candidates:</strong> Email, Password, Full Name, Gender,
            City, State, Country, Experience Level, Contact Number
          </li>
          <li>
            <strong>For Employers:</strong> Email, Password, Company Name,
            Business Type, Company Size, Company Address, Country, State, City,
            Full Name, Designation, Contact Number
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">
          b. Profile Completion (Candidates Only)
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Profile Picture (uploaded via image picker and stored on{" "}
            <strong>Cloudinary</strong>)
          </li>
          <li>About You, Education Details</li>
          <li>Experience Details (if applicable)</li>
          <li>Skills</li>
          <li>Resume URL</li>
        </ul>
        <p className="mb-4 italic">
          Note: Profile images are stored on <strong>Cloudinary</strong>, and
          only the URL is saved in <strong>Firebase</strong>.
        </p>
        <h3 className="text-xl font-semibold mt-4">
          c. Job Posting (Employers Only)
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Job Title, Description, Location, Type</li>
          <li>Salary Range, Experience Level</li>
          <li>Required Skills, Education Level</li>
          <li>Application Deadline</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">d. App Usage Data</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Device Info (model, OS version)</li>
          <li>IP Address</li>
          <li>In-app activity (e.g. screen views, actions)</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Authenticate users and manage access</li>
          <li>Allow candidates to apply for jobs</li>
          <li>Allow employers to post and manage jobs</li>
          <li>Match users with relevant job opportunities</li>
          <li>Enhance app functionality and performance</li>
          <li>Communicate updates and respond to support requests</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Data Storage and Security
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>User data</strong> is stored securely in{" "}
            <strong>Firebase Realtime Database</strong> or{" "}
            <strong>Firestore</strong>
          </li>
          <li>
            <strong>Profile images</strong> are uploaded to{" "}
            <strong>Cloudinary</strong>, and the image URLs are stored in
            Firebase
          </li>
          <li>
            We apply industry-standard security practices, but no system is 100%
            secure
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Sharing of Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>With Employers:</strong> Candidate data (including resume
            and profile) is shared when applying
          </li>
          <li>
            <strong>With Firebase and Cloudinary:</strong> For authentication
            and media hosting
          </li>
          <li>
            <strong>Legal Requirements:</strong> Data may be disclosed to comply
            with legal obligations
          </li>
        </ul>
        <p className="mb-4">
          We do <strong>not</strong> sell or rent your personal information to
          third parties.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Permissions Used
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Storage/Media Access:</strong> To allow profile image
            uploads
          </li>
          <li>
            <strong>Internet Access:</strong> Required for app operations and
            real-time syncing
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <ul className="list-disc list-inside mb-4">
          <li>View and edit your personal data within the app</li>
          <li>Request deletion of your data by contacting us</li>
          <li>Revoke permissions through device settings</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          7. Children’s Privacy
        </h2>
        <p className="mb-4">
          JointerX is not intended for users under 13. We do not knowingly
          collect personal data from children. If we learn that we have, we will
          delete it immediately.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          8. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this policy to reflect changes in technology, law, or
          our practices. Updates will be posted in the app and/or notified to
          users directly.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, reach out to us at:
        </p>
        <p className="mt-2">Email: jha.satyam1976@gmail.com</p>
        <p>Phone: 9712932934</p>
      </div>
    </div>
  );
}
