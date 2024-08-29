// components/ApiData.tsx
"use server";
import axios from "axios";

interface Guild {
  code: string;
  type: number;
  expires_at: string | null;
  guild: Record<string, any>;
  channel: Record<string, any>;
  inviter: Record<string, any>;
  approximate_member_count: number;
  approximate_presence_count: number;
}

const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

let cache: {
  data?: any[];
  timestamp?: number;
} = {};

async function getGuildCount(guild: string): Promise<number | undefined> {
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


async function getApiDataFromSource() {
  const services = [
    {
        name: "zukijourney",
        tier: "Tier 1",
        users: (await getGuildCount("zukijourney")) ?? 0,
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
        users: (await getGuildCount("JxRBXBhabu")) ?? 0,
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
        notes: "Small API maintained by a surprisingly committed dev. Good quality.",
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
        notes: "Stole Website UI before, current likely is too. Offended at jokes easily. Service probably fine otherwise.",
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
        owners: "Chico",
        ownersLink: "https://github.com/chico",
        models: "Models",
        modelsLink: "https://convo-ai.com/v1/models",
        notes: "A Tier 2 API that is quite popular. Offers a good range of features.",
        discord: "https://discord.gg/convoai-1205754298567495690",
        limitsLink: "https://convo-ai.com/api-docs",
        performance: { gpt4: 0, claude3: 0, gemini: 0, llama: 0, availability: 100 },
        modelAvailability: { 'GPT-4': '✅', 'Claude-3': '✅', 'Gemini-1.5': '✅', 'Llama-3.1-405b': '✅', 'Midjourney': '✅', 'DALL-E-3': '✅', 'Stable-Image-Ultra': '✅', 'Stable-Diffusion-3': '✅' },
        endpointCoverage: { 'Text-To-Speech': '✅', 'Speech-To-Text': '✅', 'Embeddings': '✅', 'Audio': '✅', 'Translation': '✅', 'Image-Upscale': '✅' },
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

    {
        name: "FreeGPT4",
        users: 4818,
        tier: "Non-Tiered",
        notes: "Ancient community of gpt-4-free individuals. Plenty good AI-related content.",
        owners: "lomusire",
        discord: "https://discord.gg/free-gpt-4-1106520284967735316",
    },
    {
        name: "g4f.ai",
        tier: "Non-Tiered",
        users: 14238,
        notes: "The OG server. Hub of the github repository that started it all.",
        owners: "Inactive",
        discord: "https://discord.gg/zPX6QWm5fg",
    },
    ];
    for (const service of services) {
        const discordInvite = service.discord;
        const guildIdMatch = discordInvite.match(/discord\.gg\/([^\s\/]+)/);
        if (guildIdMatch) {
          const guildId = guildIdMatch[1];
          service.users = await getGuildCount(guildId) ?? 0;
        }
      }
    
      return services;
  
}
export async function getApiData() {
  const now = Date.now();

  if (cache.timestamp && cache.data && (now - cache.timestamp < CACHE_EXPIRY)) {
    return cache.data;
  }

  try {
    const data = await getApiDataFromSource();
    cache = {
      data,
      timestamp: now,
    };
    return data;
  } catch (error) {
    console.error('Error fetching API data:', error);
    return []; 
  }
}