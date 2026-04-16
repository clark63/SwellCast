// ─────────────────────────────────────────────
// ocean-api.js  —  SwellCast data module
// ─────────────────────────────────────────────

// ── Global beach database — 18 regions ───────
const ALL_BEACHES = [

  // ── Hawaii ──────────────────────────────────
  { name:"Pipeline",        country:"Oahu, Hawaii",       lat: 21.6632, lng:-158.0511, region:"hawaii" },
  { name:"Sunset Beach",    country:"Oahu, Hawaii",       lat: 21.6783, lng:-158.0403, region:"hawaii" },
  { name:"Waimea Bay",      country:"Oahu, Hawaii",       lat: 21.6419, lng:-158.0655, region:"hawaii" },
  { name:"Jaws (Pe'ahi)",   country:"Maui, Hawaii",       lat: 20.9319, lng:-156.2219, region:"hawaii" },

  // ── California ──────────────────────────────
  { name:"Mavericks",       country:"California, USA",    lat: 37.4957, lng:-122.5011, region:"california" },
  { name:"Malibu",          country:"California, USA",    lat: 34.0359, lng:-118.6772, region:"california" },
  { name:"Trestles",        country:"California, USA",    lat: 33.3814, lng:-117.5922, region:"california" },
  { name:"Rincon",          country:"California, USA",    lat: 34.3724, lng:-119.4756, region:"california" },

  // ── Pacific Northwest ────────────────────────
  { name:"Tofino",          country:"British Columbia",   lat: 49.1531, lng:-125.9067, region:"pacific-nw" },
  { name:"Long Beach",      country:"British Columbia",   lat: 49.0333, lng:-125.7667, region:"pacific-nw" },
  { name:"Westport",        country:"Washington, USA",    lat: 46.9012, lng:-124.1047, region:"pacific-nw" },

  // ── East Coast USA ───────────────────────────
  { name:"Montauk",         country:"New York, USA",      lat: 41.0534, lng: -71.9566, region:"east-coast-us" },
  { name:"Cape Hatteras",   country:"N. Carolina, USA",   lat: 35.2269, lng: -75.5283, region:"east-coast-us" },
  { name:"Cocoa Beach",     country:"Florida, USA",       lat: 28.3200, lng: -80.6081, region:"east-coast-us" },
  { name:"Outer Banks",     country:"N. Carolina, USA",   lat: 35.5585, lng: -75.4665, region:"east-coast-us" },

  // ── Mexico ───────────────────────────────────
  { name:"Puerto Escondido", country:"Oaxaca, Mexico",   lat: 15.8594, lng: -97.0731, region:"mexico" },
  { name:"Barra de la Cruz", country:"Oaxaca, Mexico",   lat: 15.7167, lng: -96.1167, region:"mexico" },
  { name:"Sayulita",        country:"Nayarit, Mexico",    lat: 20.8681, lng:-105.4386, region:"mexico" },

  // ── Central America ──────────────────────────
  { name:"Playa Hermosa",   country:"Costa Rica",         lat:  9.5536, lng: -84.6358, region:"central-america" },
  { name:"Pavones",         country:"Costa Rica",         lat:  8.3894, lng: -83.1731, region:"central-america" },
  { name:"Playa Guiones",   country:"Costa Rica",         lat:  9.9167, lng: -85.7000, region:"central-america" },

  // ── South America - Pacific ──────────────────
  { name:"Chicama",         country:"Peru",               lat: -7.8444, lng: -79.4611, region:"south-america-pac" },
  { name:"Punta Hermosa",   country:"Peru",               lat:-12.3467, lng: -76.8086, region:"south-america-pac" },
  { name:"Máncora",         country:"Peru",               lat: -4.1000, lng: -81.0500, region:"south-america-pac" },
  { name:"Pichilemu",       country:"Chile",              lat:-34.3881, lng: -72.0022, region:"south-america-pac" },

  // ── Brazil ───────────────────────────────────
  { name:"Florianópolis",   country:"Brazil",             lat:-27.5969, lng: -48.5495, region:"brazil" },
  { name:"Saquarema",       country:"Brazil",             lat:-22.9333, lng: -42.5167, region:"brazil" },
  { name:"Fernando de Noronha", country:"Brazil",         lat: -3.8544, lng: -32.4231, region:"brazil" },

  // ── UK & Ireland ─────────────────────────────
  { name:"Bundoran",        country:"Ireland",            lat: 54.4769, lng:  -8.2781, region:"uk-ireland" },
  { name:"Newquay",         country:"Cornwall, England",  lat: 50.4138, lng:  -5.0849, region:"uk-ireland" },
  { name:"Thurso",          country:"Scotland",           lat: 58.5936, lng:  -3.5220, region:"uk-ireland" },
  { name:"Mullaghmore",     country:"Ireland",            lat: 54.4742, lng:  -8.4494, region:"uk-ireland" },

  // ── Europe Atlantic ───────────────────────────
  { name:"Hossegor",        country:"France",             lat: 43.6636, lng:  -1.4344, region:"europe-atlantic" },
  { name:"Supertubos",      country:"Portugal",           lat: 39.4833, lng:  -9.3333, region:"europe-atlantic" },
  { name:"Mundaka",         country:"Spain",              lat: 43.4058, lng:  -2.6983, region:"europe-atlantic" },
  { name:"Nazaré",          country:"Portugal",           lat: 39.6015, lng:  -9.0712, region:"europe-atlantic" },
  { name:"Ericeira",        country:"Portugal",           lat: 38.9636, lng:  -9.4147, region:"europe-atlantic" },

  // ── Morocco ───────────────────────────────────
  { name:"Taghazout",       country:"Morocco",            lat: 30.5447, lng:  -9.7086, region:"morocco" },
  { name:"Anchor Point",    country:"Morocco",            lat: 30.5803, lng:  -9.6997, region:"morocco" },
  { name:"Imsouane",        country:"Morocco",            lat: 30.8500, lng:  -9.8167, region:"morocco" },

  // ── Canary Islands ────────────────────────────
  { name:"El Hierro",       country:"Canary Islands",     lat: 27.7200, lng: -18.0200, region:"canaries" },
  { name:"Lanzarote",       country:"Canary Islands",     lat: 28.9633, lng: -13.5500, region:"canaries" },
  { name:"Fuerteventura",   country:"Canary Islands",     lat: 28.3500, lng: -14.0000, region:"canaries" },

  // ── South Africa ──────────────────────────────
  { name:"Jeffreys Bay",    country:"South Africa",       lat:-34.0500, lng:  24.9200, region:"south-africa" },
  { name:"Dungeons",        country:"Cape Town, SA",      lat:-34.1386, lng:  18.3303, region:"south-africa" },
  { name:"Cave Rock",       country:"Durban, SA",         lat:-29.9167, lng:  31.0500, region:"south-africa" },

  // ── Australia East ────────────────────────────
  { name:"Snapper Rocks",   country:"Queensland",         lat:-28.1694, lng: 153.5508, region:"australia-east" },
  { name:"Bells Beach",     country:"Victoria",           lat:-38.3718, lng: 144.2829, region:"australia-east" },
  { name:"Shipstern Bluff", country:"Tasmania",           lat:-43.4167, lng: 146.8333, region:"australia-east" },

  // ── Australia West ────────────────────────────
  { name:"Margaret River",  country:"W. Australia",       lat:-33.9533, lng: 114.9967, region:"australia-west" },
  { name:"The Box",         country:"W. Australia",       lat:-33.9800, lng: 114.9900, region:"australia-west" },
  { name:"Surfers Point",   country:"W. Australia",       lat:-33.9667, lng: 114.9833, region:"australia-west" },

  // ── Indonesia / Bali ──────────────────────────
  { name:"Uluwatu",         country:"Bali, Indonesia",    lat: -8.8311, lng: 115.0849, region:"indonesia" },
  { name:"Padang Padang",   country:"Bali, Indonesia",    lat: -8.8119, lng: 115.0883, region:"indonesia" },
  { name:"G-Land",          country:"Java, Indonesia",    lat: -8.6833, lng: 114.3833, region:"indonesia" },
  { name:"Desert Point",    country:"Lombok, Indonesia",  lat: -8.7667, lng: 115.9167, region:"indonesia" },

  // ── Japan ─────────────────────────────────────
  { name:"Chiba",           country:"Japan",              lat: 35.5500, lng: 140.3833, region:"japan" },
  { name:"Shonan",          country:"Japan",              lat: 35.3100, lng: 139.4800, region:"japan" },
  { name:"Miyazaki",        country:"Japan",              lat: 31.9077, lng: 131.4202, region:"japan" },
];

// ── Region definitions ────────────────────────
const REGIONS = [
  { id:"hawaii",             label:"Hawaii",              lat: 20.8,  lng:-157.5, beachRegions:["hawaii"] },
  { id:"california",         label:"California",          lat: 35.5,  lng:-121.5, beachRegions:["california"] },
  { id:"pacific-nw",         label:"Pacific NW",          lat: 49.2,  lng:-126.0, beachRegions:["pacific-nw"] },
  { id:"east-coast-us",      label:"East Coast US",       lat: 35.5,  lng: -74.0, beachRegions:["east-coast-us"] },
  { id:"mexico",             label:"Mexico",              lat: 18.0,  lng: -96.0, beachRegions:["mexico"] },
  { id:"central-america",    label:"Central America",     lat:  9.5,  lng: -84.5, beachRegions:["central-america"] },
  { id:"south-america-pac",  label:"Peru / Chile",        lat:-12.0,  lng: -78.0, beachRegions:["south-america-pac"] },
  { id:"brazil",             label:"Brazil",              lat:-15.0,  lng: -42.0, beachRegions:["brazil"] },
  { id:"uk-ireland",         label:"UK & Ireland",        lat: 53.5,  lng:  -8.5, beachRegions:["uk-ireland"] },
  { id:"europe-atlantic",    label:"Europe Atlantic",     lat: 43.0,  lng:  -5.0, beachRegions:["europe-atlantic"] },
  { id:"morocco",            label:"Morocco",             lat: 30.5,  lng:  -9.7, beachRegions:["morocco"] },
  { id:"canaries",           label:"Canary Islands",      lat: 28.5,  lng: -14.5, beachRegions:["canaries"] },
  { id:"south-africa",       label:"South Africa",        lat:-33.5,  lng:  22.0, beachRegions:["south-africa"] },
  { id:"australia-east",     label:"Australia East",      lat:-33.0,  lng: 151.5, beachRegions:["australia-east"] },
  { id:"australia-west",     label:"Australia West",      lat:-34.0,  lng: 114.5, beachRegions:["australia-west"] },
  { id:"indonesia",          label:"Bali / Indonesia",    lat: -8.5,  lng: 115.1, beachRegions:["indonesia"] },
  { id:"japan",              label:"Japan",               lat: 35.5,  lng: 138.5, beachRegions:["japan"] },
];

// ── Get beaches for a region ──────────────────
function getBeachesForRegion(regionId) {
  const region = REGIONS.find(r => r.id === regionId);
  if (!region) return ALL_BEACHES.slice(0, 6);
  return ALL_BEACHES.filter(b => region.beachRegions.includes(b.region));
}

// ── Active beach list ─────────────────────────
let BEACHES = ALL_BEACHES.filter(b => b.region === "hawaii");

function setBeachesFromRegion(regionId) {
  CACHE_KEY = CACHE_KEY_PREFIX + regionId;
  BEACHES = getBeachesForRegion(regionId);
}

// ── API config ────────────────────────────────
const BASE_URL    = "https://marine-api.open-meteo.com/v1/marine";
const CACHE_KEY_PREFIX = "surf_cache_";
let   CACHE_KEY      = "surf_cache_default";
const CACHE_TTL   = 5 * 60 * 1000;
const RETRY_LIMIT = 3;
const RETRY_DELAY = 1500;

const HOURLY_VARS = [
  "wave_height","wave_direction","wave_period",
  "swell_wave_height","swell_wave_direction","swell_wave_period",
  "wind_wave_height","wind_wave_direction","wind_wave_period",
].join(",");

function buildURL(beach) {
  return `${BASE_URL}?${new URLSearchParams({
    latitude:beach.lat, longitude:beach.lng,
    hourly:HOURLY_VARS, timezone:"auto", forecast_days:7,
  })}`;
}

async function fetchWithRetry(url, attempts = RETRY_LIMIT) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch(err) {
      if (i === attempts - 1) throw err;
      await new Promise(r => setTimeout(r, RETRY_DELAY * (i + 1)));
    }
  }
}

async function fetchBeach(beach) {
  const raw = await fetchWithRetry(buildURL(beach));
  const h = raw.hourly;
  return {
    name:beach.name, country:beach.country, lat:beach.lat, lng:beach.lng,
    timezone:raw.timezone, times:h.time,
    waveHeight:h.wave_height, waveDirection:h.wave_direction, wavePeriod:h.wave_period,
    swellHeight:h.swell_wave_height, swellDirection:h.swell_wave_direction, swellPeriod:h.swell_wave_period,
    windWaveHeight:h.wind_wave_height, windWaveDirection:h.wind_wave_direction, windWavePeriod:h.wind_wave_period,
  };
}

async function fetchAllBeaches(onProgress) {
  const results = [], errors = [];
  await Promise.allSettled(BEACHES.map(async (beach, i) => {
    try {
      results.push(await fetchBeach(beach));
      if (onProgress) onProgress(i + 1, BEACHES.length, beach.name);
    } catch(err) {
      errors.push({ beach:beach.name, error:err.message });
    }
  }));
  return { results, errors };
}

function saveCache(data) {
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp:Date.now(), data })); } catch(e) {}
}
function loadCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { timestamp, data } = JSON.parse(raw);
    return Date.now() - timestamp > CACHE_TTL ? null : data;
  } catch(e) { return null; }
}

async function loadSurfData(onProgress) {
  const cached = loadCache();
  if (cached) return { results:cached, errors:[], fromCache:true };
  const { results, errors } = await fetchAllBeaches(onProgress);
  if (results.length > 0) saveCache(results);
  return { results, errors, fromCache:false };
}

function getCurrentConditions(beachData) {
  const now = new Date(), times = beachData.times;
  let idx = 0;
  for (let i = 0; i < times.length; i++) {
    if (new Date(times[i]) <= now) idx = i; else break;
  }
  return {
    time:times[idx],
    waveHeight:beachData.waveHeight[idx],
    waveDirection:beachData.waveDirection[idx],
    wavePeriod:beachData.wavePeriod[idx],
    swellHeight:beachData.swellHeight[idx],
    swellPeriod:beachData.swellPeriod[idx],
    windWaveHeight:beachData.windWaveHeight[idx],
  };
}

function getDailyBest(beachData) {
  const daily = {};
  beachData.times.forEach((t, i) => {
    const day = t.slice(0, 10);
    const score = surfRating(beachData.waveHeight[i], beachData.wavePeriod[i], beachData.windWaveHeight[i]);
    if (!daily[day] || score > daily[day].score) {
      daily[day] = { date:day, score, waveHeight:beachData.waveHeight[i], swellHeight:beachData.swellHeight[i], swellPeriod:beachData.swellPeriod[i], time:t };
    }
  });
  return Object.values(daily).slice(0, 7);
}

function surfRating(waveH, wavePeriod, windWaveH) {
  if (!waveH || !wavePeriod) return 0;
  const hScore =
    waveH < 0.3  ? 0 :
    waveH < 1.0  ? (waveH / 1.0) * 40 :
    waveH <= 3.0 ? 40 + ((waveH - 1) / 2) * 40 :
    waveH <= 5.0 ? 80 - ((waveH - 3) / 2) * 20 : 10;
  const pScore =
    wavePeriod < 6   ? 0 :
    wavePeriod < 10  ? ((wavePeriod - 6) / 4) * 50 :
    wavePeriod <= 16 ? 50 + ((wavePeriod - 10) / 6) * 50 : 100;
  const chopPenalty = Math.min(((windWaveH || 0) / Math.max(waveH, 0.1)) * 40, 40);
  return Math.max(0, Math.round((hScore * 0.5 + pScore * 0.5) - chopPenalty));
}

// ── Option D colours: Good = #4ecb71, Epic = #00e5b4 ──
function ratingLabel(score) {
  if (score <= 20) return { label:"Flat",  color:"#ff6b6b", bg:"rgba(255,107,107,0.14)", border:"#ff6b6b" };
  if (score <= 50) return { label:"Fair",  color:"#ffb830", bg:"rgba(255,184,48,0.14)",  border:"#ffb830" };
  if (score <= 75) return { label:"Good",  color:"#4ecb71", bg:"rgba(78,203,113,0.14)",  border:"#4ecb71" };
  return               { label:"Epic",  color:"#00e5b4", bg:"rgba(0,229,180,0.14)",   border:"#00e5b4" };
}

function startAutoRefresh(onRefresh, onProgress) {
  async function run() { onRefresh(await loadSurfData(onProgress)); }
  run();
  return setInterval(run, CACHE_TTL);
}
