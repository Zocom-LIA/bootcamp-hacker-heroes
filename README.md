![poster](./poster.jpg)

# Bootcamp project YumYum Gimmie Sum

**Bootcamp project for ZoCom LIA**

## Syfte

Syftet med ZoCom LIA Bootcamp är:

- Lära känna andra LIA-studenter

- Lära dig de _tekniker_ vi använder i vår egen stack samt göra dig (och oss) trygg i att utveckla skarpa uppdrag senare under LIAn

- Visa dina _tekniska skills_ och _driv_ för att ge oss en bild om med vad och var du passar bäst framåt i LIAn

- Drilla dig i _konsultmässighet_ och i hur du blir duktig på att fungera i rollen som utvecklare - både som konsult och anställd

## Case

**Grattis!**

Ni är nya utvecklare på ZoCom code magic AB! Ert första uppdrag är att utveckla ett system till food trucken **Yum yum gimmi sum**.

Systemet är en webbapplikation som skall tillgodose några olika behov ( se user stories ) och se ut enligt [följande mockup](https://www.figma.com/file/KeFM1AHHgkPpt3KSi08hkB/Yum-yum-gimmi-sum?type=design&node-id=0%3A1&mode=design&t=J4OXlljHfDQI5TPX-1).

## Kravspec

### Teknisk kravspec

#### Frontend

Er frontend skall vara byggd med React, Typescript, SCSS och Framer motion enligt _monorepo-arkitekturen_.

För att bättre förstå denna arkitektur så finns i detta repo en [boilerplate till projektet](/boilerplate) där några olika packages finns.

#### Backend

Backenden skall byggas i AWS med serverlessteknik. API:et skall säkras med en _API-nyckel_ vid deployment.

- API-gateway
- Lambda
- DynamoDb

### User stories

#### Must have

- Som _kund_ vill jag få en fin upplevelese av YYGS-sidan via min telefon. KLAR
- Som _kund_ vill jag kunna se en meny för att inspiereras och kunna välja vad jag vill äta. KLAR
- Som _kund_ vill jag enkelt kunna klicka ihop en beställning. KLAR
- Som _kund_ vill jag kunna kunna ändra min beställning innan jag skickar iväg den för jag är lite velig. KLAR
- Som _personal_ vill jag kunna se beställningarna tydligt för att veta vad vi ska tillbereda. KLAR
- Som _personal_ vill jag ha beställningarna sorterade på tid ( äldst > nyast ) för att veta i vilken ordning dom skall tillberedas. KLAR
- Som _personal_ vill jag kunna markera när en beställning är redo att serveras för att meddela kunden att hämta den i luckan. KLAR
- Som _kund_ vill jag få en notis av något slag för att veta när min beställning är redo för avhämtning. KLAR
- Som _kund_ vill jag göra mina beställningar via telefonen då jag sällan har datorn med mig på lunchen. KLAR
- Som _personal_ vill jag kunna se beställningarna via en ipad i köket. KLAR

#### Nice to have

- Som _kund_ vill jag få en ETA baserat på hur många och hur stora beställningar som är före mig i kön, så att jag kan avgöra om jag hinner köpa tuggummi på närliggande affären så länge
- Som _kund_ vill jag få en notis från min telefons OS ( Notification API ) så att jag inte behöver hålla stenkoll på hemsidan konstant.
- Som _kund_ vill jag kunna göra en beställning antingen som *guest* eller inloggad *customer*.
- Som _kund_ av typ inloggad *customer* vill jag kunna se min orderhistorik
