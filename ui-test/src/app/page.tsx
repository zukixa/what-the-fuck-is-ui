"use client";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siGithub, siDiscord, siGmail } from 'simple-icons/icons';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  projects: Project[];
}

interface ProjectItemProps {
  title: string;
  description: string;
  link: string;
}

export default function Component() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY + 100;
      const sections = ["about", "projects"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && currentScroll >= element.offsetTop && currentScroll < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8 font-['Inter',sans-serif]">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">zukixa</span>
          <span className="font-bold text-xl">zk</span>
        </Link>
      </header>
      {/* Header Section with Gradient */}
      <div className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900">
        <div className="max-w-4xl mx-auto space-y-12 text-center" id="about">
          {/* Personal Section */}
          <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="w-24 h-24 border-4 border-background">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/56563509?v=4" alt="Profile Picture" />
                  <AvatarFallback>YN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-shadow-3d">zukixa</h1>
                <p className="text-xl text-gray-400 text-shadow-3d">ai dev on a zukijourney.</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-shadow-3d">
                I&apos;m the chaos queen with an interest for all things AI and code. ✨<br />
                I love building tools and resources that make others chaotic with technology tooo~
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="mailto:56563509+zukixa@users.noreply.github.com">
                  <Button variant="outline" size="icon">
                    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d={siGmail.path} />
                    </svg>
                  </Button>
                </Link>
                <Link href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d={siDiscord.path} />
                    </svg>
                  </Button>
                </Link>
                <Link href="https://github.com/zukixa" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d={siGithub.path} />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section className="space-y-8 py-12 md:py-24 lg:py-32" id="projects">
        <h2 className="text-3xl font-semibold text-shadow-3d">Currently Obsessed With:</h2>
        <Accordion type="single" collapsible className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AccordionItem value="ai-adventures">
              <AccordionTrigger className="text-xl font-semibold text-shadow-3d">AI Adventures</AccordionTrigger>
              <AccordionContent>
                <ProjectCard
                  description="Various projects exploring the world of Artificial Intelligence."
                  projects={[
                    { title: "zukijourney", description: "Leading the charge on the largest Discord AI API platform!", link: "https://github.com/zukijourney/api-docs" },
                    { title: "cool-ai-stuff", description: "Your ultimate guide to free AI APIs.", link: "https://github.com/zukixa/cool-ai-stuff" },
                  ]}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tdd-accessibility">
              <AccordionTrigger className="text-xl font-semibold text-shadow-3d">Making TDD Accessible</AccordionTrigger>
              <AccordionContent>
                <ProjectCard
                  description="A framework for teaching TDD more effectively."
                  projects={[
                    { title: "home-of-tdd", description: "Dive deep into the world of TDD with comprehensive guides and examples.", link: "https://github.com/zukixa/home-of-tdd" },
                    { title: "sample-tdd", description: "Dip your toes into TDD with this beginner-friendly, self-assessable assignment.", link: "https://github.com/css-software-engineering-studio/sample-tdd" },
                    { title: "walkthru", description: "Walkthrough the thought process behind TDD problem-solving.", link: "https://github.com/zukixa/walkthru" },
                    { title: "level1", description: "Level up your TDD skills with this collaborative team project.", link: "https://github.com/zukixa/level1" },
                  ]}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="coding-tools">
              <AccordionTrigger className="text-xl font-semibold text-shadow-3d">Tools for a Better Coding Life</AccordionTrigger>
              <AccordionContent>
                <ProjectCard
                  description="Miscellaneous tools to enhance your coding experience."
                  projects={[
                    { title: "temp-gmail", description: "Dynamic temporary Gmail generator.", link: "https://github.com/zukixa/temp-gmail" },
                    { title: "apx", description: "Asynchronously grab and use free proxies.", link: "https://github.com/zukixa/apx" },
                    { title: "fmb", description: "Analyzing fairness in mobility data because representation matters.", link: "https://github.com/zukixa/fmb" },
                    { title: "autograder", description: "Automate the grading grind.", link: "https://github.com/zukixa/autograder" },
                    { title: "ta-helper-scripts", description: "Handy scripts from TA adventures.", link: "https://github.com/zukixa/ta-helper-scripts" },
                  ]}
                />
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </section>
    </div>
  );
}

function ProjectCard({ description, projects }: Omit<ProjectCardProps, 'title'>) {
  return (
    <div className="space-y-4">
      <p className="text-center text-gray-400">{description}</p>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <div className="text-center">
      <h3 className="font-semibold text-shadow-3d">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">{description}</p>
      <Link href={link} passHref>
        <Button variant="outline" size="sm">
          <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d={siGithub.path} />
          </svg>
           View on GitHub
        </Button>
      </Link>
    </div>
  );
}
