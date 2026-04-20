---
date: 2026-04-19 10:00:00 +0530
title: "MedRAG"
slug: medrag
tech: ["Python", "RAG", "AI"]
web: https://github.com/RainboeStrykr/MedRAG
icon: https://img.icons8.com/?size=96&id=dfXdNmnTR3uH&format=png

---

[Live Demo](https://drive.google.com/file/d/11PcWJr1j021Q3Gc_mWnXIGV4tpSwMe5d/view?usp=sharing)

MedRAG is a fully local, agentic RAG system that lets anyone ask natural-language questions about AI in Healthcare and receive **cited, reasoned answers** grounded in a curated set of 60 expert documents (research papers, market reports, blogs, newsletters). Every response is produced by a 3-agent pipeline — a Decomposer, a Reasoner, and a Critic — and every factual claim is linked to the exact source document that supports it.

![Screenshot-1](/project-files/MedRAG(1).png)

For multi-part questions, Agent 1 automatically decomposes the query into sub-queries (shown as numbered blue chips). The answer body contains **inline [DOC-XXX] badges** — clickable chips that open a document detail popup. The green **Critic Agent — All citations verified** bar confirms Agent 3 checked every claim.

![Screenshot-3](/project-files/MedRAG(3).png)

For questions that span multiple documents, the system retrieves and synthesises across sources. The sidebar lists every document consulted, with its title, publisher, date, and a colour-coded type badge (Market Report, Newsletter, Blog, Research Paper). Citations inside the answer body (`[DOC-039]`, `[DOC-021]`) map directly to the sidebar entries.

![Screenshot-2](/project-files/MedRAG(2).png)

You can read about how this project works in detail over [here](https://github.com/RainboeStrykr/MedRAG/blob/main/DETAILS.md)