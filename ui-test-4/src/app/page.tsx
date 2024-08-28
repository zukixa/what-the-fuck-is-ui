'use client';
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
              zukijourney-api v2.9
            </h1>
            <p className="text-xl text-muted-foreground">The largest multi-ai API of its kind!</p>
          </div>
          <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="text-sm">Free! (part.)</Badge>
            <Badge variant="secondary" className="text-sm">Open Source!</Badge>
            <Badge variant="secondary" className="text-sm">Number one! :&gt;</Badge>
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
              <CardTitle className="text-2xl">Welcome to zukijourney-api documentation!</CardTitle>
              <CardDescription>Your gateway to many AI, in one place!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This guide provides a comprehensive documentation of all essential facets of the APIs operation. The overview is generally kept 100% up-to-date and should be regarded as the definitive source of information for the API.</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/zukixa/cool-ai-stuff" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  See why we are #1
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/zukijourney/bots-docs" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Bots Documentation
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
            title="Easy Integration"
            description="Use the OpenAI client for seamless API access, and have the power of AI in your hand!"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            title="High Performance"
            description="Over 170+ models and 6 different endpoints supported! (In the OpenAI format only)."
          />
          <FeatureCard
            icon={<Gift className="h-8 w-8 text-green-500" />}
            title="Flexible Availability"
            description="Various tiers to suit your needs of usage & model availability!"
          />
          <FeatureCard
            icon={<Key className="h-8 w-8 text-blue-500" />}
            title="Secure Access"
            description="IP-locked keys for enhanced security & privacy, no more key leaks!"
          />
        </div>
        <Card id="quick-start">
          <CardHeader>
            <CardTitle className="text-3xl">Quick Start Guide</CardTitle>
            <CardDescription>Get started with zukijourney-api in minutes!</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Join our Discord:</strong> Visit <a href="https://discord.gg/zukijourney" className="text-blue-500 hover:underline">discord.gg/zukijourney</a> to join our community. This is also where you will be able to generate your key!
              </li>
              <li>
                <strong>Get your API key:</strong> Use the `/key` command in the Discord server after passing verification to generate your unique API key.
              </li>
              <li>
                <strong>Understand the token system:</strong> The zukijourney-api utilizes a unique token system for its usage. Make sure to understand it completely!
              </li>
              <li>
                <strong>Use the key in your code:</strong> For example, here is how to use the key with python:
                <CodeBlock
                  language="python"
                  code={`# pip install -U openai
from openai import OpenAI

client = OpenAI(base_url="https://zukijourney.xyzbot.net/v1", api_key='your-api-key-here')

response = client.chat.completions.create(
    model="caramelldansen-1", # or gpt-4o-mini, claude-3-haiku, gemini-1.5-flash, etc...
    messages=[{"role": "user", "content": "Hello, AI!"}]
)

print(response.choices[0].message.content)`}
                />
              </li>
            </ol>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/playground">
                Or try your key in the Playground!
              </Link>
            </Button>
          </CardFooter>
        </Card>



        <Tabs defaultValue="usage" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="usage">Core Information</TabsTrigger>
            <TabsTrigger value="quirks">API Quirks</TabsTrigger>
            <TabsTrigger value="code-samples">Code Samples</TabsTrigger>
            <TabsTrigger value="token-system">Pricing / Token System</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Important! Read this, and all other tabs, very carefully!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>The API prides itself on being open-source! Our codebase can be seen here: <a href="https://github.com/zukijourney/api-oss" className="text-blue-500 hover:underline">zukijourney-api</a></li>
                      <li>The API only supports the OpenAI format. We will not support another format, like v1/message from Anthropic.</li>
                      <li>The API is distinguished into two different formats. v1 and unf. v1 is equivalent to the OpenAI format, but it has moderation built into itself. unf, with lower limits, has this moderation removed. This differentiation is to distribute traffic between &quot;AI Roleplayers&quot; and others.</li>
                      <li>For each endpoint, all of our available models can be seen on our <a href="https://zukijourney.xyzbot.net/v1/models" className="text-blue-500 hover:underline">v1/models page</a> or on the <a href="https://zukijourney.xyzbot.net/unf/models" className="text-blue-500 hover:underline">unf/models page</a></li>                      
                      <li>All models are courtesy of their respective owners, as listed in v1/models. We do not own, control, or have affiliations with these entities.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Global, API-Wide Rate Limits</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>/unf/ endpoints:</strong> 4 requests per minute per key per IP</li>
                      <li><strong>/v1/ endpoints:</strong> 12 requests per minute per key per IP</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quirks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Zukijourney Quirks: Important Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="request-handling">
                    <AccordionTrigger>Magic with the Requests.</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Request Reuse:</strong> (Currently disabled) Requests that are 99% similar to previous ones will receive the same response to conserve usage. This can be called a cache.</li>
                        <li><strong>Handling Simple Requests:</strong> Short, simple, or unnecessary requests will be handled automatically by our own instance of llama-3.1-8b-instruct. We reserve the right to potentially downgrade the model chosen as a result in order to prevent wasting precious AI resources on a request that may not need it. Subscribers and enterprise-tier users are exempt from this.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="api-key-management">
                    <AccordionTrigger>Api-Key Management</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>IP-Locked Keys:</strong> All (except subscriber and enterprise) API-Keys are IP-LOCKED. This means that only one IP at a time can utilize your key. This is a measure of security. Use `/resetip` command to change the IP. Automating this command is prohibited.</li>
                        <li><strong>Key Suspension:</strong> Leaving the ZukiJourney server will suspend your Api-Key. This is a measure of security. Rejoining doesnt automatically restore access, request renewed access by opening a ticket.</li>
                        <li><strong>Account and API Usage:</strong> One account per person. Misuse will trigger automatic punitive measures.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="caramelldansen-1">
                    <AccordionTrigger>caramelldansen-1</AccordionTrigger>
                    <AccordionContent>
                      <p>Our in-house developed LLM model, fine-tuned on Mixtral-8x22b. Available at 0.25x cost for all users, with -plus version for donator+ tiers with slightly better performance!</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code-samples" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Code Samples</CardTitle>
                <CardDescription>Explore our code samples and API tests below:</CardDescription>
              </CardHeader>
              <CardContent>
  <Tabs defaultValue="api-tests">
    <TabsList>
      <TabsTrigger value="api-tests">API Tests</TabsTrigger>
      <TabsTrigger value="python">Python</TabsTrigger>
      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
      <TabsTrigger value="java">Java</TabsTrigger>
    </TabsList>
    <TabsContent value="api-tests">
      <div className="space-y-4">
        <p>
          Our In-Production API Tests / Code Samples can be found in the zukijourney-tests repository. Explore it here: {" "}
          <a 
            href="https://github.com/zukijourney/api-tests" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            API-Tests
          </a>
        </p>
        <p>
          We utilize these code samples as part of our internal testing to verify whether certain parts of the API are operational.
        </p>
        <p>
          All of those samples are available in Python, using OpenAIs Python SDK 1.0.0+. However, you can convert them to any programming language using{" "}
          <a 
            href="https://www.bing.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            bing.com
          </a>s copilot. Simply instruct it to use the appropriate HTTP client, like Axios for JavaScript.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="python">
      <CodeBlock
        language="python"
        code={`from openai import OpenAI

client = OpenAI(base_url="https://zukijourney.xyzbot.net/v1", api_key='zu-...')

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What's the weather like today?"}
    ]
)

print(response.choices[0].message.content)`}
      />
    </TabsContent>
    <TabsContent value="javascript">
      <CodeBlock
        language="javascript"
        code={`import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://zukijourney.xyzbot.net/v1',
  apiKey: 'zu-...',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: "What's the weather like today?" }
    ],
  });

  console.log(response.choices[0].message.content);
}

main();`}
      />
    </TabsContent>
    <TabsContent value="java">
      <CodeBlock
        language="java"
        code={`import com.theokanning.openai.OpenAiService;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;

import java.util.Arrays;

public class ZukiJourneyExample {
    public static void main(String[] args) {
        String token = "zu-...";
        OpenAiService service = new OpenAiService(token);

        ChatCompletionRequest request = ChatCompletionRequest.builder()
                .model("gpt-3.5-turbo")
                .messages(Arrays.asList(
                        new ChatMessage("system", "You are a helpful assistant."),
                        new ChatMessage("user", "What's the weather like today?")
                ))
                .build();

        String response = service.createChatCompletion(request).getChoices().get(0).getMessage().getContent();
        System.out.println(response);
    }
}`}
      />
    </TabsContent>
  </Tabs>
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Community-Contributed Wrappers:</h3>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>JAVASCRIPT:</strong> <a href="https://github.com/Sabsterrexx/zukijs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukijs</a></li>
      <li><strong>TYPESCRIPT:</strong> <a href="https://github.com/eL1fe/zukiTS" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukiTS</a></li>
      <li><strong>JAVA:</strong> <a href="https://github.com/Sabsterrexx/zukiJava" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukiJava</a></li>
      <li><strong>PYTHON:</strong> <a href="https://github.com/Launchers-1/zukiPy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukiPy</a></li>
      <li><strong>ASSEMBLY:</strong> <a href="https://github.com/programmer1o1/ZukiChatRequestAssembly" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ZukiChatRequestAssembly</a></li>
      <li><strong>FORTRAN:</strong> <a href="https://github.com/programmer1o1/ZukiChatRequestFortran" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ZukiChatRequestFortran</a></li>
    </ul>
  </div>
</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="token-system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Token System Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="daily-grant">
                    <AccordionTrigger>Daily Token Grant</AccordionTrigger>
                    <AccordionContent>
                      <p>Every 24 hours, you are eligible for a token grant if your current token balance is below ~15% of your daily token allowance.</p>
                      <p> Use the `/daily` command on the Discord to apply.</p>
                      <p>You can check both of these values anytime on the Discord Server with /lookup.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="token-equivalence">
                    <AccordionTrigger>Token Equivalence</AccordionTrigger>
                    <AccordionContent>
                      <p>1 OpenAI token ~ 1 ZukiJourney token</p>
                      <p>(Technically: 1 ZukiJourney token ~ 1 OpenAI token * the Cost Multiplier per Model)</p>
                      <p>Example: 200 (system prompt) + 20 (request) + 180 (response) = cost of 400 ZukiJourney tokens</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cost-multipliers">
  <AccordionTrigger>Cost Multipliers by Model</AccordionTrigger>
  <AccordionContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Multiplier</TableHead>
          <TableHead>Models/Categories</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1.5x</TableCell>
          <TableCell>gpt-4-1106-preview and later, claude-3-opus and later, gpt-4-vision-preview</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1.25x</TableCell>
          <TableCell>gpt-4 and later, claude-3-sonnet</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1x</TableCell>
          <TableCell>gpt-4o-mini + all non-4 gpt models, claude-3-haiku and before, All Gemini/Mistral-Series models</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>0.5x</TableCell>
          <TableCell>all other models not developed by zukijourney</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>0.25x</TableCell>
          <TableCell>our own models: caramelldansen-1 & caramelldansen-1-plus</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="static-costs">
  <AccordionTrigger>Static Cost per Model/Endpoint</AccordionTrigger>
  <AccordionContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Static Cost (Tokens)</TableHead>
          <TableHead>Models/Categories</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>42,000</TableCell>
          <TableCell>Midjourney</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2,500</TableCell>
          <TableCell>DALLE-2 and Later, Stable-Diffusion-3-Large, Stable-Image-Ultra/Core and later</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>250</TableCell>
          <TableCell>Stable-Diffusion-3-Medium and the Flux Model series</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>100</TableCell>
          <TableCell>All Image Models provided by Prodia. All requests in the Audio, Embeddings, Image-Upscaling endpoints</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>10</TableCell>
          <TableCell>All requests in the Moderations and Text-Translations endpoint</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </AccordionContent>
</AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Daily Token Allowances (1 Token ~ 1 OpenAI Token)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>How to get?</TableHead>
                  <TableHead>Tokens/Day</TableHead>
                  <TableHead>Messages/Day</TableHead>
                  <TableHead>Key Type</TableHead>
                  <TableHead>Support Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>@Member</TableCell>
                  <TableCell>Join the server! discord.gg/zukijourney</TableCell>
                  <TableCell>22,500</TableCell>
                  <TableCell>~126</TableCell>
                  <TableCell>IP-Locked</TableCell>
                  <TableCell>Low</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>@Booster</TableCell>
                  <TableCell>Boost the server! It will last for as long as you keep the boost active.</TableCell>
                  <TableCell>200,000</TableCell>
                  <TableCell>~400</TableCell>
                  <TableCell>IP-Locked</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>@Donator</TableCell>
                  <TableCell>A one-time donation of at least $5.00.</TableCell>
                  <TableCell>200,000</TableCell>
                  <TableCell>~400</TableCell>
                  <TableCell>IP-Locked</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>@Early Supporter/Contributor</TableCell>
                  <TableCell>Unavailable/Contribute to the project.</TableCell>
                  <TableCell>225,000</TableCell>
                  <TableCell>~450</TableCell>
                  <TableCell>IP-Locked</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>@Subscriber</TableCell>
                  <TableCell>Donation of at least $10.00 monthly.</TableCell>
                  <TableCell>450,000</TableCell>
                  <TableCell>~900</TableCell>
                  <TableCell>IP-Free</TableCell>
                  <TableCell>High</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>@Enterprise</TableCell>
                  <TableCell>Donation of at least $100.00 monthly.</TableCell>
                  <TableCell>4,000,000</TableCell>
                  <TableCell>~10,000</TableCell>
                  <TableCell>IP-Free</TableCell>
                  <TableCell>Highest</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
  <CardHeader>
    <CardTitle>Donate for Higher Tiers</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="mb-4">Support zukijourney-api and gain access to higher tiers with more benefits!</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Donate on <a href="https://ko-fi.com/zukixa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">KoFi</a> with various payment methods.</li>
      <li>For crypto payments, join the <a href="https://discord.gg/zukijourney" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">zukijourney Discord server</a> and coordinate via the <a href="https://discord.com/channels/1090022628946886726/1099424338287014029/1099426357219438612" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">tickets channel</a>.</li>
      <li>Any donation receives additional benefits from the zuki.gm bot. Check details <a href="https://discord.com/channels/1090022628946886726/1147595903537000539/1147600594316578926" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">on the Discord Server</a>.</li>
      <li>Crypto payments: Any Coinbase-supported cryptocurrency is accepted. Contact executives via the #tickets channel for details.</li>
      <li>Enterprise-level donors can request specific arrangements before donating by opening a ticket in the same channel.</li>
    </ul>
    <div className="mt-4">
      <Button variant="outline" asChild>
        <a href="https://ko-fi.com/zukixa" target="_blank" rel="noopener noreferrer">
          <Gift className="mr-2 h-4 w-4" />
          Donate on KoFi
        </a>
      </Button>
    </div>
  </CardContent>
</Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Thank you to @Leander, @voidii, @perl, @sobhansajjadii, @Lukinhas, @Launchers, and @sabsterrexx for being the best people from the AI sphere.</p>
          <p>Yall were the inspiration, and my continued motivation, for all of this ❤️</p>
          <p className="font-semibold mt-2">~zukixa</p>
          <span className="text-xs text-gray-500 mt-2 block">
                Everything may be fabricated and therefore not real, the team is unaware of any illegal activities, documentation will not be taken as admission of guilt.
          </span>
        </footer>
      </div>
    </div>
  );
}