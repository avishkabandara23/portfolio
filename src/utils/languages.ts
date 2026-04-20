export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  san: {
    name: "SAN",
    iconName: "dashboard",
  },
  nas: {
    name: "NAS",
    iconName: "dashboard",
  },
  sds: {
    name: "SDS",
    iconName: "dashboard",
  },
  blade: {
    name: "BLADE Servers",
    iconName: "dashboard",
  },
  arch321: {
    name: "3-2-1 Architecture",
    iconName: "dashboard",
  },
  hci: {
    name: "HCI",
    iconName: "dashboard",
  },
  vmware: {
    name: "VMware",
    iconName: "dashboard",
  },
  nutanix: {
    name: "Nutanix",
    iconName: "dashboard",
  },
  hyperv: {
    name: "Hyper-V",
    iconName: "dashboard",
  },
  proxmox: {
    name: "Proxmox",
    iconName: "dashboard",
  },
  cisco: {
    name: "Cisco Networking",
    iconName: "dashboard",
  },
  vpn: {
    name: "VPN & MPLS",
    iconName: "info",
  },
  googlecloud: {
    name: "Google Cloud",
    iconName: "dashboard",
  },
  oracle: {
    name: "Oracle Cloud",
    iconName: "dashboard",
  },
  infra: {
    name: "Infrastructure",
    iconName: "briefcase",
  },
  design_impl: {
    name: "Designing & Implementation",
    iconName: "dashboard",
  },
  hardware_ss: {
    name: "Hardware Servers & Storage",
    iconName: "dashboard",
  },
  storage_net: {
    name: "Storage Networking",
    iconName: "dashboard",
  },
  power: {
    name: "Power",
    iconName: "info",
  },
  cooling: {
    name: "Cooling",
    iconName: "info",
  },
  networking: {
    name: "Networking",
    iconName: "dashboard",
  },
  intercom: {
    name: "Intercom",
    iconName: "info",
  },
  ibm_as400: {
    name: "IBM AS400",
    iconName: "briefcase",
  },
  cable_layering: {
    name: "Cable Layering",
    iconName: "info",
  },
  fiber: {
    name: "Fiber",
    iconName: "rocket",
  },
  dr_solutions: {
    name: "DR Solutions",
    iconName: "briefcase",
  },
  lenovo: {
    name: "Lenovo",
    iconName: "dashboard",
  },
  hpe: {
    name: "HPE",
    iconName: "dashboard",
  },
  dell: {
    name: "Dell",
    iconName: "dashboard",
  },
  cisco_ucs: {
    name: "Cisco UCS",
    iconName: "dashboard",
  },
  broadcom: {
    name: "Broadcom",
    iconName: "dashboard",
  },
  xcp_ng: {
    name: "XCP-NG",
    iconName: "dashboard",
  },
  xen: {
    name: "Xen",
    iconName: "dashboard",
  },
  fusion_compute: {
    name: "Fusion Compute",
    iconName: "dashboard",
  },
  openstack: {
    name: "Open Stack",
    iconName: "briefcase",
  },
  openshift: {
    name: "Openshift",
    iconName: "rocket",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 