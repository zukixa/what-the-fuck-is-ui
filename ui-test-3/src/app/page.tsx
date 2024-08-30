"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, Star, ExternalLink } from 'lucide-react'
import { getApiData } from '@/components/getDiscordData'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortBySelect } from '@/components/sortBySelect'
import { LoadingCards } from '@/components/loadingCards'
interface Tier {
  name: string;
  description: string;
  color: string;
}

interface Service {
  name: string;
  tier: string;
  users: number;
  nsfwAllowed?: string;
  openSource?: boolean;
  openSourceLink?: string;
  owners: string;
  ownersLink?: string;
  models?: string;
  modelsLink?: string;
  notes: string;
  notesLink?: string;
  discord?: string;
  limitsLink?: string;
  performance?: {
    gpt4?: number;
    claude3?: number;
    gemini?: number;
    llama?: number;
    availability?: number;
  };
  modelAvailability?: {
    'GPT-4'?: '✅' | '💰' | '❌';
    'Claude-3'?: '✅' | '💰' | '❌';
    'Gemini-1.5'?: '✅' | '💰' | '❌';
    'Llama-3.1-405b'?: '✅' | '💰' | '❌';
    'Midjourney'?: '✅' | '💰' | '❌';
    'DALL-E-3'?: '✅' | '💰' | '❌';
    'Stable-Image-Ultra'?: '✅' | '💰' | '❌';
    'Stable-Diffusion-3'?: '✅' | '💰' | '❌';
  };
  endpointCoverage?: {
    'Text-To-Speech'?: '✅' | '❌';
    'Speech-To-Text'?: '✅' | '❌';
    'Embeddings'?: '✅' | '❌';
    'Audio'?: '✅' | '❌';
    'Translation'?: '✅' | '❌';
    'Image-Upscale'?: '✅' | '❌';
  };
}




export default function Component() {
  
  const [services, setApiData] = useState<Service[]>([])
  const [activeTab, setActiveTab] = useState('overview');
  const [overviewSorting, setOverviewSorting] = useState<'Members' | 'Open Source' | 'Tier'>('Members');
  const [activeTier, setActiveTier] = useState<string>(''); // Set appropriate default value or type
  const [activeModelsTab, setActiveModelsTab] = useState('availability');
  const [modelAvailabilitySorting, setModelAvailabilitySorting] = useState<'GPT-4' | 'Claude-3' | 'Gemini-1.5' | 'Llama-3.1-405b' | 'Midjourney' | 'DALL-E-3' | 'Stable-Image-Ultra' | 'Stable-Diffusion-3' | ''>('');
  const [endpointCoverageSorting, setEndpointCoverageSorting] = useState<'Text-To-Speech' | 'Speech-To-Text' | 'Embeddings' | 'Audio' | 'Translation' | 'Image-Upscale' | ''>('');
  const [performanceSorting, setPerformanceSorting] = useState<'gpt4' | 'claude3' | 'gemini' | 'llama' | 'availability' | ''>('');
  const tiers: Tier[] = [
    {
      name: "Tier 1",
      description: "Established, Premium-Service AI API Leaders",
      color: "bg-yellow-500",
    },
    {
      name: "Tier 2",
      description: "Standard, Basic AI API Services",
      color: "bg-gray-500",
    },
    {
      name: "Tier 3",
      description: "Experimental, Unstable, Open-Access AI APIs",
      color: "bg-[rgb(205,127,50)]",
    },
    {
      name: "Tier 3.5",
      description: "Caution Advised: Questionable AI API Offerings",
      color: "bg-red-500",
    },
    {
      name: "Tier 4",
      description: "Potentially Misleading AI API Offerings",
      color: "bg-purple-500",
    },
    {
      name: "Non-Tiered",
      description: "Non-API AI Servers",
      color: "bg-blue-500",
    },
  ]
  useEffect(() => {
    async function fetchData() {
      const data = await getApiData();
      setApiData(data as Service[]);
    }
    fetchData();
  }, []);
  
  const isLoading = !services.length;

  
  const renderServiceCard = (service: Service) => {
    const renderNote = (note: string) => {
      const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;
  
      while ((match = regex.exec(note)) !== null) {
        if (match.index > lastIndex) {
          parts.push(note.slice(lastIndex, match.index));
        }
        parts.push(
          <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" className="underline">
            {match[1]}
          </a>
        );
        lastIndex = regex.lastIndex;
      }
  
      if (lastIndex < note.length) {
        parts.push(note.slice(lastIndex));
      }
  
      return <>{parts}</>;
    };
  
    return (
      <Card key={service.name} className={`flex flex-col ${tiers.find(t => t.name === service.tier)?.color || 'bg-blue-500'}`}>
        <CardHeader className="flex-grow">
          <CardTitle className="flex items-center justify-between text-white">
            {service.name}
            {service.tier && <Badge variant="secondary">{service.tier}</Badge>}
          </CardTitle>
          <CardDescription className="text-white">{`${service.users.toLocaleString()} users`}</CardDescription>
        </CardHeader>
        <CardContent className="text-white">
          {service.notes && (
            <p className="mb-2"><strong>Notes: </strong> {renderNote(service.notes)}</p>
          )}
          {service.nsfwAllowed && (
            <p className="mb-2"><strong>NSFW/RP: </strong> {service.nsfwAllowed}</p>
          )}
          {service.openSource !== undefined && (
            <p className="mb-2"><strong>Open Source: </strong> 
              {service.openSource ? (
                service.openSourceLink ? (
                  <a href={service.openSourceLink} target="_blank" rel="noopener noreferrer" className="underline">Yes</a>
                ) : "Yes"
              ) : "No"}
            </p>
          )}
          {service.owners && (
            <p className="mb-2"><strong>Owner(s): </strong> 
              {service.ownersLink ? (
                <a href={service.ownersLink} target="_blank" rel="noopener noreferrer" className="underline">{service.owners}</a>
              ) : service.owners}
            </p>
          )}
          {service.models && service.modelsLink && (
            <Button variant="outline" size="sm" className="mt-2 text-black" onClick={() => window.open(service.modelsLink, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View Models
            </Button>
          )}
          {service.limitsLink && (
            <Button variant="outline" size="sm" className="mt-2 ml-2 text-black" onClick={() => window.open(service.limitsLink, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Limits/Pricing
            </Button>
          )}
          {service.discord && (
            <Button variant="outline" size="sm" className="mt-2 text-black" onClick={() => window.open(service.discord, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Discord
            </Button>
          )}
        </CardContent>
      </Card>
    );
  };
  

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">cool ai stuff!</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive overview of AI APIs offering free usage of various AI models and related.
        </p>
      </header>

      <Card className="bg-yellow-100 dark:bg-yellow-900">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2" />
            Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We are not endorsing any of the listed services! Some of them might be considered controversial. We are not responsible for any legal, technical or any other damage caused by using the listed services. Data is provided without warranty of any kind. Use these at your own risk!
          </p>
        </CardContent>
      </Card>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tiers">Tiers</TabsTrigger>
          <TabsTrigger value="models">Models & Endpoints</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="mb-4">
          <SortBySelect
                trigger="Sort by"
                items={['Members', 'Open Source', 'Tier']}
                activeSelect={overviewSorting}
                setSelect={setOverviewSorting}
            />
            
            
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <div className="flex items-center justify-center col-span-full">
                <LoadingCards numberOfCards={20} />
              </div>
            ) : (
              services
                .filter(s => ["Tier 1", "Tier 2", "Tier 3"].includes(s.tier))
                .sort((a, b) => {
                  if (overviewSorting === 'Members') return (b.users ?? 0) - (a.users ?? 0);
                  if (overviewSorting === 'Open Source') return (b.openSource ? 1 : 0) - (a.openSource ? 1 : 0);
                  if (overviewSorting === 'Tier') return a.tier.localeCompare(b.tier);
                  return 0;
                })
                .map(renderServiceCard)
            )}
          </div>

        </TabsContent>
        <TabsContent value="tiers">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2" />
                Tier Determination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The tier of each service is determined based on the following factors: number of users, NSFW/RP policy, open source status, stability & longevity of the service, and its features/capabilities.
              </p>
            </CardContent>
          </Card>
          <Tabs value={activeTier} onValueChange={setActiveTier}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-4">
              {tiers.map(tier => (
                <TabsTrigger key={tier.name} value={tier.name} className={`${tier.color} text-white max-w-[220px]`}>
                  {tier.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {tiers.map(tier => (
              <TabsContent key={tier.name} value={tier.name}>
                <Card className={`${tier.color} text-white mb-4`}>
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription className="text-white">
                      {tier.description || 'No description available'}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {services.filter(s => s.tier === tier.name).map(service => {
                    if (!service) return null; // Skip if service is undefined
                    return renderServiceCard(service);
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        <TabsContent value="models">
          <Tabs value={activeModelsTab} onValueChange={setActiveModelsTab}>
            <TabsList>
              <TabsTrigger value="availability">Model Availability</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoint Coverage</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="availability">
              <Card>
                <CardHeader>
                  <CardTitle>Model Availability</CardTitle>
                  <CardDescription>Overview of supported models by service (Free Tier)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <SortBySelect 
                      trigger='Sort by'
                      items={['GPT-4', 'Claude-3', 'Gemini-1.5', 'Llama-3.1-405b', 'Midjourney', 'DALL-E-3', 'Stable-Image-Ultra', 'Stable-Diffusion-3']}
                      activeSelect={modelAvailabilitySorting}
                      setSelect={setModelAvailabilitySorting}
                    />
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left">Service</th>
                          <th>GPT-4</th>
                          <th>Claude-3</th>
                          <th>Gemini-1.5</th>
                          <th>Llama-3.1-405b</th>
                          <th>Midjourney</th>
                          <th>DALL-E-3</th>
                          <th>Stable-Image-Ultra</th>
                          <th>Stable-Diffusion-3</th>
                        </tr>
                      </thead>
                      <tbody>
                      {services
                        .sort((a, b) => {
                          if (modelAvailabilitySorting === '') return 0;
                          const aAvailability = a.modelAvailability?.[modelAvailabilitySorting] === '✅' ? 1 : 0;
                          const bAvailability = b.modelAvailability?.[modelAvailabilitySorting] === '✅' ? 1 : 0;
                          return bAvailability - aAvailability;
                        })
                        .map((service) => {
                          const tierColor = tiers.find(t => t.name === service.tier)?.color || 'bg-gray-200';
                          return (
                            <tr key={service.name} className={`${tierColor} bg-opacity-50 hover:bg-opacity-75 transition-colors`}>
                              <td className={`font-semibold ${tierColor === 'bg-purple-500' || tierColor === 'bg-blue-500' ? 'text-white' : ''}`}>
                                {service.name}
                              </td>
                              <td className="text-center">{service.modelAvailability?.['GPT-4'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['Claude-3'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['Gemini-1.5'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['Llama-3.1-405b'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['Midjourney'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['DALL-E-3'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['Stable-Image-Ultra'] ?? '❌'}</td>
                              <td className="text-center">{service.modelAvailability?.['Stable-Diffusion-3'] ?? '❌'}</td>
                            </tr>
                          );
                        })}

                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="endpoints">
              <Card>
                <CardHeader>
                  <CardTitle>Endpoint Coverage</CardTitle>
                  <CardDescription>Overview of supported endpoints by service (Free Tier)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <SortBySelect 
                      trigger='Sort by'
                      items={['Text-To-Speech', 'Speech-To-Text', 'Embeddings', 'Audio', 'Translation', 'Image-Upscale']}
                      activeSelect={endpointCoverageSorting}
                      setSelect={setEndpointCoverageSorting}
                    />
                    
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left">Service</th>
                          <th>Text-To-Speech</th>
                          <th>Speech-To-Text</th>
                          <th>Embeddings</th>
                          <th>Audio</th>
                          <th>Translation</th>
                          <th>Image-Upscale</th>
                        </tr>
                      </thead>
                      <tbody>
                      {services
                        .sort((a, b) => {
                          if (endpointCoverageSorting === '') return 0;
                          
                          const aCoverage = a.endpointCoverage?.[endpointCoverageSorting] === '✅' ? 1 : 0;
                          const bCoverage = b.endpointCoverage?.[endpointCoverageSorting] === '✅' ? 1 : 0;
                          
                          return bCoverage - aCoverage;
                        })
                        .map((service) => {
                          const tierColor = tiers.find(t => t.name === service.tier)?.color || 'bg-gray-200';
                          
                          return (
                            <tr key={service.name} className={`${tierColor} bg-opacity-50 hover:bg-opacity-75 transition-colors`}>
                              <td className={`font-semibold ${tierColor === 'bg-purple-500' || tierColor === 'bg-blue-500' ? 'text-white' : ''}`}>
                                {service.name}
                              </td>
                              <td className="text-center">{service.endpointCoverage?.['Text-To-Speech'] ?? '❌'}</td>
                              <td className="text-center">{service.endpointCoverage?.['Speech-To-Text'] ?? '❌'}</td>
                              <td className="text-center">{service.endpointCoverage?.['Embeddings'] ?? '❌'}</td>
                              <td className="text-center">{service.endpointCoverage?.['Audio'] ?? '❌'}</td>
                              <td className="text-center">{service.endpointCoverage?.['Translation'] ?? '❌'}</td>
                              <td className="text-center">{service.endpointCoverage?.['Image-Upscale'] ?? '❌'}</td>
                            </tr>
                          );
                        })}

                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                  <CardDescription>Overview of service performance metrics (Free Tier)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <SortBySelect 
                      trigger='Sort by'
                      items={['gpt4', 'claude3', 'gemini', 'llama', 'availability']}
                      activeSelect={performanceSorting}
                      setSelect={setPerformanceSorting}
                    />
                   
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left">Service</th>
                          <th>Latency</th>
                          <th>Throughput</th>
                          <th>Uptime</th>
                          <th>Support</th>
                        </tr>
                      </thead>
                      <tbody>
  {services
    .sort((a, b) => {
      if (!modelAvailabilitySorting) return 0;

      // Use type assertion to tell TypeScript that modelAvailabilitySorting is a valid key
      const aValue = (a.modelAvailability?.[modelAvailabilitySorting as keyof typeof a.modelAvailability] ?? '❌') as '✅' | '💰' | '❌';
      const bValue = (b.modelAvailability?.[modelAvailabilitySorting as keyof typeof b.modelAvailability] ?? '❌') as '✅' | '💰' | '❌';

      const getValueForSort = (emoji: '✅' | '💰' | '❌'): number => {
        switch (emoji) {
          case '✅': return 2;
          case '💰': return 1;
          case '❌': return 0;
          default: return -1;
        }
      };

      return getValueForSort(bValue) - getValueForSort(aValue);
    })
    .map((service) => {
      const tierColor = tiers.find(t => t.name === service.tier)?.color || 'bg-gray-200';
      return (
        <tr key={service.name} className={`${tierColor} bg-opacity-50 hover:bg-opacity-75 transition-colors`}>
          <td className={`font-semibold ${tierColor === 'bg-purple-500' || tierColor === 'bg-blue-500' ? 'text-white' : ''}`}>{service.name}</td>
          <td className="text-center">{service.modelAvailability?.['GPT-4'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['Claude-3'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['Gemini-1.5'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['Llama-3.1-405b'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['Midjourney'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['DALL-E-3'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['Stable-Image-Ultra'] ?? '❌'}</td>
          <td className="text-center">{service.modelAvailability?.['Stable-Diffusion-3'] ?? '❌'}</td>
        </tr>
      );
    })}
</tbody>


                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};
  
