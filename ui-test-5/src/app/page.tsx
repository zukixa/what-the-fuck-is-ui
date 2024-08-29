'use client';
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Moon, Sun, Code, Zap, Gift, Key, ExternalLink, MessageSquare, BookOpen, Rocket } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-card text-card-foreground rounded-lg p-6 shadow-lg"
  >
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => (
  <SyntaxHighlighter language={language} style={tomorrow} className="rounded-md">
    {code}
  </SyntaxHighlighter>
);

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => <label htmlFor={htmlFor}>{children}</label>;


export default function Component() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-4 space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              zukijourney-bots
            </h1>
            <p className="text-xl text-muted-foreground">zuki.gm and zuki.time - Your AI-powered Discord companions!</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">Free!</Badge>
            <Badge variant="secondary" className="text-sm">AI-Powered!</Badge>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            <Label htmlFor="dark-mode">{darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</Label>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome to zukijourney-bots documentation!</CardTitle>
              <CardDescription>Your guide to zuki.gm and zuki.time Discord bots</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This guide provides comprehensive documentation for zuki.gm and zuki.time, two powerful AI-driven Discord bots designed to enhance your server experience.</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </a>
              </Button>
              <Button variant="default" asChild>
                <Link href="#quick-start">
                  <Rocket className="mr-2 h-4 w-4" />
                  Quick Start Guide
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Code className="h-8 w-8 text-purple-500" />}
            title="AI-Powered Gameplay"
            description="zuki.gm offers AI-driven gameplay elements for rich role-playing experiences."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            title="Time Management"
            description="zuki.time provides advanced time management features for role-playing servers."
          />
          <FeatureCard
            icon={<Gift className="h-8 w-8 text-green-500" />}
            title="Versatile Commands"
            description="Both bots offer a wide range of commands to enhance your Discord server."
          />
          <FeatureCard
            icon={<Key className="h-8 w-8 text-blue-500" />}
            title="Easy Integration"
            description="Simple setup process to get the bots running on your server quickly."
          />
        </div>

        <Card id="quick-start">
          <CardHeader>
            <CardTitle className="text-3xl">Quick Start Guide</CardTitle>
            <CardDescription>Get started with zuki.gm and zuki.time in minutes!</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Join our Discord:</strong> Visit <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">discord.gg/zukijourney</a> to join our community.
              </li>
              <li>
                <strong>Invite the bots:</strong> Use the provided invite links to add zuki.gm and zuki.time to your server.
              </li>
              <li>
                <strong>Set up zuki.gm:</strong> Use the `/gm` command to start using the AI-powered gameplay features.
              </li>
              <li>
                <strong>Configure zuki.time:</strong> Use the `/time-set` command to set up your server&apos;s roleplay time.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Tabs defaultValue="zuki-gm" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="zuki-gm">zuki.gm</TabsTrigger>
            <TabsTrigger value="zuki-time">zuki.time</TabsTrigger>
          </TabsList>

          <TabsContent value="zuki-gm" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>zuki.gm Commands</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="gm-command">
                    <AccordionTrigger>The `!gm` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/gm or !gm [pol/eco/war/mil/npc/esp/fun] [rp-post/link-to-post] [what you would like to have answered]`</p>
                      <p>Abbreviations:</p>
                      <ul className="list-disc list-inside">
                        <li>pol - political reform</li>
                        <li>eco - economic reform</li>
                        <li>war - war operations</li>
                        <li>mil - military reform</li>
                        <li>npc - generate a NPCs response to your post</li>
                        <li>esp - espionage moves</li>
                        <li>fun - meme moves</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="revise-system">
                    <AccordionTrigger>The Revise System</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/revise [What should the AI consider that it did not consider before, what should it change?]`</p>
                      <p>Add revisers with `/addreviser [role]`</p>
                    </AccordionContent>
                  </AccordionItem>
                  {/* Add more AccordionItems for other zuki.gm commands */}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zuki-time" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>zuki.time Commands</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="time-set">
                    <AccordionTrigger>The `/time-set` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-set [speed] [notify_interval] [day] [month] [year] [channel] [role] [voice_channel]`</p>
                      <p>Sets up your server&apos;s roleplay time system.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="time-info">
                    <AccordionTrigger>The `/time-info` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-info`</p>
                      <p>Displays information about your server&apos;s current time settings.</p>
                    </AccordionContent>
                  </AccordionItem>
                  {/* Add more AccordionItems for other zuki.time commands */}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">Join our Discord server</a> for support and updates.
              </li>
              <li>
                Use the `/report` command to notify bot owners of any issues.
              </li>
              <li>
                Check out our other bots: zuki.count, zuki.risk, zuki.trivia, and zuki.star!
              </li>
            </ul>
          </CardContent>
        </Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Made by @zukixa & @lunaiiii, making servers and unique users happy.</p>
          <p className="font-semibold mt-2">Thank you for using zukijourney-bots!</p>
        </footer>
      </div>
    </div>
  );
}