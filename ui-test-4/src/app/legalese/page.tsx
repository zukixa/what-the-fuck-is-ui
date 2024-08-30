import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy & Terms of Service</h1>
      <Tabs defaultValue="privacy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          <TabsTrigger value="tos">Terms of Service</TabsTrigger>
        </TabsList>
        <div className="mt-6 border rounded-lg">
          <ScrollArea className="h-[60vh]">
            <TabsContent value="privacy" className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy for ZukiJourney Enterprise</h2>
              <p className="mb-4">Last updated: 8/30/2024</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>1. Information We Collect</AccordionTrigger>
                  <AccordionContent>
                    When interacting with our Services, we may collect and temporarily store:
                    <ul className="list-disc pl-5 mt-2">
                      <li>Message content you send when interacting with our bots (for sake of functionality).</li>
                      <li>Username and server name (for Discord-based services)</li>
                      <li>API request data (for zukijourney-api)</li>
                      <li>Timestamps of interactions</li>
                      <li>Device and browser information (where applicable)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>2. How We Use Your Information</AccordionTrigger>
                  <AccordionContent>
                    We use the collected information to:
                    <ul className="list-disc pl-5 mt-2">
                      <li>Provide the features and functionality of our Services</li>
                      <li>Improve and optimize the performance of our Services</li>
                      <li>Monitor usage and address technical issues</li>
                      <li>Respond to user support requests</li>
                      <li>Analyze usage patterns and enhance user experience</li>
                      <li>Develop new features and services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>3. Information Sharing & Disclosure</AccordionTrigger>
                  <AccordionContent>
                    We do not sell, trade, or rent users personal identification information to third parties. We may share generic aggregated demographic information not linked to personal identification for analytical or reporting purposes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>4. Data Retention and Deletion</AccordionTrigger>
                  <AccordionContent>
                    We retain user data only as long as necessary. To delete your information, submit a request through the appropriate channel for the service youre using. We will address your request promptly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>5. Changes to This Privacy Policy</AccordionTrigger>
                  <AccordionContent>
                    We reserve the right to update our Privacy Policy at any time. Your continued use of our Services after changes constitutes acceptance of the modified Privacy Policy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="tos" className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Terms of Service for ZukiJourney Enterprise</h2>
              <p className="mb-4">Last Updated: 8/30/2024</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
                  <AccordionContent>
                    By accessing or using any services provided by ZukiJourney Enterprise, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use our Services.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>2. User Responsibilities</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5">
                      <li>You must be at least 13 years old to use our Services.</li>
                      <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                      <li>You agree to use the Services only for lawful purposes.</li>
                      <li>You must not attempt to gain unauthorized access to any part of the Services.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>3. Intellectual Property</AccordionTrigger>
                  <AccordionContent>
                    The Services and their original content are owned by ZukiJourney Enterprise and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>4. Limitation of Liability</AccordionTrigger>
                  <AccordionContent>
                    To the fullest extent permitted by applicable law, ZukiJourney Enterprise shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>5. Changes to Terms</AccordionTrigger>
                  <AccordionContent>
                    We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  )
}