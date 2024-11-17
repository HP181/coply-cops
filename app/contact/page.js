"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SubmitContactForm from "@/actions/SubmitContactForm";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    jobRole: "",
    companyName: "",
    companySize: "",
    services: [],
    budgetRange: "",
    startDate: "",
    isFirstPentest: false,
    message: "",
    subscribe: false,
  });

  const today = new Date().toISOString().split("T")[0];

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formData.budgetRange) errors.budgetRange = "Budget range is required";
    if (!formData.startDate) errors.startDate = "Start date is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const result = await SubmitContactForm(formData);
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          jobTitle: "",
          jobRole: "",
          companyName: "",
          companySize: "",
          services: [],
          budgetRange: "",
          startDate: "",
          isFirstPentest: false,
          message: "",
          subscribe: false,
        });
        setErrors({});
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Packetlabs Helps Enhance and Strengthen Your Security Posture
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-8"
      >
        What sets us apart is our passionate team of highly trained, proactive ethical hackers. Our advanced capabilities go beyond industry standards.
      </motion.p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name*"
              className={`border p-3 rounded w-full ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name*"
              className={`border p-3 rounded w-full ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className={`border p-3 rounded w-full ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number*"
              className={`border p-3 rounded w-full ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job title"
          className="border border-gray-300 p-3 rounded w-full"
        />
        <select
          name="jobRole"
          value={formData.jobRole}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded w-full"
        >
          <option value="">Job role</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company name"
          className="border border-gray-300 p-3 rounded w-full"
        />
        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded w-full"
        >
          <option value="">Company size</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
        </select>
        <div>
          <h3>Service(s) needed</h3>
          {[
            "Infrastructure Penetration Testing",
            "Application Penetration Testing",
            "Cloud Penetration Testing",
          ].map((service) => (
            <label key={service} className="block">
              <input
                type="checkbox"
                name="services"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />{" "}
              {service}
            </label>
          ))}
        </div>
        <div>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className={`border p-3 rounded w-full ${
              errors.budgetRange ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Budget Range*</option>
            <option value="$1,000-$5,000">$1,000-$5,000</option>
            <option value="$5,000-$10,000">$5,000-$10,000</option>
          </select>
          {errors.budgetRange && (
            <p className="text-red-500 text-sm">{errors.budgetRange}</p>
          )}
        </div>
        <div>
          <input
            type="date"
            name="startDate"
            min={today}
            value={formData.startDate}
            onChange={handleChange}
            className={`border p-3 rounded w-full ${
              errors.startDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate}</p>
          )}
        </div>
        <label>
          <input
            type="checkbox"
            name="isFirstPentest"
            checked={formData.isFirstPentest}
            onChange={handleChange}
          />{" "}
          Is this your first pentest?
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border border-gray-300 p-3 rounded w-full"
        />
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />{" "}
          Subscribe to our newsletter
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
