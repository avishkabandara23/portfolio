---
layout: /src/layouts/ProjectLayout.astro
title: 'Active Directory Migration & Zero-Downtime Migration - Epic Lanka Technologies'
pubDate: 2024-09-14
description: 'Migrated legacy Windows Server environment to Server 2022 with zero-downtime, resolving underlying replication issues and security hardening.'
languages: ["Active Directory", "Windows Server 2022", "FSMO Roles", "Identity Management"]
image:
  url: "/portfolio/images/imagedefault.webp"
  alt: "Active Directory Infrastructure Migration"
---

**Client:** Epic Lanka Technologies  
**Project Duration:** 10/09/2024 – 14/09/2024

## Overview

Spearheaded a critical enterprise identity management upgrade for Epic Lanka Technologies, migrating their mixed-OS legacy environment to a modernized Windows Server 2022 Standard architecture. The existing infrastructure consisted of a virtualized Windows Server 2012 R2 Primary Domain Controller and a physical Windows Server 2019 Secondary Domain Controller. The core mandate was to perform a comprehensive cleanup of legacy domain metadata and execute a seamless, zero-downtime migration, ensuring absolutely no disruption to end-user authentication or daily business operations.

## Key Features & Contributions

### 📋 Pre-Migration Remediation & Health Checks
Conducted a deep architectural review of the existing environment. Cleaned up abandoned Domain Controller metadata and orphaned records. Identified and resolved hidden replication issues within the event logs to establish a completely healthy baseline prior to migration.

### 🔄 Zero-Downtime FSMO Role Transfer
Executed a strategic migration plan by temporarily transferring FSMO roles and Global Catalog responsibilities to the secondary server. This ensured continuous availability while the new Primary Windows Server 2022 environment was deployed, configured, and synchronized.

### 🏢 Physical & Virtual Server Modernization
Deployed the new virtual Primary DC and performed a fresh OS installation of Windows Server 2022 Standard on the physical Secondary server. Successfully promoted both as modern domain controllers, migrating all user profiles, roles, and group policies intact.

### 🛡️ Validation & Security Hardening
Verified bi-directional replication health across the new infrastructure and synced primary updates to client PCs. Safely demoted and decommissioned the legacy 2012 R2 and 2019 servers. Applied the latest Microsoft best practices for Active Directory security.

### 🤝 Post-Migration Support & Handover
Provided comprehensive on-site and remote monitoring immediately following the cutover to guarantee stability. Concluded the project with comprehensive troubleshooting support, a formal site handover, and training for the client's internal IT staff.

## Impact

Successfully eradicated technical debt by retiring end-of-life operating systems (Server 2012 R2) and resolving underlying replication errors. The meticulous, phased approach ensured 100% uptime, allowing all Epic Lanka employees to continue their work seamlessly without a single authentication failure or service interruption during the transition.

## Technologies & Concepts Used

- Active Directory Domain Services (AD DS)
- Windows Server 2012 R2 / 2019 / 2022 Standard
- FSMO Role Management
- DNS & DHCP
- Identity & Access Management (IAM)
