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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => <label htmlFor={htmlFor}>{children}</label>;

export default function Component() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState("overview");

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
            <p className="text-xl text-muted-foreground">zuki.gm and zuki.time - the two big bots of zukijourney!</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">Free!</Badge>
            <Badge variant="secondary" className="text-sm">AI-Powered!</Badge>
            <Badge variant="secondary" className="text-sm">Powering 3000+ Servers!</Badge>
            <Badge variant="secondary" className="text-sm">Supporting 60,000+ Users!</Badge>
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
              <CardDescription>Your guide to all Discord Bots by zukijourney!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This guide provides comprehensive documentation for zuki.gm and zuki.time, two powerful AI-driven Discord bots designed to enhance your server experience.</p>
              <p>There are also a few open-source bots available for you to play with, hosted and seen on GitHub, not documented here.</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/zukixa/zuki-helpers" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  See the Open-Source Bots! 
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
            title="AI-Powered Superpowers"
            description="zuki.gm offers an AI solution to the Game Master Problem for all your role-playing experience!"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            title="Time Management"
            description="zuki.time provides advanced time management features for role-playing servers."
          />
          <FeatureCard
            icon={<Gift className="h-8 w-8 text-green-500" />}
            title="Established Solution"
            description="Both bots have a proven track record of success in the game industry."
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
                <strong>Join our Discord:</strong> Visit <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">discord.gg/zukijourney</a> to join our community & always have advice and support at hand.
              </li>
              <li>
                <strong>Invite the bot:</strong> Use the provided invite links here to add zuki.gm, zuki.time, or any of the open source bots to your server.
              </li>
              <li>
                <strong>Set up the bot:</strong> Utilize this documentation, the Open-Source Bots Github, or each bot&apos;s respective /help command to get started!
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
      <Select value={selectedPage} onValueChange={setSelectedPage}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a page" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="overview">Page 0 - Most Important Parts of zuki.gm</SelectItem>
          <SelectItem value="page1">Page 1 - The Core Parts of the AI GameMaster functionality</SelectItem>
          <SelectItem value="page2">Page 2 - AI-Powered Video and Image Generation functionality</SelectItem>
          <SelectItem value="page3">Page 3 - Various AI-powered writing & related features</SelectItem>
          <SelectItem value="page4">Page 4 - Other general various features of the bot</SelectItem>
          <SelectItem value="page5">Page 5 - The Entire AI-Powered NPCs functionality</SelectItem>
        </SelectContent>
      </Select>
        {selectedPage === "overview" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="important-facts">
              <AccordionTrigger>Important Facts</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>- The bot has been primarily designed for Nation Roleplay Servers, acting as their AI GameMaster. However, naturally, other uses may arise.</li>
                  <li>- Some commands require administrator permissions, or some require the Reviser permissions, as provided with /addreviser on Page 2.</li>
                  <li>- Any feedback, suggestions, or reports should go on the Discord under discord.gg/zukijourney</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy-command">
              <AccordionTrigger>The `/privacy` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /privacy</b></p>
                <p>View the bot&apos;s privacy policy</p>
                <ul>
                  <li>- It is a link towards the zuki.gm privacy policy, and by extent all of zukijourney enterprises.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="settings-command">
              <AccordionTrigger>The `/settings` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /settings [Task] [Text (Optional)]</b></p>
                <p>Adjust various bot settings for your server</p>
                <ul>
                  <li>1. Manage bot settings</li>
                  <li>2. Manage the harshness of the /gm command (easy/normal/hard)</li>
                  <li>3. Customize @zuki.gm system prompt</li>
                  <li>4. Modify the /gm command output format</li>
                  <li>5/6/7. View/Manage/Delete server-side context (The additional context of the /gm command)</li>
                  <li>Note: Requires administrator permissions for most actions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="help-command">
              <AccordionTrigger>The `/help` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /help</b></p>
                <p>Get comprehensive information about the bot</p>
                <ul>
                  <li>It links back to here!</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="stats-command">
              <AccordionTrigger>The `/stats` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /stats</b></p>
                <p>View detailed bot usage statistics</p>
                <ul>
                  <li>Shows the number of servers and unique users</li>
                  <li>Displays top 20 most used commands</li>
                  <li>Provides insights into the bots performance and popularity</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="report-command">
              <AccordionTrigger>The `/report` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /report [Message]</b></p>
                <p>Report issues or provide feedback to bot owners</p>
                <ul>
                  <li>Allows users to directly communicate with bot developers</li>
                  <li>Helps improve the bot by reporting bugs or suggesting features</li>
                  <li>Confirms successful submission of the report</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {selectedPage === "page1" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="important-facts">
              <AccordionTrigger>Important Facts</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Some commands require administrator permissions, or some require the Reviser permissions, as provided with /addreviser on Page 2.</li>
                  <li>For accurate military simulations, provide extensive context for the war. Include current war front information, equipment, and troop numbers for both sides.</li>
                  <li>AI prefers detailed and specific inputs. Shorter and less informative posts may lead to less accurate and comprehensive outputs. This may also lead to preference to certain economic styles, like megaproject spending.</li>
                  <li>When discussing economic topics like GDP growth, AI defaults to an assumption of 0% growth. To avoid accumulation of inaccurate GDP growth rates, provide current relevant growth figures in your context.</li>
                  <li>The /settings command is essential as it gives the AI context to understand the RPs world better. With /settings, each AI output is contextually tied to a &apos;global context&apos;, enhancing accuracy.</li>
                  <li>Without context, the AI might generate incorrect or made-up information. Always supply the AI with previous results or relevant context.</li>
                  <li>The AI takes any provided context as truth. It&#39;s crucial to use /settings properly and verify the accuracy of user inputs to prevent misleading the AI.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="addreviser-command">
              <AccordionTrigger>The `/addreviser` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /addreviser [Role]</b></p>
                <p>Add roles that can revise zuki.gm outputs</p>
                <ul>
                  <li>Requires administrator permissions</li>
                  <li>Can only be used in a server, not in DMs</li>
                  <li>Adds the specified role as a reviser for zuki.gm</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="revise-command">
              <AccordionTrigger>The `/revise` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /revise [Message Link] [New Content]</b></p>
                <p>Edit a previous zuki.gm message</p>
                <ul>
                  <li>Requires the user to have a reviser role</li>
                  <li>Uses the message link to identify the bot&apos;s message to edit</li>
                  <li>Applies changes based on the new content provided</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="war-command">
              <AccordionTrigger>The `/war` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /war [Side 1] [Side 2 (Optional)] [Previous Results (Optional)]</b></p>
                <p>Experimental War GM alternative</p>
                <ul>
                  <li>Simulates war scenarios between two sides</li>
                  <li>Can consider previous results for context</li>
                  <li>Provides detailed outcomes of the simulated conflict</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="un-command">
              <AccordionTrigger>The `/un` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /un [Option] [Text]</b></p>
                <p>United Nations RP helper</p>
                <ul>
                  <li>Options: generate, vote, propose, statement</li>
                  <li>Can generate UNSC memberships, simulate votes, create resolutions, or draft statements</li>
                  <li>Provides realistic UN-style responses and simulations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="realism-command">
              <AccordionTrigger>The `/realism` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /realism [Engine] [Post]</b></p>
                <p>Have the AI gauge the realism of something</p>
                <ul>
                  <li>Engine options: GPT-3.5, MixtralUncensored, PerplexityAI</li>
                  <li>Analyzes the realism of a given scenario or statement</li>
                  <li>Provides a detailed assessment of the likelihood and feasibility</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gm-command">
              <AccordionTrigger>The `/gm` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /gm [Engine] [Task] [Post] [WIWTK] [Previous (Optional)] [Context (Optional)] [Visual Context (Optional)]</b></p>
                <p>GM a post of your choosing</p>
                <ul>
                  <li>Multiple engine options available (e.g., GPT-3.5, GPT-4, Gemini Pro 1.5)</li>
                  <li>Various task types (e.g., Political, Economic, Military, War simulations)</li>
                  <li>Can consider previous results and additional context</li>
                  <li>Supports visual context for enhanced simulations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="approve-command">
              <AccordionTrigger>The `/approve` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /approve [GM Output Link] [Post in Channel] [Ping User] [Revision Instructions (Optional)]</b></p>
                <p>Approve and post GM outputs with optional revisions</p>
                <ul>
                  <li>Combines /revise functionality with posting to a specified channel</li>
                  <li>Can optionally revise the GM output before posting</li>
                  <li>Pings a specified user when posting the approved output</li>
                  <li>Requires permission to post in the target channel</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {selectedPage === "page2" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="important-facts">
              <AccordionTrigger>Important Facts</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>/sdx-v2 and some engines on /sd are donator-only.</li>
                  <li>The /sdx-v1, /sdx-v2 commands have the capability to generate explicit content.</li>
                  <li>Each model has built-in censors and is actively monitored to prevent illegal activities. Engaging in the creation of illegal content is strictly prohibited and will result in consequences.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sd-command">
              <AccordionTrigger>The `/sd` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /sd [Engine] [Style] [Prompt]</b></p>
                <p>A powerful image generator</p>
                <ul>
                  <li>Multiple engine options, some exclusive to donators</li>
                  <li>16 different art styles to choose from</li>
                  <li>Generates images based on the provided prompt</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sd-clip-command">
              <AccordionTrigger>The `/sd-clip` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /sd-clip [Engine] [Style] [Prompt] [Negative Prompt (Optional)]</b></p>
                <p>Additional generative tools for music and video</p>
                <ul>
                  <li>Engines: MusicGen, AnimateDiffusion, ZeroscopeXL</li>
                  <li>Can generate music or video based on prompts</li>
                  <li>Supports negative prompts for more control</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sdx-v2-command">
              <AccordionTrigger>The `/sdx-v2` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /sdx-v2 [Engine] [Style] [Prompt] [Negative Prompt (Optional)] [Detail Boost (Optional)]</b></p>
                <p>Advanced image generation (Donator-only)</p>
                <ul>
                  <li>12 high-quality engine options</li>
                  <li>Supports negative prompts and detail boost</li>
                  <li>Includes a rating system for generated images</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sdx-v1-command">
              <AccordionTrigger>The `/sdx-v1` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /sdx-v1 [Engine] [Style] [Prompt] [Negative Prompt (Optional)] [Detail Boost (Optional)]</b></p>
                <p>Free version of advanced image generation</p>
                <ul>
                  <li>11 engine options with various specialties</li>
                  <li>Similar features to sdx-v2, but with different models</li>
                  <li>Available to all users</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {selectedPage === "page3" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="important-facts">
              <AccordionTrigger>Important Facts</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>The bot offers various AI-powered tools for different purposes</li>
                  <li>Some features have quality control measures to ensure meaningful interactions</li>
                  <li>The bot can handle complex tasks like writing, analysis, and language processing</li>
                  <li>There are options for both filtered and unfiltered AI responses</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="check-command">
              <AccordionTrigger>The `/check` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /check [Message]</b></p>
                <p>Detect if a text was AI-written</p>
                <ul>
                  <li>Provides a detailed AI Content Detection Report</li>
                  <li>Shows percentage of AI-generated content and word count</li>
                  <li>Highlights potentially AI-generated sentences</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="translate-command">
              <AccordionTrigger>The `/translate` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /translate [Content]</b></p>
                <p>Translate text back to English</p>
                <ul>
                  <li>Uses an AI-powered translation service</li>
                  <li>Supports various input languages</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="write-command">
              <AccordionTrigger>The `/write` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /write [Task] [Engine] [Text] [Jailbreak] [MatchStyle (Optional)] [Context (Optional)] [PreviousResults (Optional)]</b></p>
                <p>AI Writing Assistant</p>
                <ul>
                  <li>Multiple task types: custom writing, RP posts, events, research, war moves, etc.</li>
                  <li>Various AI engines to choose from</li>
                  <li>Options for ethical considerations and style matching</li>
                  <li>Can consider previous results and additional context</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="quran-command">
              <AccordionTrigger>The `/quran` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /quran [Topic]</b></p>
                <p>Find a Quran verse for any need</p>
                <ul>
                  <li>Matches the given topic to the closest existing Quran verse</li>
                  <li>Always returns an authentic verse, never a fabricated one</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="bible-command">
              <AccordionTrigger>The `/bible` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /bible [Topic]</b></p>
                <p>Find a Bible verse for any need</p>
                <ul>
                  <li>Matches the given topic to the closest existing Bible verse</li>
                  <li>Always returns an authentic verse, never a fabricated one</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ask-command">
              <AccordionTrigger>The `/ask` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /ask [Bot] [Question]</b></p>
                <p>Talk to any AI of your choice</p>
                <ul>
                  <li>Multiple AI options: InternetGPT, MixtralUncensored, OpenAI, Claude-3.5, Research, PerplexityAI</li>
                  <li>Provides answers based on the chosen AIs capabilities</li>
                  <li>Research option provides relevant paper references</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tldr-command">
              <AccordionTrigger>The `/tldr` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /tldr [Message_Text]</b></p>
                <p>Summarizer command</p>
                <ul>
                  <li>Supports Discord and Google links, as well as plain text</li>
                  <li>Provides a concise summary of the input text</li>
                  <li>Useful for quickly understanding long content</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {selectedPage === "page4" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="important-facts">
              <AccordionTrigger>Important Facts</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>The bot offers image interpretation capabilities</li>
                  <li>Users can create call-like threads for communication</li>
                  <li>Various calculation tools are available for economic and demographic data</li>
                  <li>Some commands may require specific permissions in the server</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="interpret-command">
              <AccordionTrigger>The `/interpret` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /interpret [Image]</b></p>
                <p>Image interpretation AI</p>
                <ul>
                  <li>Analyzes uploaded images and provides a description</li>
                  <li>Supports various image file types</li>
                  <li>Uses advanced AI model for interpretation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="call-command">
              <AccordionTrigger>The `/call` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /call [User] [Type]</b></p>
                <p>Create a call-like thread with another user or AI</p>
                <ul>
                  <li>Options for private or public threads</li>
                  <li>Requires appropriate permissions to create threads</li>
                  <li>Cannot be used inside existing threads or DMs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hangup-command">
              <AccordionTrigger>The `/hangup` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /hangup</b></p>
                <p>End a call thread</p>
                <ul>
                <li>Can only be used by the person who initiated the call</li>
                  <li>Removes all users from the thread</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="calc-command">
              <AccordionTrigger>The `/calc` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /calc [CalcType] [Val1] [Val2] [Val3 (Optional)]</b></p>
                <p>Calculation command for various economic and demographic metrics</p>
                <ul>
                  <li>GDP per Capita calculation</li>
                  <li>Population Growth projection</li>
                  <li>Provides formatted results for easy reading</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="growth-command">
              <AccordionTrigger>The `/growth` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /growth [StartPop] [Average] [Years]</b></p>
                <p>Population Growth Calculator</p>
                <ul>
                  <li>Calculates future population based on starting population, growth rate, and years</li>
                  <li>Provides formatted population projection</li>
                  <li>Uses the same engine as the `/calc` command for consistency</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {selectedPage === "page5" && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="important-facts">
              <AccordionTrigger>Important Facts</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>The NPC loop is run by a different bot</li>
                  <li>The NPC system runs on webhooks</li>
                  <li>Some features are exclusive to donators</li>
                  <li>There are limits on the number of NPCs per server</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="npc-update-command">
              <AccordionTrigger>The `/npc-update` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /npc-update [Name of the NPC] [What to update] [New Data]</b></p>
                <p>Modify NPC Data</p>
                <ul>
                  <li>Update options: description, goals, interval, context, picture_url, channel, type</li>
                  <li>Choose to append or override existing information</li>
                  <li>Some updates (like picture and channel) have specific requirements</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="npc-autopost-command">
              <AccordionTrigger>The `/npc-autopost` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /npc-autopost [Name of the NPC] [Post Interval Hours] [Channel]</b></p>
                <p>Set Up Automatic Posting</p>
                <ul>
                  <li>Creates a webhook for the NPC in the specified channel</li>
                  <li>Sets up periodic autoposting based on the given interval</li>
                  <li>Requires manage_webhook permissions in the target channel</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="npc-talk-command">
              <AccordionTrigger>The `/npc-talk` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /npc-talk [Name of the NPC] [Your Message]</b></p>
                <p>Interact directly with an NPC!</p>
                <ul>
                  <li>Generates a response based on the NPCs data and your message</li>
                  <li>Updates the NPCs memory and goals after each interaction</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="npc-create-command">
              <AccordionTrigger>The `/npc-create` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /npc-create [Name] [Description] [Type] [Context] [Engine] [Goals]</b></p>
                <p>Craft a new NPC with rich backstory and purpose!</p>
                <ul>
                  <li>Choose from different NPC types: Company, Country, Character, AiAgent, EroticCharacter</li>
                  <li>Select an AI engine: GPT-4, Gemini Pro 1.5, or MixtralUncensored</li>
                  <li>Specify goals and context for more accurate roleplay</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="npc-delete-command">
              <AccordionTrigger>The `/npc-delete` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /npc-delete [Name of the NPC]</b></p>
                <p>Remove an NPC from existence.</p>
                <ul>
                  <li>Permanently deletes the specified NPC from the server</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="npc-list-command">
              <AccordionTrigger>The `/npc-list` command</AccordionTrigger>
              <AccordionContent>
                <p><b>Usage: /npc-list</b></p>
                <p>Review the NPCs that have been configured in your server.</p>
                <ul>
                  <li>Displays all NPCs created for the current server</li>
                  <li>Shows each NPCs name and descriptions (excluding webhook information)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
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
                  <AccordionItem value="time-help">
                    <AccordionTrigger>The `/time-help` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-help`</p>
                      <p>Displays help information for time-related commands.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-set">
                    <AccordionTrigger>The `/time-set` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-set [speed] [notify_interval] [day] [month] [year] [channel] [role] [voice_channel]`</p>
                      <p>Sets up your servers roleplay time system. Requires administrator permissions.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-info">
                    <AccordionTrigger>The `/time-info` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-info`</p>
                      <p>Displays information about your servers current time settings.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-do">
                    <AccordionTrigger>The `/time-do` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-do [operation]`</p>
                      <p>Manage your servers RP time. Operations include: Get Current Time, Toggle Time Progression, Delete Time Data.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-until">
                    <AccordionTrigger>The `/time-until` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-until [timestr]`</p>
                      <p>Calculate the real-life time until a specified fictional time. Use the format DD/MM/YYYY for the timestr parameter.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-del">
                    <AccordionTrigger>The `/time-del` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-del [object]`</p>
                      <p>Remove time-related configurations from the server, including Time Notification Channel, Time Notification Ping Role, and Voice Channel Update Channel.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-set-channel">
                    <AccordionTrigger>The `/time-set-channel` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-set-channel [channel]`</p>
                      <p>Set the channel where time update notifications will be posted.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-set-voice">
                    <AccordionTrigger>The `/time-set-voice` command</AccordionTrigger>
                    <AccordionContent>
                      <p>Usage: `/time-set-voice [voice_channel]`</p>
                      <p>Set the voice channel where the current time will be displayed.</p>
                    </AccordionContent>
                  </AccordionItem>
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
                Use the `/report` command to notify the zukijourney team of any issues!
              </li>
            </ul>
          </CardContent>
        </Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Made by @zukixa.</p>
          <p className="font-semibold mt-2">Thank you for using the zukijourney-bots!</p>
        </footer>
      </div>
    </div>
  );
}