"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SubmitContactForm from "@/actions/SubmitContactForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    services: [],
    budgetRange: "",
    isFirstPentest: false,
    message: "",
    subscribe: false,
  });

  const [Loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
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
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }
    if (formData.services.length === 0) {
      errors.services = "At least one service must be selected";
    }
    if (!formData.budgetRange) errors.budgetRange = "Budget range is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validate()) return alert("ewh");

    try {
      setLoading(true);
      const result = await SubmitContactForm(formData);

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          companySize: "",
          services: [],
          budgetRange: "",
          isFirstPentest: false,
          message: "",
          subscribe: false,
        });
        setErrors({});
        setLoading(false);
        return toast.success(result?.message);
      } else {
        setLoading(false);
        return toast.success(result?.error);
      }
    } catch (error) {
      setLoading(false);
      return toast.success(error);
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
        What sets us apart is our passionate team of highly trained, proactive
        ethical hackers. Our advanced capabilities go beyond industry standards.
      </motion.p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First name*</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name*"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last name*</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name*"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email*</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone number*</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number*"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="companyName">Company name</Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company name"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName}</p>
          )}
        </div>
        <div>
          <Label>Company size</Label>
          <Select
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, companySize: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10</SelectItem>
              <SelectItem value="11-50">11-50</SelectItem>
              <SelectItem value="51-200">51-200</SelectItem>
              <SelectItem value="201-500">201-500</SelectItem>
              <SelectItem value="501+">501+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Service(s) needed</Label>
          <div className="space-y-5 mt-2">
            {[
              "Infrastructure Penetration Testing",
              "Application Penetration Testing",
              "Cloud Penetration Testing",
              "Mobile Application Penetration Testing",
              "IoT Penetration Testing",
            ].map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox
                  id={service}
                  checked={formData.services.includes(service)}
                  onCheckedChange={() => handleCheckboxChange(service)}
                />
                <Label htmlFor={service}>{service}</Label>
              </div>
            ))}
          </div>
          {errors.services && (
            <p className="text-red-500 text-sm">{errors.services}</p>
          )}
        </div>
        <div>
          <Label htmlFor="budgetRange">Budget range*</Label>
          <Select
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, budgetRange: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="$1,000-$5,000">$1,000-$5,000</SelectItem>
              <SelectItem value="$5,000-$10,000">$5,000-$10,000</SelectItem>
              <SelectItem value="$10,000-$20,000">$10,000-$20,000</SelectItem>
              <SelectItem value="$20,000+">$20,000+</SelectItem>
            </SelectContent>
          </Select>
          {errors.budgetRange && (
            <p className="text-red-500 text-sm">{errors.budgetRange}</p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="isFirstPentest"
            name="isFirstPentest"
            checked={formData.isFirstPentest}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, isFirstPentest: checked }))
            }
          />
          <Label htmlFor="isFirstPentest">
            Is this your first penetration test?
          </Label>
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, subscribe: checked }))
            }
          />
          <Label htmlFor="subscribe">Subscribe to newsletter</Label>
        </div>
        <div className="flex justify-center items-center">
          <Button type="submit" className="h-12 px-12" disabled={Loading}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
