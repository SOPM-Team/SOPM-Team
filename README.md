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
