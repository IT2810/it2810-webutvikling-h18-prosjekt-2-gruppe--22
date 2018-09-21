
# Dokumentasjon gruppe 22

  ## Innhold og funksjonalitet på websiden
  Startsiden er en tom utstilling med velkomsttekst som fylles når man velger en kategori til alle mediene. Kategoriene velges øverst på siden i form av radioknapper, inndelt i bilde, tekst og lyd. Kategoriene vi valgte var abstrakt, by og landskap, fordi det var lettest å finne medier til dette både i form av bilde, tekst og lyd. Gruppa har fordelt oppgaver slik at en tok seg av lyd, en tok seg av tekst og en tok seg av svg. Hver kombinasjon av medier vises som separate faner etter at man har valgt kategorier, og dersom brukeren endrer kategori underveis endres også fanene. Hvis man ikke har valgt en kategori for hver av mediene, vil man heller ikke få mulighet til å velge fane. Fanene vil få en lyseblå farge på hover og når de har blitt trykket på. Når man trykker et annet sted vil ikke denne blå fargen bli værende. Et forbedringsforslag vil derfor være at den aktive fanen er aktiv helt til brukeren velger en annen fane, men vi fant ikke en quickfix på dette uten å måtte gjøre store endringer på hvordan fanene er implementert. Filene som er blitt brukt for medier ligger under public-mappen. Siden har blitt bygd fra stor enhet til liten, hvor vi startet med å lage nettsiden responsiv til pc-skjermer, og utviklet siden nedover til nettbrett og mobil. Designet på siden er basert på mockups som ble laget i begynnelsen av prosjektet. Vi har brukt FlexBox som layout til siden fordi det er en to-dimensjonal side som gjør at vi ikke trenger å komplisere det mer enn nødvendig. Kildene til svg bildene vil du se under hver respektive svgbilde. Kildene er også oppgitt på slutten av dette dokumentet.

  ## Bruk av teknologi
  Nettsiden er basert på React. Bildene og teksten lastes dynamisk med AJAX, og de lastes kun når man bytter mellom kategoriene abstrakt, landskap og by. Hvis man trykker på checkboxen "abstrakt" for svg, vil man dermed laste ned alle svg-bildene for kategorien abstrakt. Bildene til den korresponderende kategorien vil lagres som en state, slik at man ikke trenger å laste ned svgbildene flere ganger hvis man bytter mellom fanene. Lyd ble håndtert med audio-taggen fra HTML5.

  ## Testing
  Vi har brukt Chrome for å bygge opp siden under hele prosjektet. Nettside er testet på PC-skjerm, nettbrett og mobil. Vi har testet ved å prøve ut flere ulike kombinasjoner av bilder, tekst og lyd og sett alt kommer opp som det skal. Deretter har vi prøvd å skalere siden og sett på hvordan det vil se ut på nettbrett og mobil. Vi har gjort de samme testene for nettleserne Chrome, firefox, safari og microsoft edge. Vi opplevde at alle testene fungerte som forventet, med tre unntak. Bildene fra by-kategorien blir ikke skalert, og vi har prøvd flere måter å fikse dette på uten hell, og dersom vi hadde hatt mer tid ville vi ha fikset dette.
  Vi ble også oppmerksomme på at teksten noen ganger legger seg litt oppå bildet istedenfor under dersom vi skalerte fra stor til mindre skjerm etter at vi hadde valgt kategorier. Dette har ikke vært et problem tidligere, men noe vi oppdaget under testingen. Dersom man trykker på en fane etter at skaleringen er ferdig vil bildene og teksten vises som den skal. Dette problemet opplevde vi i chrome og safari, men ikke microsoft edge eller firefox
  Vi opplevde også at det første bildet fra abstrakt-kategorien hadde blitt flyttet helt til venstre side av skjermen og ble noe mindre første gangen man trykket på denne kategorien, slik at bare 1/10 av bildet syntes. Dersom vi velger kategorien by, også tilbake til abstrakt, fungerer det som det skal igjen. 

  ## Responsive webdesign
  Som nevnt over er layouten på nettsiden bygd opp av FlexBox. Dette vil si at når man bruker siden på mindre skjermer som f.eks mobil, så blir layouten anderledes enn om man bruker den på PC-skjerm. Blant annet blir kategoriene lagt sammen i en dropdown-meny og teksten og lyden står under bildene istedenfor ved siden av i utstillingsvinduet. Alle SVG-bildene skalerer utifra skjermstørrelsen, bortsett fra bildene fra by-kategorien. Viewport og Media-queries har blitt brukt for responsiv webdesign.

  ## Samarbeid, bruk av Git, koding, leveranse
  Gruppa har brukt GitHub for å dele kode og holde oversikt over issues gjennom hele prosjektperioden. Vi har brukt github sitt trello board for å holde oversikt over hvilke issuer som er ferdig, hvilke som jobbes med og kommende issuer. Personen som jobber med en issue har lagt seg til på denne issuen, slik at man til en hver tid kan se hvem som jobber med hva. Hver issue har blitt løst gjennom en egen branch markert med "feat-'issuenummer'-'tittel'", og hver commit med -m "#issuenummer beskrivelse". Når en issue er ferdig har vi laget en pull request på github hvor de andre kan se over at alt fungerer som det skal.

  ## Kilder
    Lyd:
        - Slow wind chimes - Be Steele (abstract0.mp3)
          - https://freesound.org/people/be-steele/sounds/192322/
        - Abstract Atmosphere - Luhenri King (abstract1.mp3)
          - https://freesound.org/people/luhenriking/sounds/433981/
        - Background Abstract Sound - HiFiJohn (abstract2.mp3)
          - https://freesound.org/people/hifijohn/sounds/428125/
        - Abstract Guitar - Jalastram (abstract3.mp3)
          - https://freesound.org/people/jalastram/sounds/240297/
        - City Traffic Outdoor - Embrace the Art (city0.mp3)
          - https://freesound.org/people/embracetheart/sounds/345313/
        - Small City - Lauris (city1.mp3)
          - https://freesound.org/people/lauris3722/sounds/159762/
        - Abstract Atmosphere - Luhenri King (abstract1.mp3)
          - https://freesound.org/people/luhenriking/sounds/433981/
        - City Traffic Outdoor - Embrace the Art (city0.mp3)
          - https://freesound.org/people/embracetheart/sounds/345313/
         - Small City - Lauris (city1.mp3)
          - https://freesound.org/people/lauris3722/sounds/159762/
        - City River - Fpanska Krug Antonin  (city2.mp3)
          - https://freesound.org/people/13FPanska_Krug_Antonin/sounds/379089/
        - Piccadilly Circus Ambience - Habbis (city3.mp3)
          - https://freesound.org/people/habbis92/sounds/240233/
        - Grasshoppers - Mr. Auralization (landscape0.mp3)
          - https://freesound.org/people/MrAuralization/sounds/243681/
        - Tawny Owls - Benboncan (landscape1.mp3)
          - https://freesound.org/people/Benboncan/sounds/64544/
        - Farm Ambience - Dobroide (landscape2.mp3)
          - https://freesound.org/people/dobroide/sounds/50930/
        - Woodpecker and other birds on a spring morning - Kyster (landscape3.mp3)
          - https://freesound.org/people/Kyster/sounds/182740/
             
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

    Svg: 
        - Dragon scales - svgbackgrounds (svg/abstract0.svg)
          - https://www.svgbackgrounds.com/#dragon-scales 
        - Tortoise shell - svgbackgrounds (svg/abstract1.svg)
          - https://www.svgbackgrounds.com/#tortoise-shell
        - Radiant gradient - svgbackgrounds (svg/abstract2.svg)
          - https://www.svgbackgrounds.com/#radiant-gradient
         - Subtle Prism - svgbackgrounds (svg/abstract3.svg)
            - https://www.svgbackgrounds.com/#subtle-prism
         - Roundicons - Flaticon (svg/cityt0.svg)
            - https://www.flaticon.com/free-icon/cityscape_189060#term=city&page=1&position=5
         - City night - Flaticon (svg/city1.svg)
            - https://www.flaticon.com/free-icon/city-towers-view_46270'
          - City tower - Freepik (svg/city2.svg)
            - https://www.flaticon.com/free-icon/city-towers-view_46270
          - Cityscape - Zlatko Najdenovski (svg/city3.svg)
            - https://www.flaticon.com/free-icon/cityscape_327985'
          - Field landcape with horse illustration - Vexels (svg/landscape0.svg)
            -  https://www.vexels.com/vectors/preview/144685/field-landscape-with-horse-illustration
          - Winter snow landscape illustration - Vexels (svg/landscape1.svg)
            - https://www.vexels.com/vectors/preview/145256/winter-snow-landscape-illustration
          - Winter mountain landscape illustration - Vexels (svg/landscape2.svg)
            - https://www.vexels.com/vectors/preview/144755/winter-mountain-landscape-illustration
          - Flat hiking landscape illustration - Vexels (svg/landscape3.svg)
            - https://www.vexels.com/vectors/preview/144655/flat-hiking-landscape-illustration
            
 
      Øvrig:
        - Collapsible for kategorier
         - https://alligator.io/css/collapsible/


