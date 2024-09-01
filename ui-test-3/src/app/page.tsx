"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, Star, ExternalLink } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Tier {
  name: string;
  description: string;
  color: string;
}

interface Service {
  name: string;
  tier: string;
  users: number;
  nsfwAllowed: string;
  openSource: boolean;
  openSourceLink?: string;
  owners: string;
  ownersLink?: string;
  models: string;
  modelsLink: string;
  notes: string;
  notesLink?: string;
  discord: string;
  limitsLink: string;
  performance: {
    gpt4: number;
    claude3: number;
    gemini: number;
    llama: number;
    availability: number;
  };
  modelAvailability: {
    'GPT-4': '✅' | '💰' | '❌';
    'Claude-3': '✅' | '💰' | '❌';
    'Gemini-1.5': '✅' | '💰' | '❌';
    'Llama-3.1-405b': '✅' | '💰' | '❌';
    'Midjourney': '✅' | '💰' | '❌';
    'DALL-E-3': '✅' | '💰' | '❌';
    'Stable-Image-Ultra': '✅' | '💰' | '❌';
    'Stable-Diffusion-3': '✅' | '💰' | '❌';
  };
  endpointCoverage: {
    'Text-To-Speech': '✅' | '❌';
    'Speech-To-Text': '✅' | '❌';
    'Embeddings': '✅' | '❌';
    'Audio': '✅' | '❌';
    'Translation': '✅' | '❌';
    'Image-Upscale': '✅' | '❌';
  };
}

interface NonTieredService {
  name: string;
  users: number;
  provides: string;
  notes: string;
  notesLink?: string;
  discord: string;
}

interface PerformanceMetrics {
  [key: string]: {
    [model: string]: {
      average_response_time: number;
      availability_percentage: number;
    }
  }
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeTier, setActiveTier] = useState("Tier 1")
  const [activeModelsTab, setActiveModelsTab] = useState("availability")
  const [overviewSorting, setOverviewSorting] = useState<'members' | 'openSource' | 'tier'>('members');
  const [performanceSorting, setPerformanceSorting] = useState<'gpt4' | 'claude3' | 'gemini' | 'llama' | 'availability'>('availability');
  type ModelAvailabilityKey = keyof Service['modelAvailability'];
  type EndpointCoverageKey = keyof Service['endpointCoverage'];
  const [modelAvailabilitySorting, setModelAvailabilitySorting] = useState<ModelAvailabilityKey | ''>('');
  const [endpointCoverageSorting, setEndpointCoverageSorting] = useState<EndpointCoverageKey | ''>('');
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const fetchPerformanceMetrics = async () => {
      try {
        const response = await fetch('/api/metrics');
        if (!response.ok) {
          throw new Error('Failed to fetch performance metrics');
        }
        const data = await response.json();
        setPerformanceMetrics(data);
      } catch (error) {
        console.error('Error fetching performance metrics:', error);
      }
    };

    fetchPerformanceMetrics();
  }, []);

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

  const services: Service[] = [
    {
      name: "zukijourney",
      tier: "Tier 1",
      users: 5265,
      nsfwAllowed: "Use /unf/chat... not /v1/",
      openSource: true,
      openSourceLink: "https://github.com/zukixa/zukijourney-api",
      owners: "Our Team",
      ownersLink: "https://github.com/orgs/zukijourney/people",
      models: "Models",
      modelsLink: "https://zukijourney.xyzbot.net/v1/models",
      notes: "Largest & Oldest GPT-4 API still continuously around. Offers other popular AI-related Bots too.",
      discord: "https://discord.com/invite/Y4J6XXnmQ6",
      limitsLink: "https://github.com/zukijourney/api-docs/blob/main/token-system/README.md",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '💰', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '💰', 'Stable-Diffusion-3': '✅' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '✅' },
    },
    {
      name: "NagaAI",
      tier: "Tier 1",
      users: 3143,
      nsfwAllowed: "Forbidden",
      openSource: false,
      owners: "ZentixUA",
      ownersLink: "https://github.com/ZentixUA",
      models: "Models",
      modelsLink: "https://api.naga.ac/v1/models",
      notes: "Honorary successor to ChimeraGPT, the largest API in history (15k users).",
      discord: "https://discord.gg/JxRBXBhabu",
      limitsLink: "https://naga.ac/dashboard/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '💰', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '💰', 'DALL-E-3': '💰', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '💰' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '❌' },
    },
    {
      name: "KrakenAI",
      tier: "Tier 1",
      users: 632,
      nsfwAllowed: "Allowed",
      openSource: false,
      owners: "PaniniCo",
      ownersLink: "https://api.cracked.systems",
      models: "Models",
      modelsLink: "https://api.cracked.systems/v1/models",
      notes: "Small, long-term stable API. Runs on https://poe.com",
      discord: "https://discord.gg/krakenai",
      limitsLink: "https://discord.com/channels/1087061361273622603/1185707754468429925/1248679693507493978",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '❌', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '✅' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '❌' },
    },
    {
      name: "FresedGPT",
      tier: "Tier 1",
      users: 475,
      nsfwAllowed: "Forbidden",
      openSource: false,
      owners: "Fresed",
      ownersLink: "https://github.com/qazplmqaz",
      models: "Models",
      modelsLink: "https://fresedgpt.space/v1/models",
      notes: "Small API maintained by a surprisingly commited dev. Good quality.",
      discord: "https://discord.gg/JecEC5my4T",
      limitsLink: "https://fresed-api.gitbook.io/fresed-api/limit-system",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '💰', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '✅', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '✅', 'Stable-Diffusion-3': '✅' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "Shard",
      tier: "Tier 2",
      users: 735,
      nsfwAllowed: "Only OSS-Models",
      openSource: false,
      owners: "Puzzy",
      ownersLink: "https://github.com/Puzzy124",
      models: "Models",
      modelsLink: "http://api.shard-ai.xyz/v1/models",
      notes: "'Edgiest' API with a controversial/questionable environment. Good service otherwise.",
      discord: "https://discord.gg/rY85WpENSt",
      limitsLink: "https://shard-ai.xyz/#pricing",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '💰', 'Gemini-1.5': '💰', 'Llama-3.1-405b': '💰', 'Midjourney': '❌', 'DALL-E-3': '💰', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '❌' },
    },
    {
      name: "Oxygen",
      tier: "Tier 2",
      users: 1060,
      nsfwAllowed: "Donator-Only",
      openSource: false,
      owners: "TornadoSoftware",
      ownersLink: "https://github.com/tornado-softwares",
      models: "Models",
      modelsLink: "https://app.oxyapi.uk/v1/models",
      notes: "Current Frontpage UI is stolen from [Here](https://witter.framer.ai/), Dashboard UI from [Here](https://vercel.com). Service stable and alive for a long time already otherwise.",
      discord: "https://discord.com/invite/kM6MaCqGKA",
      limitsLink: "https://app.oxyapi.uk/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '❌', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '✅' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '✅', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "ConvoAI",
      tier: "Tier 2",
      users: 1333,
      nsfwAllowed: "Forbidden",
      openSource: false,
      owners: "Niklas2290",
      ownersLink: "https://discord.com/invite/taH8UnARwd",
      models: "Models",
      modelsLink: "https://api.convoai.tech/v1/models",
      notes: "Owner parades under a egirl-account. The reason is unknown. Nuked competitor servers before, denies having done so.",
      discord: "https://discord.gg/convoai-1205754298567495690",
      limitsLink: "https://convoai.tech/#pricing",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '💰', 'Gemini-1.5': '💰', 'Llama-3.1-405b': '✅', 'Midjourney': '❌', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '❌' },
    },
    {
      name: "Skailar",
      tier: "Tier 3",
      users: 433,
      nsfwAllowed: "Forbidden",
      openSource: true,
      openSourceLink: "https://github.com/zukijourney/example-api",
      owners: "Aquadraws",
      ownersLink: "https://test.skailar.it/",
      models: "Models",
      modelsLink: "https://test.skailar.it/v1/models",
      notes: "Ancient API at seemingly affordable cost. Service stability & maintainer interest is uncertain.",
      discord: "https://discord.gg/HjHdbrj5Uc",
      limitsLink: "https://discord.com/channels/1120753218071310346/1172503125177937981/1258843593557282906",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '💰', 'Gemini-1.5': '❌', 'Llama-3.1-405b': '❌', 'Midjourney': '❌', 'DALL-E-3': '❌', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "ElectronHub",
      tier: "Tier 3",
      users: 351,
      nsfwAllowed: "Use /nsfw/ instead of /v1/",
      openSource: false,
      owners: "snowby666",
      ownersLink: "https://github.com/snowby666",
      models: "Models",
      modelsLink: "https://api.electronhub.top/v1/models",
      notes: "Created by the new [poe-api-wrapper](https://github.com/snowby666/poe-api-wrapper) maintainer. ",
      discord: "https://discord.gg/guXaKQWqzc",
      limitsLink: "https://discord.com/channels/1257145953513902191/1257704563293556758/1271896797463187478",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '✅', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '✅' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '❌', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '❌' },
    },
    {
      name: "ShadowJourney",
      tier: "Tier 3",
      users: 344,
      nsfwAllowed: "Forbidden",
      openSource: false,
      owners: "ichatei",
      ownersLink: "https://shadowjourney.xyz",
      models: "Models",
      modelsLink: "https://shadowjourney.xyz/v1/models",
      notes: "Very weird owner. Unstable service & stability, when present, is questioned by supposed fake models. Use at own risk.",
      discord: "https://discord.gg/yB2YZJUA3F",
      limitsLink: "https://shadowjourney.xyz/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '❌', 'Llama-3.1-405b': '❌', 'Midjourney': '❌', 'DALL-E-3': '❌', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "AnyAI",
      tier: "Tier 3",
      users: 791,
      nsfwAllowed: "Allowed",
      openSource: false,
      owners: "Meow18838",
      ownersLink: "https://github.com/meow18838",
      models: "Models",
      modelsLink: "https://api.llmplayground.net/v1/models",
      notes:  "Very peculiar owner, seems to try and sell you a lot of services at once. Runs [https://llmplayground.net](https://llmplayground.net) as well.",
      discord: "https://discord.gg/anyai",
      limitsLink: "https://api.llmplayground.net/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '❌', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "ClashAI",
      tier: "Tier 3.5",
      users: 868,
      nsfwAllowed: "Allowed",
      openSource: false,
      owners: "InvalidSian",
      ownersLink: "https://rentry.co/invalidsian",
      models: "Models",
      modelsLink: "https://clashai.dyntech.cc/v1/models",
      notes: "[Conducted a coordinated raid on another AI API server.](https://rentry.co/progptraid). API Owner is very petty (parked the entry of every api here) & [begs for providers.](https://files.catbox.moe/3d9ux9.png) [repeatedly](https://files.catbox.moe/vumaji.png)",
      discord: "https://discord.gg/rNBC9Hxzrx",
      limitsLink: "https://clashai.dyntech.cc/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability:  100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '❌', 'DALL-E-3': '❌', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "Stable, inc.",
      tier: "Tier 3.5",
      users: 629,
      nsfwAllowed: "Allowed",
      openSource: false,
      owners: "alphast101",
      ownersLink: "https://alphast101.netlify.app",
      models: "Models",
      modelsLink: "http://45.139.50.97:6077/v1/models",
      notes: "[Conducted a coordinated raid on another AI API server.](https://rentry.co/progptraid)",
      discord: "https://discord.com/invite/hmMBe8YyJ4",
      limitsLink: "http://45.139.50.97:6077/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '❌', 'Gemini-1.5': '❌', 'Llama-3.1-405b': '❌', 'Midjourney': '❌', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "ShuttleAI",
      tier: "Tier 4",
      users: 3669,
      nsfwAllowed: "Allowed",
      openSource: false,
      owners: "tristandevs",
      ownersLink: "https://github.com/tristandevs",
      models: "Models",
      modelsLink: "https://api.shuttleai.app/v1/models",
      notes: "Now mainly focuses [on own fine-tuned](https://files.catbox.moe/qmlwrw.png) models, ignores \"[all other ones.](https://files.catbox.moe/ebl19w.png)\"",
      discord: "https://discord.gg/shuttleai",
      limitsLink: "https://api.shuttleai.app/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '❌', 'DALL-E-3': '💰', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "WebraftAI",
      tier: "Tier 4",
      users: 1218,
      nsfwAllowed: "Forbidden",
      openSource: false,
      owners: "ds_gamer",
      ownersLink: "https://github.com/ds-gamer",
      models: "Models",
      modelsLink: "https://api.webraft.in/v1/models",
      notes: "Repeatedly accused of faking the top-tier models by even close associates to the owner. API Owner is MIA for weeks now. Service unavailable.",
      discord: "https://discord.gg/ncaagQjhQ8",
      limitsLink: "https://api.webraft.in/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '❌', 'Llama-3.1-405b': '❌', 'Midjourney': '❌', 'DALL-E-3': '❌', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '✅', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
    {
      name: "Pawan",
      tier: "Tier 4",
      users: 107169,
      nsfwAllowed: "Allowed",
      openSource: false,
      owners: "pawanosman",
      ownersLink: "https://github.com/PawanOsman",
      models: "Models",
      modelsLink: "http://api.pawan.krd/v1/models",
      notes: "Does not provide OpenAI models. Only provides own RP-Models.",
      discord: "https://discord.gg/pawan",
      limitsLink: "http://api.pawan.krd/v1/models",
      performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
      modelAvailability: { 'GPT-4': '❌', 'Claude-3': '❌', 'Gemini-1.5': '❌', 'Llama-3.1-405b': '❌', 'Midjourney': '❌', 'DALL-E-3': '❌', 'Stable-Image-Ultra': '❌', 'Stable-Diffusion-3': '❌' },
      endpointCoverage: { 'Text-To-Speech': '❌', 'Speech-To-Text': '❌', 'Embeddings': '❌', 'Audio': '❌', 'Translation': '❌', 'Image-Upscale': '❌' },
    },
  ];
  const nonTieredServices: NonTieredService[] = [
    {
      name: "FreeGPT4",
      users: 4818,
      provides: "Ancient community of gpt-4-free individuals. Plenty good AI-related content.",
      notes: "Ran by @lomusire",
      discord: "https://discord.gg/free-gpt-4-1106520284967735316",
    },
    {
      name: "g4f.ai",
      users: 14238,
      provides: "The OG server. Hub of the github repository that started it all.",
      notes: "Inactive",
      discord: "https://discord.gg/zPX6QWm5fg",
    },
  ]

  const renderServiceCard = (service: Service | NonTieredService) => {
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
      <Card key={service.name} className={`flex flex-col ${tiers.find(t => t.name === (service as Service).tier)?.color || 'bg-blue-500'}`}>
        <CardHeader className="flex-grow">
          <CardTitle className="flex items-center justify-between text-white">
            {service.name}
            {'tier' in service && <Badge variant="secondary">{service.tier}</Badge>}
          </CardTitle>
          <CardDescription className="text-white">{`${service.users.toLocaleString()} users`}</CardDescription>
        </CardHeader>
        <CardContent className="text-white">
          {'provides' in service ? (
            <>
              <p className="mb-2"><strong>Provides: </strong> {service.provides}</p>
              <p className="mb-2"><strong>Notes: </strong> 
                {renderNote(service.notes)}
              </p>
            </>
          ) : (
            <>
              <p className="mb-2"><strong>Notes: </strong> 
                {renderNote(service.notes)}
              </p>
              <p className="mb-2"><strong>NSFW/RP: </strong> {service.nsfwAllowed}</p>
              <p className="mb-2"><strong>Open Source: </strong> 
                {service.openSource ? (
                  service.openSourceLink ? (
                    <a href={service.openSourceLink} target="_blank" rel="noopener noreferrer" className="underline">Yes</a>
                  ) : "Yes"
                ) : "No"}
              </p>
              <p className="mb-2"><strong>Owner(s): </strong> 
                {service.ownersLink ? (
                  <a href={service.ownersLink} target="_blank" rel="noopener noreferrer" className="underline">{service.owners}</a>
                ) : service.owners}
              </p>
              <Button variant="outline" size="sm" className="mt-2 text-black" onClick={() => window.open(service.modelsLink, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Models
              </Button>
              <Button variant="outline" size="sm" className="mt-2 ml-2 text-black" onClick={() => window.open(service.limitsLink, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Limits/Pricing
              </Button>
            </>
          )}
          <Button variant="outline" size="sm" className="mt-2 text-black" onClick={() => window.open(service.discord, '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Join Discord
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">cool ai stuff!</h1>
        <p className="text-xl text-muted-foreground">A comprehensive overview of AI APIs offering free usage of various AI models and related.</p>
      </header>

      <Card className="bg-yellow-100 dark:bg-yellow-900">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2" />
            Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>We are not endorsing any of the listed services! Some of them might be considered controversial. We are not responsible for any legal, technical or any other damage caused by using the listed services. Data is provided without warranty of any kind. Use these at your own risk!</p>
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
            <Select onValueChange={(value) => setOverviewSorting(value as 'members' | 'openSource' | 'tier')} defaultValue="members">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="members">Sort by Members</SelectItem>
                <SelectItem value="openSource">Sort by Open Source</SelectItem>
                <SelectItem value="tier">Sort by Tier</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter(s => ["Tier 1", "Tier 2", "Tier 3"].includes(s.tier))
              .sort((a, b) => {
                if (overviewSorting === 'members') return b.users - a.users;
                if (overviewSorting === 'openSource') return Number(b.openSource) - Number(a.openSource);
                if (overviewSorting === 'tier') return a.tier.localeCompare(b.tier);
                return 0;
              })
              .map(renderServiceCard)}
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
              <p>The tier of each service is determined based on the following factors: number of users, NSFW/RP policy, open source status, stability & longevity of the service, and its features/capabilities.</p>
            </CardContent>
          </Card>
          <Tabs value={activeTier} onValueChange={setActiveTier}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-4">
              {tiers.map((tier) => (
                <TabsTrigger key={tier.name} value={tier.name} className={`${tier.color} text-white`}>
                  {tier.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {tiers.map((tier) => (
              <TabsContent key={tier.name} value={tier.name}>
                <Card className={`${tier.color} text-white mb-4`}>
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription className="text-white">{tier.description}</CardDescription>
                  </CardHeader>
                </Card>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {tier.name === "Non-Tiered"
                    ? nonTieredServices.map(renderServiceCard)
                    : services.filter(s => s.tier === tier.name).map(renderServiceCard)}
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
        <Select onValueChange={(value) => setModelAvailabilitySorting(value as ModelAvailabilityKey)} defaultValue="">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default" disabled>Select a model</SelectItem>
            {(['GPT-4', 'Claude-3', 'Gemini-1.5', 'Llama-3.1-405b', 'Midjourney', 'DALL-E-3', 'Stable-Image-Ultra', 'Stable-Diffusion-3'] as const).map((model) => (
              <SelectItem key={model} value={model}>Sort by {model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
                if (!modelAvailabilitySorting) return 0;
                const aValue = a.modelAvailability[modelAvailabilitySorting];
                const bValue = b.modelAvailability[modelAvailabilitySorting];
                
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
                    <td className="text-center">{service.modelAvailability['GPT-4']}</td>
                    <td className="text-center">{service.modelAvailability['Claude-3']}</td>
                    <td className="text-center">{service.modelAvailability['Gemini-1.5']}</td>
                    <td className="text-center">{service.modelAvailability['Llama-3.1-405b']}</td>
                    <td className="text-center">{service.modelAvailability['Midjourney']}</td>
                    <td className="text-center">{service.modelAvailability['DALL-E-3']}</td>
                    <td className="text-center">{service.modelAvailability['Stable-Image-Ultra']}</td>
                    <td className="text-center">{service.modelAvailability['Stable-Diffusion-3']}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        ✅ - Available for everyone<br/>
        💰 - Available for donators only<br/>
        ❌ - Not available at all
      </p>
    </CardContent>
  </Card>
</TabsContent>
<TabsContent value="endpoints">
  <Card>
    <CardHeader>
      <CardTitle>Endpoint Coverage</CardTitle>
      <CardDescription>Available endpoints by service</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="mb-4">
        <Select onValueChange={(value) => setEndpointCoverageSorting(value as EndpointCoverageKey)} defaultValue="">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default" disabled>Select an endpoint</SelectItem>
            {(['Text-To-Speech', 'Speech-To-Text', 'Embeddings', 'Audio', 'Translation', 'Image-Upscale'] as const).map((endpoint) => (
              <SelectItem key={endpoint} value={endpoint}>Sort by {endpoint}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
                if (!endpointCoverageSorting) return 0;
                return (b.endpointCoverage[endpointCoverageSorting] === '✅' ? 1 : 0) - (a.endpointCoverage[endpointCoverageSorting] === '✅' ? 1 : 0);
              })
              .map((service) => {
                const tierColor = tiers.find(t => t.name === service.tier)?.color || 'bg-gray-200';
                return (
                  <tr key={service.name} className={`${tierColor} bg-opacity-50 hover:bg-opacity-75 transition-colors`}>
                    <td className={`font-semibold ${tierColor === 'bg-purple-500' || tierColor === 'bg-blue-500' ? 'text-white' : ''}`}>{service.name}</td>
                    <td className="text-center">{service.endpointCoverage['Text-To-Speech']}</td>
                    <td className="text-center">{service.endpointCoverage['Speech-To-Text']}</td>
                    <td className="text-center">{service.endpointCoverage['Embeddings']}</td>
                    <td className="text-center">{service.endpointCoverage['Audio']}</td>
                    <td className="text-center">{service.endpointCoverage['Translation']}</td>
                    <td className="text-center">{service.endpointCoverage['Image-Upscale']}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        ✅ - Available<br/>
        ❌ - Not available
      </p>
    </CardContent>
  </Card>
</TabsContent>
<TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Response time (ms) and availability for each service. Measured with free-tier keys for each API.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Select onValueChange={(value) => setPerformanceSorting(value as 'gpt4' | 'claude3' | 'gemini' | 'llama' | 'availability')} defaultValue="availability">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt4">Sort by GPT-4o-Mini</SelectItem>
                        <SelectItem value="claude3">Sort by Claude-3-Haiku</SelectItem>
                        <SelectItem value="gemini">Sort by Gemini-1.5-Flash</SelectItem>
                        <SelectItem value="llama">Sort by Llama-3.1-8b-Instruct</SelectItem>
                        <SelectItem value="availability">Sort by Availability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left">Service</th>
                          <th>GPT-4o-Mini</th>
                          <th>Claude-3-Haiku</th>
                          <th>Gemini-1.5-Flash</th>
                          <th>Llama-3.1-8b-Instruct</th>
                          <th>Availability (%)</th>
                        </tr>
                      </thead>
                      <tbody>
  {services
    .sort((a, b) => {
      if (!performanceMetrics) return 0;
      const aMetrics = performanceMetrics[a.name];
      const bMetrics = performanceMetrics[b.name];

      const getValue = (metrics: typeof aMetrics | undefined, model: string) => {
        if (!metrics) return Infinity;
        const value = metrics[model]?.average_response_time;
        return value && value > 0 ? value : Infinity;
      };

      const getAvailability = (metrics: typeof aMetrics | undefined) => {
        if (!metrics) return -1;
        const availabilities = [
          metrics['gpt-4o-mini']?.availability_percentage,
          metrics['claude-3-haiku']?.availability_percentage,
          metrics['gemini-1.5-flash-latest']?.availability_percentage,
          metrics['llama-3.1-8b-instruct']?.availability_percentage
        ].filter(v => v !== undefined);
        return availabilities.length > 0 ? availabilities.reduce((a, b) => a + b, 0) / availabilities.length : -1;
      };

      switch (performanceSorting) {
        case 'gpt4':
          return getValue(aMetrics, 'gpt-4o-mini') - getValue(bMetrics, 'gpt-4o-mini');
        case 'claude3':
          return getValue(aMetrics, 'claude-3-haiku') - getValue(bMetrics, 'claude-3-haiku');
        case 'gemini':
          return getValue(aMetrics, 'gemini-1.5-flash-latest') - getValue(bMetrics, 'gemini-1.5-flash-latest');
        case 'llama':
          return getValue(aMetrics, 'llama-3.1-8b-instruct') - getValue(bMetrics, 'llama-3.1-8b-instruct');
        case 'availability':
          return getAvailability(bMetrics) - getAvailability(aMetrics);
        default:
          return 0;
      }
    })
    .map((service) => {
      const tierColor = tiers.find(t => t.name === service.tier)?.color || 'bg-gray-200';
      const metrics = performanceMetrics?.[service.name];
      
      const formatMetric = (value: number | undefined) => {
        if (value === undefined || value === 0) return 'N/A';
        return value.toFixed(3);
      };

      const calculateAvailability = () => {
        if (!metrics) return 'N/A';
        const availabilities = [
          metrics['gpt-4o-mini']?.availability_percentage,
          metrics['claude-3-haiku']?.availability_percentage,
          metrics['gemini-1.5-flash-latest']?.availability_percentage,
          metrics['llama-3.1-8b-instruct']?.availability_percentage
        ].filter(v => v !== undefined);
        return availabilities.length > 0 
          ? (availabilities.reduce((a, b) => a + b, 0) / availabilities.length).toFixed(2)
          : 'N/A';
      };

      return (
        <tr key={service.name} className={`${tierColor} bg-opacity-50 hover:bg-opacity-75 transition-colors`}>
          <td className="font-semibold">{service.name}</td>
          <td className="text-center">{formatMetric(metrics?.['gpt-4o-mini']?.average_response_time)}</td>
          <td className="text-center">{formatMetric(metrics?.['claude-3-haiku']?.average_response_time)}</td>
          <td className="text-center">{formatMetric(metrics?.['gemini-1.5-flash-latest']?.average_response_time)}</td>
          <td className="text-center">{formatMetric(metrics?.['llama-3.1-8b-instruct']?.average_response_time)}</td>
          <td className="text-center">{calculateAvailability()}</td>
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Info className="mr-2" />
            About This Showcase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This showcase is maintained by @zukixa, the queen of zukijourney. The information provided is based on collected metrics and may not be entirely accurate or up-to-date. Use the listed services at your own discretion and risk. You can request updates, fix issues, or contribute to the project on Github.</p>
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-muted-foreground">
      <p>Last updated: August 30, 2024</p>
      <p>Star this project on GitHub:</p>
      <div className="flex justify-center items-center mt-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => window.open('https://github.com/zukixa/cool-ai-stuff', '_blank', 'noopener,noreferrer')}
        >
          <Star className="mr-2 h-4 w-4" />
          Star on GitHub
        </Button>
      </div>
    </footer>
    </div>
  )
}