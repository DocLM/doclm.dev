---
title: 👋 Mondo!
description: ""
date: 2024-09-01
preview: ""
tags: []
categories: []
---

## whoami
Nella vita mi occupo di DevOps ma sono anche appasionato di Data Science. Ho esperienza nello sviluppo software, nella gestione del ciclo di vita delle applicazioni e nell'automazione dell'infrastruttura. Tra le cose che mi piace fare c'è trasformare sfide complesse in soluzioni eleganti ed efficienti. Che mi si trovi a progettare un'architettura multi-tier, sviluppare un'API web o saldare una porta seriale su un dispositivo IoT, penso che tutto sia un'opportunità per imparare e affronto ogni cosa con curiosità e determinazione.

## Quando non sei davanti a uno schermo, esattamente cosa fai...
Potresti trovarmi a servire ace sul campo da tennis, a scattare con la mia fotocamera o a immergermi negli ultimi libri tecnici che mi hanno affascinato. Credo che non si smetta mai di imparare e di imparare dagli altri, che sia attraverso conferenze IT o mandando qualche pull request a progetti che mi appassionano.

## I miei principi
Se cerchi le solite cose da mettere sul curriculum, ma anche un fondo di verità, questa è la sezione giusta!

1. **L'utente al primo posto**: Che stia costruendo infrastrutture o sviluppando applicazioni, tengo sempre a mente l'utente finale. La tecnologia dovrebbe semplificare la vita, non complicarla.
2. **Semplicità**: Mi piace affrontare problemi complessi e trasformarli in soluzioni eleganti ed efficienti.
3. **Curiosità**: Il mondo della tecnologia non si ferma mai, e nemmeno io. Ogni volta che esamino un'infrastruttura, un'applicazione o un dispositivo IoT, mi troverai a smontarli in pezzi per vedere come è fatto.
4. **Qualità**: Difficilmente mi accontento, "abbastanza buono" non è mai abbastanza buono per me. Cerco la qualità in ogni riga di codice, in ogni design e in ogni progetto che intraprendo.
5. **Collaborazione**: Credo che le migliori innovazioni provengano da menti diverse che lavorano insieme. Sono sempre desideroso di condividere conoscenze, imparare dagli altri e contribuire al successo di un team.

## Restiamo in contatto
Se sei interessato a discutere gli ultimi post e contenuti di questo sito, non esitare a contattarmi. Sono sempre aperto a nuovi spunti e collaborazioni.

<span id="mailPlaceholder"></span>
{{< mail.inline >}}
{{ $aboutMe := resources.Get "/js/about-me.js" | resources.Minify | resources.Fingerprint "sha512" }}
<script
  defer
  type="text/javascript"
  src="{{ $aboutMe.RelPermalink }}"
  integrity="{{ $aboutMe.Data.Integrity }}"
></script>
{{< /mail.inline >}}