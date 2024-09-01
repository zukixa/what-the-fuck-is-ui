'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLinkIcon } from "lucide-react"
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siGithub, siDiscord, siGmail } from 'simple-icons/icons'

const DISCORD_AVATAR_URL = "https://files.catbox.moe/f54n16.jpg"

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills']
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveTab(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Offset for header height
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">zukixa</span>
          <span className="font-bold text-xl">ZK</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {['about', 'projects', 'skills'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={`text-sm font-medium ${activeTab === item ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </nav>
      </header>
      <main className="flex-1 pt-16 w-full">
        <section 
          id="about" 
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
          style={{
            background: 'linear-gradient(to right, #E9D5FF, #FBCFE8, #BFDBFE)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Avatar className="w-32 h-32 border-4 border-background">
                <AvatarImage src={DISCORD_AVATAR_URL} alt="Profile Picture" />
                <AvatarFallback>ZK</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  zukixa
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  ai dev on a zukijourney.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  🇸🇪/🇩🇪 & &apos;03 | in seattle, WA 🌲 
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 dark:text-gray-400">
                  I&apos;m the chaos queen with an interest for all things AI and code. ✨
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  I love building tools and resources that make others chaotic with technology tooo~
                </p>
              </div>
              <div className="flex space-x-6">
                <Button variant="outline" size="icon" asChild className="w-32 h-32 p-0">
                  <Link href="https://github.com/zukixa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <svg role="img" viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                      <path d={siGithub.path} />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="w-32 h-32 p-0">
                  <Link href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <svg role="img" viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                      <path d={siDiscord.path} />
                    </svg>
                    <span className="sr-only">Discord</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="w-32 h-32 p-0">
                  <Link href="mailto:56563509+zukixa@users.noreply.github.com" className="flex items-center justify-center w-full h-full">
                    <svg role="img" viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                      <path d={siGmail.path} />
                    </svg>
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <motion.section 
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{
            background: '#F5F5F5',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">The Big Three</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  title: 'zukijourney-api', 
                  desc: 'Leading the charge as the largest Discord AI API platform!', 
                  tech: ['AI', 'API', 'Discord', 'SQLite', 'Redis', 'FastAPI', 'Python', 'Cloudflare', 'Ubuntu Server', 'ollama'], 
                  link: 'https://docs.xyzbot.net',
                  additionalInfo: [
                    'Scalable access to various open-source large-language and image AI models for over 5000 users. Maintained <2 second response time and 99.54% uptime.',
                  ]
                },
                { 
                  title: 'zukijourney-bots', 
                  desc: 'Various Discord bots designed by the zukijourney team.', 
                  tech: ['Discord', 'Bots', 'AI', 'Python', 'Time Management'], 
                  link: 'https://bots.xyzbot.net',
                  additionalInfo: ['zuki.gm (An AI DnD-GameMaster-like bot) exceeded 2500 unique servers and 50000 unique users.', 'zuki.time (A roleplay time management bot) exceeded 300 unique servers and 5000 unique users.']
                },
                { 
                  title: 'cool-ai-stuff', 
                  desc: 'Your ultimate guide to free AI APIs', 
                  tech: ['AI', 'APIs', 'Resources', 'Documentation'], 
                  link: 'https://cas.xyzbot.net',
                  additionalInfo: [
                    'Comprehensive resource for developers looking to integrate AI capabilities into their projects.',
                    'As Leader of the zukijourney team since 2023, through strong leadership and management skills, our community driven project ends up being number one here.'
                  ]
                },
              ].map((project, index) => (
                <Card key={index} className="transform transition duration-500 hover:scale-105">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    {project.additionalInfo.map((info, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-400 mb-2">{info}</p>
                    ))}
                    <Button variant="outline" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-16 mb-8">The Noteworthy Rest</h3>
            <Accordion type="single" collapsible defaultValue="other-projects" className="w-full">
              <AccordionItem value="other-projects">
                <AccordionTrigger className="text-2xl font-semibold">
                  Explore More Projects (Click to Show/Hide)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { 
                        title: 'home-of-tdd', 
                        desc: 'Dive deep into the world of TDD with comprehensive guides and examples', 
                        tech: ['Test-Driven Development', 'Software Engineering', 'Education', 'Research'],
                        link: 'https://github.com/zukixa/home-of-tdd',
                        additionalInfo: 'Part of a self-led Project at the University of Washington on establishing best practices to teach Test-Driven-Development.'
                      },
                      { 
                        title: 'temp-gmail', 
                        desc: 'Dynamic temporary Gmail generator', 
                        tech: ['Python', 'Email', 'Automation'],
                        link: 'https://github.com/zukixa/temp-gmail',
                        additionalInfo: 'Useful tool for developers and testers needing temporary email addresses.'
                      },
                      { 
                        title: 'apx', 
                        desc: 'Asynchronously grab and use free proxies', 
                        tech: ['Python', 'Networking', 'Asynchronous Programming'],
                        link: 'https://github.com/zukixa/apx',
                        additionalInfo: 'Efficient solution for handling proxy connections in Python applications.'
                      },
                      { 
                        title: 'fmb', 
                        desc: 'Analyzing fairness in mobility data because representation matters', 
                        tech: ['Python', 'Data Analysis', 'AI', 'Mobility Studies'],
                        link: 'https://github.com/zukixa/fmb',
                        additionalInfo: 'Created as part of collaborative research at the University of Washington, focusing on AI in Mobility studies.'
                      },
                      { 
                        title: 'gpt4free Contributor', 
                        desc: 'Regular contributor to one of the largest open source AI projects on GitHub', 
                        tech: ['AI', 'Open Source', 'Python'],
                        link: 'https://github.com/xtekky/gpt4free',
                        additionalInfo: 'Contributed to a project focused on providing AI models for free to the masses, demonstrating commitment to open-source development and AI accessibility.'
                      },
                      { 
                        title: 'autograder (WIP)', 
                        desc: 'Automate the grading grind', 
                        tech: ['Python', 'Education', 'Automation'],
                        link: 'https://github.com/zukixa/autograder',
                        additionalInfo: 'Work in Progress. Aimed at simplifying the grading process for educators.'
                      },
                      { 
                        title: 'ta-helper-scripts', 
                        desc: 'Handy scripts from TA adventures', 
                        tech: ['Python', 'Education', 'Automation', 'Anti-Cheat'],
                        link: 'https://github.com/zukixa/ta-helper-scripts',
                        additionalInfo: 'Collection of tools developed to enhance educational experiences and simplify TA duties at the University of Washington.'
                      },
                      {
                        title: 'playing-with-gcp',
                        desc: 'Investigating the evolution of VLMs to Label Detectors',
                        tech: ['Google Cloud Platform', 'AI', 'Machine Learning', 'VLMs'],
                        link: 'https://github.com/zukixa/playing-with-gcp',
                        additionalInfo: 'Demonstrates expertise with Google Cloud Platform and exploring advancements in Vision Language Models.'
                      },
                      {
                        title: 'what-the-fuck-is-ui',
                        desc: 'Previous iterations of all my websites',
                        tech: ['Next.js', 'Cloudflare Pages', 'Tailwind CSS', 'Web Development'],
                        link: 'https://github.com/zukixa/what-the-fuck-is-ui',
                        additionalInfo: 'Showcases skills in Next.js, Cloudflare Pages, Tailwind CSS, and modern web development practices.'
                      },
                    ].map((project, index) => (
                      <Card key={index} className="transform transition duration-500 hover:scale-105">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.desc}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                              <Badge key={i} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.additionalInfo}</p>
                          <Button variant="outline" asChild>
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.section>
        <motion.section 
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{
            background: '#e0e0e0',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills & Expertise</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  category: 'AI & Machine Learning', 
                  skills: ['Large Language Models', 'Machine Learning', 'AI APIs', 'Natural Language Processing', 'ollama']
                },
                { 
                  category: 'Programming Languages', 
                  skills: ['Python', 'C++', 'Java', 'TypeScript', 'C#']
                },
                { 
                  category: 'Cloud & DevOps', 
                  skills: ['Azure', 'Google Cloud Platform (GCP)', 'Docker', 'Linux (Ubuntu Server)', 'CI/CD', 'Cloudflare']
                },
                { 
                  category: 'Web Development & APIs', 
                  skills: ['FastAPI', 'React', 'Next.js', 'Node.js', 'RESTful APIs', 'Discord API', 'Supabase']
                },
                { 
                  category: 'Databases & Data Management', 
                  skills: ['SQLite', 'Redis', 'Data Structures', 'Algorithms', 'Big Data Analytics']
                },
                { 
                  category: 'Software Engineering', 
                  skills: ['Test-Driven Development (TDD)', 'API Design', 'Automation', 'Version Control (Git)', 'Agile Methodologies']
                },
                { 
                  category: 'Tools & Platforms', 
                  skills: ['GitHub', 'VS Code', 'Jupyter Notebooks', 'Microsoft Office Suite', 'Zoom']
                },
                { 
                  category: 'Soft Skills', 
                  skills: ['Leadership', 'Problem Solving', 'Critical Thinking', 'Technical Writing', 'Open Source Contribution', 'Community Building']
                },
                { 
                  category: 'Research & Analysis', 
                  skills: ['AI in Mobility Studies', 'Fairness Analysis', 'Data Science', 'Academic Research']
                },
              ].map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 zukixa. All rights reserved.</p>
      </footer>
    </div>
  )
}