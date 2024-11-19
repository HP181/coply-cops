"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobOpenings from "@/lib/JobOpenings";
import SubmitCareerForm from "@/actions/SubmitCareerForm";
import toast from "react-hot-toast";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
  
    // Validate Full Name
    if (!formData.name.trim()) errors.name = "Full Name is required";
  
    // Validate Email
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    // Validate Position
    if (!formData.position) errors.position = "Position of Interest is required";
  
    // Validate Experience (must be a positive number)
    if (!formData.experience) {
      errors.experience = "Years of Experience is required";
    } else if (
      isNaN(formData.experience) ||
      formData.experience < 0 ||
      formData.experience > 50
    ) {
      errors.experience = "Experience must be a number between 0 and 50";
    }
  
    // Validate Message
    if (!formData.message.trim()) {
      errors.message = "This field is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    } else if (formData.message.length > 1000) {
      errors.message = "Message must not exceed 1000 characters";
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const result = await SubmitCareerForm(formData);

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          position: "", // Make sure position is part of formData
          experience: "",
          message: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle select changes
  const handleSelectChange = (value) => {
    setFormData({ ...formData, position: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Cybersecurity Team</h1>
        <p className="text-xl text-muted-foreground">
          Help us secure the digital world, one system at a time.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {JobOpenings.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.department}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{job.title}</DialogTitle>
                      <DialogDescription>{job.department}</DialogDescription>
                    </DialogHeader>
                    <p className="py-4">{job.description}</p>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Application</CardTitle>
            <CardDescription>
              We&apos;re excited to learn more about you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="text-center text-green-600">
                Thank you for your application! We&apos;ll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Select
                    name="position"
                    value={formData.position}
                    onValueChange={handleSelectChange} // Correct handler to update value
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {JobOpenings.map((job, index) => (
                        <SelectItem key={index} value={job.title}>
                          {job.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.position && (
                    <p className="text-red-500 text-sm">{errors.position}</p>
                  )}
                </div>
                <div className="space-y-2">
  <Label htmlFor="experience">Years of Experience</Label>
  <Input
    id="experience"
    name="experience"
    type="number"
    value={formData.experience}
    onChange={handleChange}
    min="0" // Ensure experience is a positive number
  />
  {errors.experience && (
    <p className="text-red-500 text-sm">{errors.experience}</p>
  )}
</div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Why do you want to join our team?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    className="h-12 px-12"
                    disabled={Loading}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Careers;
