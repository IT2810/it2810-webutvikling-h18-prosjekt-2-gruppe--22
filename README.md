This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).



Dokumentasjonen skal diskutere, forklare og vise til alle de viktigste valgene og løsningene på krav til funksjonaltet og krav til teknologi. 800-1000 ord er en fornuftig lengde. 

DOKUMENTASJON

  Krav til innhold og funksjonalitet på websiden
    Startsiden er en tom utstilling med velkomsttekst, som fylles når man velger kategori. Kategoriene velges øverst på siden i form av radioknapper, inndelt i bilde, dikt og lyd. Kategoriene vi valgte var abstrakt, by og landskap, fordi vi syntes det var lettest å finne noe til dette både i form av bilde, tekst og lyd. Gruppa har fordelt oppgaver slik at en tok seg av lyd, en tok seg av dikt og en tok seg av svg. Hver kombinasjon vises som separate faner etter at man har valgt kategori, og dersom brukeren endrer kategori endres også filene. Filene som er blitt brukt ligger under public-mappen. Siden har blitt bygd opp fra liten enhet til større, hvor vi startet med å lage til mobil, og utviklet siden oppover til pc-skjerm. Vi har brukt FlexBox som layout til siden fordi det er en to-dimensjonal side som gjør at vi ikke trenger å komplisere det mer enn nødvendig.


  Krav til bruk av teknologi

    Nettsiden er basert på React. Bildene og teksten lastes dynamisk med AJAX, og de lastes kun dersom man er inne i fanen de vises på. Når brukeren har vært inne på en av fanene, blir mediet lagret på klienten slik at de kun trenger å lastes opp en gang i løpet av tiden brukeren er på nettsiden. Lyd ble håndtert med audio-taggen fra HTML5.

  Krav til testing
    Nettside er testet på Chrome, ??? og ???. Vi opplevde at




/* ALT UNDER ER FRA BB, BRUKES SOM OVERSIKT */


Bruk ES6 (Javascript) og implementer komponentene med class, og implementere en hesiktsmessig komponentstruktur.
Bruk kun de ordinære mekanismene i React for å lagre håndtere og lagre data (du skal mao ikke bruke løsninger som redux, mobx eller andre bibliotek for å håndtere tilstand).
UI-komponentene skal implementeres fra bunne av (uten bruk av tredjeparts komponenter).
AJAX

Bildene (i svg) og teksten (i json) skal lastes dynamisk med AJAX (Asynchronous JavaScript And XML). Du står fritt i valg av tredjeparts javascript-bibliotek for dette.


RESPONSIVE WEB DESIGN

Løsningen skal implementeres med responsiv design som tilpasser seg skjermens størrelse og orientering, og plattform.
Skal skifte layout mellom breddeformat (f.eks. bilde og tekst ved siden av hverandre) og høydeformat (bilde med teksten under f.eks.). Bredde vs. høyde kan også demonstreres med andre elementer enn tekst og bilde.
Følgende elementer skal være med i løsningen (eventuelt begrunnet i dokumentasjonen hvis det ikke er tatt med)
Viewport
Media-queries
Bilder som skalerer
Flytende/fleksibel layout
Dette skal implementeres fra bunnen av uten bruk av eksterne CSS-rammeverk ea.
SAMARBEID, BRUK AV GIT, KODING, LEVERANSE
Koden i prosjektet skal være ryddig strukturert, ha fornuftig kommentering og ha navngiving av komponenter, variabler og funksjoner i tråd med anbefalinger (best practise).
Gruppa skal bruke git i utviklingen (lenke til repository i github classroom kommer når gruppene er bestemt). Utviklingen skal dekomponeres i task som hver beskrives kort med en issue. Commits markeres med hvilken issue de bidrar til/løser. 
Ved innleveringsfristen vil github classroom automtisk lagre en snapshot av prosjektet som blir den formelle innleveringen. 
På evalueringsdagen 24/9 skal siste versjon av systemet være tilgjengelig på den virtuelle maskinen som gruppa har fått tildelt. Prosjektet gjøres tilgjenglig som xxxx.idi.ntnu.no/prosjekt1. Lag en production build som legges under Apache web serveren som lytter på port 80. 
Node.js og NPM


Krav til testing
Testing i dette prosjektet har fokus på brukegrensensitt og repsonsiv web design. 

Gruppa skal dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (lite skjerm/horisontal + vertikal orientering og en ordinær pc (stor skjerm). 
Test brukergrensesnitt systematisk og dokumenter hvordan dere har test.