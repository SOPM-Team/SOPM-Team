# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
=======
# WanderPlan - Planificator Inteligent de Calatorii

## Membrii echipei
- Ionut-Marian Sima
- Gherghe Radu-Andrei
- Mihai George-Marius

## Descriere
WanderPlan este o aplicatie web interactiva de planificare a calatoriilor care permite utilizatorilor sa isi creeze conturi, sa aleaga destinatii dintr-o lista internationala, sa vizualizeze itinerarii detaliate pe 7 zile cu puncte de interes, imagini de inalta calitate si sa calculeze un buget estimat in timp real pe categorii.

## Template selectat
Template 4 - Aplicatie bazata pe locatie / Template de cautare si planificare

## API selectat
- Nume API: REST Countries
- Furnizor: restcountries.com
- Documentatie: https://restcountries.com/
- Endpoint propus: https://restcountries.com/v3.1/name/romania
- Metoda HTTP: GET
- Necesita autentificare: Nu
- Metoda de autentificare: Niciuna (endpoint public)
- Cheie solicitata de la furnizor: Nu

## Exemplu de request
https://restcountries.com/v3.1/name/romania

## Date utilizate din raspuns
- capital
- currencies
- population
- flags

## Rezultatul testarii request-ului
- Data testarii: 2026-10-15
- Cod HTTP sau mesajul de eroare: HTTP 200 OK (Raspuns JSON primit cu succes)
- Observatii: Datele despre tari sunt preluate corect si structurate pentru a fi afisate dinamic in interfata.

## Functionalitati
- Autentificare si inregistrare utilizator;
- Selectia destinatiei dintr-un meniu cu 10 tari;
- Afisarea unui itinerariu detaliat pe 7 zile cu imagini si preturi in RON;
- Calcularea automata a bugetului in timp real si statistici pe categorii.

## Gestionarea starilor
- Loading: Afisarea starii de incarcare in interfata in timpul preluarii datelor;
- Success: Randarea cu succes a cardurilor si a detaliilor despre destinatii;
- Empty: Mesaje corespunzatoare cand nu exista elemente selectate sau tari gasite;
- Error: Gestionarea erorilor de retea sau a intrarilor invalide.

## Responsabilitati
- Ionut-Marian Sima: Autentificare, alegerea locatiei si structura paginii principale (index.html)
- Gherghe Radu-Andrei: Puncte de interes, imagini pe carduri si itinerariul pe 7 zile (puncte-interes.html)
- Mihai George-Marius: Modulul de calculare a bugetului, bare de progres si statistici (buget.html)

## Instructiuni de configurare si rulare
In aceasta etapa, se cloneaza repository-ul si se testeaza fisierele HTML/CSS locale in browser. Pentru rulare, deschideti fisierul `index.html` intr-un browser web sau folositi o extensie de tip Live Server.

