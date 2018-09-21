DOKUMENTASJON

  Krav til innhold og funksjonalitet på websiden
    Startsiden er en tom utstilling med velkomsttekst som fylles når man velger en kategori til alle mediene. Kategoriene velges øverst på siden i form av radioknapper, inndelt i bilde, tekst og lyd. Kategoriene vi valgte var abstrakt, by og landskap, fordi vi syntes det var lettest å finne medier til dette både i form av bilde, tekst og lyd. Gruppa har fordelt oppgaver slik at en tok seg av lyd, en tok seg av tekst og en tok seg av svg. 
    Hver kombinasjon av medier vises som separate faner etter at man har valgt kategorier, og dersom brukeren endrer kategori underveis endres også fanene. Filene som er blitt brukt for medier ligger under public-mappen. Siden har blitt bygd fra stor enhet til liten, hvor vi startet med å lage nettsiden responsiv til pc-skjermer, og utviklet siden nedover til nettbrett og mobil. Vi har brukt FlexBox som layout til siden fordi det er en to-dimensjonal side som gjør at vi ikke trenger å komplisere det mer enn nødvendig.

  Krav til bruk av teknologi
    Nettsiden er basert på React. Bildene og teksten lastes dynamisk med AJAX, og de lastes kun dersom man er inne i fanen de vises på. Når brukeren har vært inne på en av fanene, blir mediet lagret på klienten slik at de kun trenger å lastes opp en gang i løpet av tiden brukeren er på nettsiden. Lyd ble håndtert med audio-taggen fra HTML5.

  Krav til testing
    Nettside er testet på PC-skjerm, ... og ... . Vi opplevde at ...
    Da vi skulle teste nettsiden på forskjellige skjermstørrelser ble vi oppmerksomme på at teksten legger seg oppå bildet istedenfor under dersom vi skalerte fra stor til mindre skjerm etter at vi hadde valgt kategorier. Dette har ikke vært et problem tidligere, og må ha skjedd ved en feil. Dersom man trykker på fanen etter at skaleringen er ferdig vil siden vises som den skal.


  Responsive webdesign
    Som nevnt over er layouten på nettsiden bygd opp av FlexBox. Dette vil si at når man bruker siden på mindre skjermer som f.eks mobil, så blir layouten anderledes enn om man bruker den på PC-skjerm. Blant annet blir kategoriene lagt sammen i en dropdown-meny og teksten og lyden står under bildene istedenfor ved siden av i selve utstillingsvinduet. Alle SVG-bildene skalerer utifra skjermstørrelsen, bortsett fra bildene fra by-kategorien. Vi har prøvd flere måter å fikse dette på uten hell, og dersom vi hadde hatt mer tid ville vi ha fikset dette. Viewport og Media-queries har blitt brukt for responsiv webdesign.

  Samarbeid, bruk av Git , koding, leveranse
    Gruppa har brukt GitHub for å dele kode og holde oversikt over issues gjennom hele prosjektperioden. Hver issue har blitt løst gjennom en egen branch markert med "feat-'issuenummer'-'tittel'", og hver commit med -m "#issuenummer beskrivelse".

  Kilder:
    Lyd:
        - Slow wind chimes - Be Steele (abstract0.mp3)
          - https://freesound.org/people/be-steele/sounds/192322/
        - Background Abstract Sound - HiFiJohn (abstract2.mp3)
          - https://freesound.org/people/hifijohn/sounds/428125/
        - Abstract Guitar - Jalastram (abstract3.mp3)
          - https://freesound.org/people/jalastram/sounds/240297/
        - Abstract Atmosphere - Luhenri King (abstract1.mp3)
          - https://freesound.org/people/luhenriking/sounds/433981/
        - City Traffic Outdoor - Embrace the Art (city0.mp3)
          - https://freesound.org/people/embracetheart/sounds/345313/
        - City River - Fpanska Krug Antonin  (city2.mp3)
          - https://freesound.org/people/13FPanska_Krug_Antonin/sounds/379089/
        - Piccadilly Circus Ambience - Habbis (city3.mp3)
          - https://freesound.org/people/habbis92/sounds/240233/
        - Small City - Lauris (city1.mp3)
          - https://freesound.org/people/lauris3722/sounds/159762/
        - Tawny Owls - Benboncan (landscape1.mp3)
          - https://freesound.org/people/Benboncan/sounds/64544/
        - Farm Ambience - Dobroide (landscape2.mp3)
          - https://freesound.org/people/dobroide/sounds/50930/
        - Woodpecker and other birds on a spring morning - Kyster (landscape3.mp3)
          - https://freesound.org/people/Kyster/sounds/182740/
        - Grasshoppers - Mr. Auralization (landscape0.mp3)
          - https://freesound.org/people/MrAuralization/sounds/243681/      
      
      Tekst:
        - Nordmannen - Ivar Aasen
          - http://www.aasentunet.no/iaa/no/ivar_aasen/nordmannen_-_temaside/Korrekt+versjon.d25-SwljS5Q.ips
        - Minner om et landskap - Jon Bing
          - https://digitaltmuseum.no/021045897170/minner-om-et-landskap-grafikkserie
        - Fjelltur - Finn Sandum
          - https://www.fjellforum.no/forums/topic/30814-natur-dikt/
        - Sommernatt - Arnulf Øverland
          - http://dagensdikt.blogspot.com/2004/05/god-fredags-morgen-i-dag-fant-jeg-et.html
        - Ingen - Lars Saabye
          - https://www.instagram.com/p/BjFvo1kFiPR/?taken-by=renpoesi
        - -- - Bård Torgersen
          - https://www.instagram.com/p/BUUHFBLjFb0/?taken-by=renpoesi
        - Synsbedrag - Ernst Orvil
          - http://onskedikt.origo.no/-/bulletin/show/697511_synsbedrag
        - Det hemmelige under, Inger Hagerup
        - Signaler - Rolf Jacobsen
          - https://www.nb.no/items/URN:NBN:no-nb_digibok_2010032920032
        - Midt i Byen - Rudolf Nilsen
          - https://www.nb.no/items/823a58866e17d3756319edacc182c390?page=15&searchText=Rudolf%20Nilsen%20Hverdagen
        - Storby-natt - Rudolf Nilsen
          - http://dikt.org/Storby-natt
        - Gategutt - Rudolf Nilsen
          - http://www-bib.hive.no/tekster/ekstern/rudolf-nilsen/pa-gjensyn/gategutt.html

      Bilder:

      Øvrig:
        - Collapsible for kategorier
         - https://alligator.io/css/collapsible/





/* ALT UNDER ER FRA BB, BRUKES SOM OVERSIKT, FJERNES FØR INNLEVERING */

Bildene (i svg) og teksten (i json) skal lastes dynamisk med AJAX (Asynchronous JavaScript And XML). Du står fritt i valg av tredjeparts javascript-bibliotek for dette.

SAMARBEID, BRUK AV GIT, KODING, LEVERANSE
Koden i prosjektet skal være ryddig strukturert, ha fornuftig kommentering og ha navngiving av komponenter, variabler og funksjoner i tråd med anbefalinger (best practise).

Krav til testing
Testing i dette prosjektet har fokus på brukegrensensitt og repsonsiv web design. 

Gruppa skal dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (lite skjerm/horisontal + vertikal orientering og en ordinær pc (stor skjerm). 
Test brukergrensesnitt systematisk og dokumenter hvordan dere har test.