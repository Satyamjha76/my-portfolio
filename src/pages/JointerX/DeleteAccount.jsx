import React, { useState } from "react";
import useMeta from "../../hooks/useMeta";

export default function AccountDeletionPage() {
   useMeta({
    title: "Account Deletion Request | JointerX",
    description: "Submit a request to delete your JointerX account and personal data by filling out the form.",
    keywords: "Account deletion, JointerX account removal, Delete user data, Data privacy, User request form"
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSend = () => {
    const { name, email, reason } = form;
    let validationErrors = {};

    if (!name.trim()) validationErrors.name = "Full name is required.";
    if (!email.trim()) validationErrors.email = "Email is required.";
    else if (!validateEmail(email)) validationErrors.email = "Enter a valid email address.";
    if (!reason.trim()) validationErrors.reason = "Please mention a reason for deletion.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const to = "jointerx.contact@gmail.com";
    const subject = encodeURIComponent("Account Deletion Request - JointerX");
    const body = encodeURIComponent(`Hello JointerX Team,

I would like to request deletion of my account from your app.

Full Name: ${name}
Email Address: ${email}
Reason for Deletion: ${reason}

Please remove all associated data as per your privacy policy.

Thank you,
${name}`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen w-full text-gray-800  dark:text-white bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 pb-10 pt-10">
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl text-center font-bold mb-10">Account Deletion Request</h1>
        <p className="mb-6 font-medium text-center">
          If you wish to delete your account from JointerX, please fill the form
          below. You’ll be redirected to send us an email with your request.
        </p>

        {/* Full Name Field */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Reason Field */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Reason for Deletion</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-md bg-white text-black dark:bg-gray-700 dark:text-white"
          />
          {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Send Deletion Request
          </button>
        </div>

        {/* Note */}
        <p className="mt-4 italic">
          <strong>Note:</strong> Account deletion or data-related requests must be sent from the email address registered with your JointerX account. This is required to verify ownership and protect your data.
        </p>
      </div>
    </div>
  );
}
