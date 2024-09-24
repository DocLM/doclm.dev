---
title: "A proposito di questo blog"
date: 2024-09-01
description: "A proposito di questo blog e lo stack tecnologico che lo costituisce."
tags: ["hugo", "markdown", "css", "javascript", "blog"]
categories: []
---

Ciao! Questo è il mio primo post sul blog, e questo spazio è dove condividerò i miei pensieri, esperienze e scoperte nel mondo della tecnologia.
Ma dato che questo è un blog tecnologico, andiamo dritti al punto: **Cosa c'è sotto questo sito web?**

## Indice:
- [Fondamenta: Framework Hugo](#fondamenta-framework-hugo)
- [Personalizzazione: Tema Congo e altre modifiche](#personalizzazione-tema-congo-e-altre-modifiche)
- [Distribuzione: GitHub Pages e Cloudflare](#distribuzione-github-pages-e-cloudflare)

## Fondamenta: Framework Hugo
Hugo è un ottimo framework scritto in Go e uno dei generatori di siti statici più popolari disponibili.

Ciò significa che questo sito web non ha pagine dinamiche o un database che memorizza le informazioni che stai leggendo. Tutto il contenuto viene generato in anticipo da una combinazione di file Markdown per quanto riguarda articoli/pagine di contenuto e un set di template HTML per la struttura del sito.
Il risultato di questo processo è una cartella di sito web tradizionale con tutti i file HTML, CSS e JavaScript che compongono il sito. Se nel tuo caso d'uso puoi fare a meno di pagine dinamiche, un generatore di siti statici può ridurre drasticamente la complessità del tuo stack perché l'unica cosa di cui hai bisogno è un server web per servire questi file.

## Personalizzazione: Tema Congo e altre modifiche
Come per ogni cosa, anche un sito web ha bisogno di qualche piccola personalizzazione prima di diventare originale.

Lo stile di questo sito si basa su un fantastico tema creato per Hugo: [Congo di jpanther](https://github.com/jpanther/congo). Questo tema è basato su alcune delle più recenti tecnologie web, come il framework [Tailwind CSS](https://tailwindcss.com/), e offre un robusto set di funzionalità integrate come il supporto multilingua e la ricerca integrata.
Su questo sito, troverai anche alcuni easter egg di tanto in tanto. Un esempio è l'animazione simile a un terminale ispirata a [questo articolo di Codrops](https://tympanus.net/codrops/2024/06/19/hover-animations-for-terminal-like-typography/).

## Distribuzione: GitHub Pages e Cloudflare
Il passo finale in questo avventura è trovare una casa per il sito web.

Ho scelto di ospitare il sito su GitHub Pages per la sua semplicità e l'automazione che può essere raggiunta attraverso GitHub Actions. Questo permette di aggiornare agevolmente il sito ogni volta che vengono apportate modifiche al repository. Per migliorare ulteriormente le prestazioni del sito e ridurre il carico sul server di origine, l'ho posizionato dietro la rete di distribuzione dei contenuti (CDN) di Cloudflare e ottenendo anche qualche vantaggio:

- Prestazioni: La rete globale di Cloudflare aiuta a servire i contenuti più velocemente ai visitatori in tutto il mondo.
- Caching avanzato: I contenuti statici vengono memorizzati nella cache agli estremi della rete di Cloudflare, riducendo i tempi di caricamento per i visitatori della stessa zona.
- Sicurezza aggiuntiva: Cloudflare aiuta a proteggere il sito da diverse minacce online, inclusi gli attacchi DDoS.

Combinando GitHub Pages e Cloudflare si crea una soluzione di hosting robusta, scalabile e ad alte prestazioni per questo sito web, il tutto mantenendo i costi al minimo.
