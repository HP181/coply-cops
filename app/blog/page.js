"use client"
import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalendarIcon, Clock, Tag, ThumbsUp, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const featuredPost = {
    id: 1,
    title: "The Future of Cybersecurity: AI and Machine Learning",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing the cybersecurity landscape, providing new tools to defend against evolving threats.",
    author: "Jane Doe",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["AI", "Machine Learning", "Cybersecurity"],
    likes: 245,
    comments: 56,
    image: "/placeholder.svg?height=400&width=800"
  }

  const blogPosts = [
    {
      id: 2,
      title: "5 Essential Cybersecurity Practices for Remote Work",
      excerpt: "With the rise of remote work, ensuring cybersecurity has become more crucial than ever. Learn about the five essential practices to keep your data safe.",
      author: "John Smith",
      date: "2024-03-10",
      readTime: "6 min read",
      tags: ["Remote Work", "Best Practices", "Data Protection"],
      likes: 189,
      comments: 42,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 3,
      title: "Blockchain Technology in Cybersecurity: A Game Changer?",
      excerpt: "Discover how blockchain technology is being applied to enhance cybersecurity measures and whether it lives up to the hype.",
      author: "Alice Johnson",
      date: "2024-03-05",
      readTime: "7 min read",
      tags: ["Blockchain", "Innovation", "Data Integrity"],
      likes: 210,
      comments: 38,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 4,
      title: "The Rising Threat of Ransomware: How to Protect Your Business",
      excerpt: "Ransomware attacks are on the rise. Learn about the latest trends and strategies to safeguard your business against this growing threat.",
      author: "Bob Williams",
      date: "2024-02-28",
      readTime: "5 min read",
      tags: ["Ransomware", "Business Security", "Threat Prevention"],
      likes: 178,
      comments: 31,
      image: "/placeholder.svg?height=300&width=400"
    }
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Blog</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="mb-12">
            <Card className="overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{featuredPost.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    {featuredPost.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    {featuredPost.comments}
                  </span>
                </div>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-auto">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      {post.comments}
                    </span>
                  </div>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">© 2024 Your Blog Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}