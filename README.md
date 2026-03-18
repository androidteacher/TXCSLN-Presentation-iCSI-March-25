# iCSI — TXCSLN Presentation
### The Institute of CyberSecurity and Innovation | NorthEast ISD | San Antonio, TX

A 24-slide HTML/CSS/JS presentation delivered to the **Texas Computer Science Leadership Network (TXCSLN)** in March 2025. The presentation covers the history, facilities, curriculum model, cyber range, and AI integration strategy at iCSI — a district-wide cybersecurity magnet program serving NorthEast ISD.

---

## Running the Presentation

**With Docker (recommended):**
```bash
docker compose up --build -d
```
Open [http://localhost:80](http://localhost:80)

**Without Docker:**
Open `index.html` directly in a browser. All navigation uses relative paths and works as a local file.

---

## Presentation Content Summary

### Slides 1–3 — Background & History
- **Slide 1 — Intro:** iCSI overview, links to the live presentation and GitHub repo.
- **Slide 2 — iCSI History:** Started in 2013 at Roosevelt High School when Mr. Beck took 6 students to sit for Network+ — everyone passed. Today, ~60 students pass Security+, ~40 pass Network+, and ~90 pass Tech+ annually. Senior-level students pursue CySA+, PenTest+, AWS, and OSCP.
- **Slide 3 — iCSI Opens (2019):** The NEISD Board approved $9M to renovate an abandoned community Walmart. Year 1 launched with 2 instructors and 9th graders only. By the time the first cohort graduated, iCSI had a complete 4-year curriculum and 6 trained instructors.

### Slides 4–6 — The Facility & Program Model
- **Slide 4 — Facility Photos:** Photo tour of the campus — Security Operations Center classroom, front entrance (former Walmart), dedication plaque, PearsonVue on-site testing lab, networking lab, and 30,000 sq/ft of undeveloped space (bond-funded stadium planned). All panoramas are click-to-expand.
- **Slide 5 — 4-Year Program Track:** Year 1: Tech+ | Year 2: Network+ | Year 3: Security+ | Year 4: Student's choice (internship opportunities). Supplemental resources include CertMaster Practice/Learn and Cisco Academy.
- **Slide 6 — Why This Model Works:** Any district student can attend iCSI while still attending their home campus for all other classes. A small team of deeply qualified instructors serves the entire district — something that would be impossible to replicate at 7 individual campuses given private-industry pay competition.

### Slides 7–9 — Curriculum: On-Premise Infrastructure
- **Slide 7 — Topics Overview:** Two focus areas — What does the curriculum look like? and How is iCSI integrating AI?
- **Slide 8 — Curriculum: On-Premise:** Each student workstation has 32 GB RAM + VMware. The virtualization cluster has 1.5 TB RAM, 96 CPU cores, and 30 TB disk (~$80k total investment), supporting 200–300 concurrent VMs. Used for an always-on ticketing system (students are called to fix issues first), an on-premise cyber range with 100+ exploit tutorials, student SIEM/EDR access, and on-demand project VMs.
- **Slide 9 — On-Premise Drawbacks:** Students can't access the on-premise lab from home. The solution: containerize everything and push to Docker Hub so any activity can be pulled and run locally.

### Slides 10–12 — Portable Curriculum & Notion
- **Slide 10 — Portable Activities:** Live example at cyberlessons101.com. Each challenge ties to a real-world breach (e.g., 1Password/Okta). Students type a single `docker run` command — the container spins up locally. Super easy. All inline screenshots are click-to-zoom.
- **Slide 11 — Solution Guides:** Every activity has a Notion-hosted solution guide. Example: [Har Har Hijack — The Okta Plunder (Dockerized)](https://humble-raptor-f30.notion.site/Har-Har-Hijack-The-Okta-Plunder-Dockerized-2f34c8e523768034b6bace15c572fbf1).
- **Slide 12 — Why Notion?** Full Markdown support / Screenshots double-click to zoom in-browser / Flexible layout, completely free / Beats Google Drive for this use case.

### Slide 13 — iCSI Cyber Range
A gamified CTF-style platform hosted entirely in Docker. The scoreboard is visible to the whole class. First Blood bonuses reward the fastest solver. Student ranking persists across the semester and exports directly to the gradebook — no manual grading. Anyone can self-host with a single `docker run` command.

### Slide 14 — AI: Brief History
A four-era timeline of AI capability:
1. **2017 — Perceive:** Pattern recognition at scale.
2. **~2020 — Generate:** Natural language prediction.
3. **2–3 years ago — Reason:** Chain-of-thought, self-questioning before answering.
4. **Most recently — Agentic:** AI builds, deploys, and executes multi-step tasks autonomously.

Instructors at iCSI spend $100–$200/month in API credits (Google, Anthropic, KIMI AI) using agentic AI tools extensively.

### Slides 15–21 — AI Integration at iCSI
- **Slide 15 — Complex Infrastructure:** iCSI requires students to manually build and troubleshoot real infrastructure before relying on AI — true AI proficiency requires understanding the underlying systems. Once mastered, AI becomes a *workforce multiplier*.
- **Slide 16 — The Manual Route:** Vigilance comes from coffee. Precise language comes from having done the hard thing manually at least once.
- **Slide 17 — Student AI Training:** Technical expertise remains valuable — what changes is how it's applied. Students at iCSI aspire to the *AI Supervisor* role.
- **Slide 18 — Instructor AI Usage:** iCSI instructors write and maintain their own curriculum package at each grade level, updated continuously.
- **Slide 19 — The Before Times:** Pre-AI, a 20-minute student activity could take an instructor 3–4 hours to develop. Live-fire penetration testing activities are a hallmark of the program.
- **Slide 20 — Agentic Curriculum:** Using agentic AI, development time for those same activities is now under 30 minutes in most cases, with noticeably higher quality output.
- **Slide 21 — How This Site Was Built:** This slideshow was completely prompt-engineered — no code was manually written or deployed.

### Slides 22–24 — Costs, Resources & Contact
- **Slide 22 — Cost/Benefit: Agentic AI for Students:** Purchasing API credits for an entire student group would be expensive and complicated to manage. iCSI is currently evaluating on-premise GPU options in the $8,000–$12,000 range to support student AI activities.
- **Slide 23 — Resources:**
  - [GitHub — This Presentation](https://github.com/androidteacher/TXCSLN-Presentation-iCSI-March-25)
  - [Teaching Tokens: Implementing Private, Lightweight AI in the Classroom](https://humble-raptor-f30.notion.site/Teaching-Tokens-Implementing-Private-Lightweight-AI-in-the-Classroom-MiniJarvis-3174c8e523768022b7daf704a7d2f9d1?source=copy_link)
  - [Inside OpenClaw: Deploying, Sniffing and Hijacking the Agent](https://www.notion.so/Inside-OpenClaw-Deploying-Sniffing-and-Hijacking-the-Agent-3224c8e523768080bcdbe0661a560c40?source=copy_link) *(~$5 for the full guide — best for individual seniors and instructors)*
- **Slide 24 — Thank You / Contact:**

| Instructor | Email | Role |
|---|---|---|
| Eric Asel | easel@neisd.net | Senior Practicum Internship / Pentest+ / Security+ |
| Josh Beck | jbeck@neisd.net | We aren't sure what he does around here to be honest. |
| Dalia Pulido | dpulido@neisd.net | Network+ / CCNA Expert |
| Pedro Saenz | psaenz1@neisd.net | ITF+ / Tech+ Expert |
| Brandi Nguyen | bnguye@neisd.net | Security+ Expert |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Plain HTML, CSS, JavaScript (no frameworks) |
| Web server | nginx:alpine |
| Container | Docker / docker compose |
| Fonts | Google Fonts (Inter, Outfit, Space Grotesk) |
| Navigation | Relative-path JS (`data-depth` attribute) — works as `file://` locally |
| Lightbox | Custom CSS/JS panorama modal (`.pano-modal` / `.panorama-img`) |

## Project Structure

```
TXCSLN_Presentation/
├── index.html                     (Slide 1)
├── Dockerfile
├── docker-compose.yml
├── css/style.css
├── js/script.js
├── pics/
│   ├── icsi_Pictures/             (facility panoramas)
│   ├── CyberLessons_Activity/
│   ├── docker/
│   ├── scoreboard/
│   └── logo/
└── pages/
    ├── 02_History/
    ├── 03_iCSI_Opens/
    ├── 04_Facility_Photos/
    ├── 05_Program_Track/
    ├── 06_Why_This_Works/
    ├── 07_Topics_Overview/
    ├── 08_Curriculum_OnPrem/
    ├── 09_OnPrem_Drawbacks/
    ├── 10_Portable_Activities/
    ├── 11_Solution_Guide/
    ├── 12_Why_Notion/
    ├── 12_Cyber_Range/
    ├── 13_AI_Evolution/
    ├── 14_Complex_Infrastructure/
    ├── 15_Manual_Route/
    ├── 16_Student_AI_Training/
    ├── 17_Instructor_AI_Usage/
    ├── 18_Before_Times/
    ├── 19_Agentic_Curriculum/
    ├── 20_How_Built/
    ├── 21_Agentic_Costs/
    ├── 22_Resources/
    └── 23_Thank_You/
```
