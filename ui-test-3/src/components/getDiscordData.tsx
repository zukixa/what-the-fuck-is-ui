// components/ApiData.tsx
"use server";
import axios from "axios";

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
interface Guild {
  code: string;
  type: number;
  expires_at: string | null;
  guild: Record<string, any>; // Replace with a more specific type if known
  channel: Record<string, any>; // Replace with a more specific type if known
  inviter: Record<string, any>; // Replace with a more specific type if known
  approximate_member_count: number;
  approximate_presence_count: number;
}

export async function getGuildCount(
  guild: string,
): Promise<number | undefined> {
  try {
    const apiResult = await axios.get<Guild>(
      `https://discord.com/api/v9/invites/${guild}?with_counts=true&with_expiration=true`,
    );
    return apiResult.data.approximate_member_count;
  } catch (error) {
    console.error("Error fetching guild count:", error);
    return undefined;
  }
}

export async function getApiData() {
  return [
    {
      name: "ZukiJourney",
      users: (await getGuildCount("zukijourney")) ?? 0,
      nsfw: "Use /unfilter, not /v1",
      openSource: true,
      owner: "Our Team",
      tier: 1,
      notes:
        "Largest & Oldest GPT-4 API still continuously around. Offers other popular AI-related Bots too.",
      models: ["GPT-4", "GPT-3.5", "DALL-E 2", "Stable Diffusion"],
      links: { moremodels: "https://zukijourney.xyzbot.net/v1/models" },
    },
    {
      name: "NagaAI",
      users: (await getGuildCount("JxRBXBhabu")) ?? 0,
      nsfw: "Forbidden",
      openSource: false,
      owner: "ZentixUA",
      tier: 1,
      notes:
        "Honorary successor to ChimeraGPT, the largest API in history (15k users).",
      models: ["GPT-4", "LLaMA 2", "Claude 2"],
      links: { moremodels: "https://api.naga.ac/v1/models" },
    },
    {
      name: "KrakenAI",
      users: (await getGuildCount("krakenai")) ?? 0,
      nsfw: "Allowed",
      openSource: false,
      owner: "PaniniCo",
      tier: 1,
      notes: "Small, long-term stable API. Runs on https://poe.com",
      models: ["GPT-3.5", "BERT", "T5"],
      links: { moremodels: "https://api.cracked.systems/v1/models" },
    },
    {
      name: "FresedGPT",
      users: (await getGuildCount("JecEC5my4T")) ?? 0,
      nsfw: "Forbidden",
      openSource: false,
      owner: "Fresed",
      tier: 1,
      notes:
        "Small API maintained by a surprisingly committed dev. Good quality.",
      models: ["GPT-3.5", "GPT-J", "BLOOM"],
      links: { moremodels: "https://fresedgpt.space/v1/models" },
    },
    {
      name: "Shard",
      users: (await getGuildCount("rY85WpENSt")) ?? 0,
      nsfw: "Only OSS-Models",
      openSource: false,
      owner: "Puzzy",
      tier: 2,
      notes:
        "Edgiest API with a controversial/questionable environment. Good service otherwise.",
      models: ["LLaMA", "GPT-Neo", "EleutherAI"],
      links: { moremodels: "http://api.shard-ai.xyz/v1/models" },
    },
  ];
}