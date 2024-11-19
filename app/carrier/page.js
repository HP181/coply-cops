'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Shield, Users, Zap, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Toast } from '@/components/ui/toast'


const Carrier = () => {
  const [submitted, setSubmitted] = useState(false)

  const jobOpenings = [
    { 
      title: "Senior Penetration Tester", 
      department: "Security Operations",
      description: "As a Senior Penetration Tester, you will lead complex security assessments, identify vulnerabilities in our clients' systems, and provide actionable recommendations to enhance their security posture. You should have extensive experience in ethical hacking, a deep understanding of various security tools, and excellent communication skills to explain technical findings to both technical and non-technical stakeholders."
    },
    { 
      title: "Cybersecurity Analyst", 
      department: "Threat Intelligence",
      description: "The Cybersecurity Analyst role involves monitoring and analyzing our security systems, investigating security breaches, and developing strategies to protect against cyber threats. You will work closely with our threat intelligence team to stay ahead of emerging threats and contribute to the development of our security policies and procedures. Strong analytical skills and knowledge of current cybersecurity trends are essential for this position."
    },
    { 
      title: "Security Software Developer", 
      department: "Product Development",
      description: "As a Security Software Developer, you will be responsible for designing, developing, and maintaining secure software solutions for our clients. This role requires a strong background in software development, with a focus on security best practices. You will work on cutting-edge projects, implementing robust security features, and continuously improving our existing software to meet the evolving needs of the cybersecurity landscape."
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would typically handle the form submission,
    // e.g., send the data to your server or a third-party service
    setSubmitted(true)
    Toast({
      title: "Application Submitted",
      description: "Thank you for your application. We'll be in touch soon!",
      duration: 5000,
    })
  }

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
          {jobOpenings.map((job, index) => (
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Cutting-edge Projects</CardTitle>
            </CardHeader>
            <CardContent>
              Work on the forefront of cybersecurity, tackling real-world threats and developing innovative solutions.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Collaborative Environment</CardTitle>
            </CardHeader>
            <CardContent>
              Join a team of passionate experts who are dedicated to sharing knowledge and growing together.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Continuous Learning</CardTitle>
            </CardHeader>
            <CardContent>
              Stay ahead with ongoing training, certifications, and opportunities to attend industry conferences.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Application</CardTitle>
            <CardDescription>We&apos;re excited to learn more about you!</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="text-center text-green-600">Thank you for your application! We&apos;ll be in touch soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobOpenings.map((job, index) => (
                        <SelectItem key={index} value={job.title}>
                          {job.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" min="0" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to join our team?</Label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">Submit Application</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
 )
}

export default Carrier;