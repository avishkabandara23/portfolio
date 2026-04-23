---
layout: /src/layouts/ProjectLayout.astro
title: 'Modernizing Datacenter Infrastructure - Serendib Finance'
pubDate: 2024-11-20
description: 'Enterprise network and datacenter modernization for Serendib Finance, implementing a secure Hyper-V HCI cluster, network segmentation, and endpoint protection for CBSL compliance.'
languages: ["Hyper-V", "S2D", "Sophos XGS", "Kaspersky EDR", "Zabbix", "RADIUS", "Azure Backup", "VLAN/VTP/PAgP", "Synology NAS"]
image:
  url: "/portfolio/images/imagedefault.webp"
  alt: "Modernizing Datacenter Infrastructure"
---

**Client:** Serendib Finance (Sri Lanka)  
**Objective:** Build a secure, high-availability, compliance-ready infrastructure with improved resilience against modern threats.

## 🚀 Project Highlight
Enterprise Network Modernization for Serendib Finance (Sri Lanka). The primary goal was to build a secure, highly available, and manageable system for their controlled closure phase, ensuring full **CBSL (Central Bank of Sri Lanka)** compliance.

## 🛑 Existing Threats (Challenges)
Prior to the modernization, the infrastructure faced several critical risks:
- **End-of-life servers:** Legacy IBM x3200 hardware with outdated OS and no security patches.
- **Flat network:** No VLAN segmentation, increasing the attack surface.
- **Security gaps:** Expired antivirus and firewall solutions.
- **Data risk:** Lack of a structured backup and recovery plan.

## 🔍 Key Technical Solutions

### ✅ Hyper-V HCI Cluster
- Built a **2-node Hyper-V cluster** using Lenovo SR650 servers and **Storage Spaces Direct (S2D)**.
- Implemented Cluster Shared Volumes (CSV), live migration, and file share witness to achieve **99.8% uptime**.
- Virtualized critical services including Active Directory, Zabbix monitoring, and file/application servers.

### ✅ Network Segmentation & Security
- Designed and implemented **VLANs** for Finance, HR, IT, and Management.
- Configured inter-VLAN routing via **Sophos XGS** firewall.
- Enforced zone-based firewall rules, IPS, web filtering, and **RADIUS-authenticated** CLI access for enhanced security.

### ✅ Endpoint Protection
- Deployed **Kaspersky EDR** for advanced behavioral detection, exploit prevention, and automated host isolation.
- Integrated firewall-level application control and deep HTTPS inspection.

### ✅ Monitoring & Backup
- Installed **Zabbix** for real-time monitoring of switches, VMs, UPS systems, and environmental sensors.
- Implemented a robust backup strategy using **Synology NAS + Azure Backup** with GFS rotation and snapshot recovery.

### ✅ Remote & Branch Access
- Configured site-to-site **IPSec VPN** and **SSL VPN** via Sophos Connect with dual ISP failover for redundant connectivity.

## 📈 Results
- ✔ **60% faster** data synchronization.
- ✔ **80% reduction** in security vulnerabilities.
- ✔ **99.8% uptime** for mission-critical services.
- ✔ **Full regulatory compliance** with CBSL standards.

## 🔗 Technologies & Concepts
- **Virtualization:** Hyper-V, Storage Spaces Direct (S2D)
- **Security:** Sophos XGS, Kaspersky EDR, RADIUS, VLAN/VTP/PAgP
- **Monitoring & Cloud:** Zabbix, Azure Backup
- **Storage:** Synology NAS
