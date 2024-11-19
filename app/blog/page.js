"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Clock, Tag, ThumbsUp, MessageSquare } from "lucide-react";
import Image from "next/image";
import blogPosts, { featuredPost } from "@/lib/BlogPostData";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  

 
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <motion.div
      className="min-h-screen  dark:bg-[#020817]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className=" ">
        <motion.div
          className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Blog</h1>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          className="px-4 py-6 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="mb-8">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="mb-12">
            <Card className="overflow-hidden">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{featuredPost.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {featuredPost.excerpt}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="flex flex-col overflow-hidden">
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
                  <CardFooter className="mt-auto">
                    <Button variant="outline">Read More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
