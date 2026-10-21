// Nume chei pentru localStorage
const STORAGE_USER = 'travel_user';
const STORAGE_COUNTRY = 'travel_country';
const STORAGE_POI = 'travel_poi';

document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initCountriesAPI();
    initPOI();
    initBudgetCalculator();
});

/* --- 1. Autentificare / Creare Cont (George) --- */
function initAuth() {
    const authForm = document.getElementById('auth-form');
    const userWelcome = document.getElementById('user-welcome');
    const displayUser = document.getElementById('display-user');
    const logoutBtn = document.getElementById('logout-btn');

    if (!authForm) return;

    const savedUser = localStorage.getItem(STORAGE_USER);
    if (savedUser) {
        authForm.classList.add('hidden');
        userWelcome.classList.remove('hidden');
        displayUser.textContent = savedUser;
    }

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        localStorage.setItem(STORAGE_USER, username);
        authForm.classList.add('hidden');
        userWelcome.classList.remove('hidden');
        displayUser.textContent = username;
    });

    logoutBtn?.addEventListener('click', () => {
        localStorage.removeItem(STORAGE_USER);
        authForm.classList.remove('hidden');
        userWelcome.classList.add('hidden');
    });
}

/* --- 2. API 10 Țări (George & Gherghe) --- */
function initCountriesAPI() {
    const grid = document.getElementById('countries-grid');
    const loading = document.getElementById('loading');
    if (!grid) return;

    // Preluare date reale despre 10 țări de la REST Countries API
    fetch('https://restcountries.com/3.1/alpha?codes=fra,ita,esp,deu,grc,jpn,usa,tur,egy,gbr')
        .then(response => response.json())
        .then(data => {
            loading.style.display = 'none';
            data.forEach(country => {
                const card = document.createElement('div');
                card.className = 'country-card';
                card.innerHTML = `
                    <img src="${country.flags.svg}" alt="${country.name.common}">
                    <h4>${country.name.common}</h4>
                    <small>Capitală: ${country.capital ? country.capital[0] : 'N/A'}</small>
                `;
                card.addEventListener('click', () => {
                    localStorage.setItem(STORAGE_COUNTRY, country.name.common);
                    alert(`Ai selectat destinația: ${country.name.common}`);
                });
                grid.appendChild(card);
            });
        })
        .catch(err => {
            loading.textContent = 'Eroare la încărcarea țărilor din API.';
            console.error(err);
        });
}

/* --- 3. Puncte de Interes (Gherghe) --- */
function initPOI() {
    const saveBtn = document.getElementById('save-poi-btn');
    if (!saveBtn) return;

    saveBtn.addEventListener('click', () => {
        const selectedItems = [];
        const checkboxes = document.querySelectorAll('.poi-item:checked');
        
        checkboxes.forEach(cb => {
            selectedItems.push({
                name: cb.value,
                cost: parseFloat(cb.getAttribute('data-cost')),
                category: cb.getAttribute('data-category')
            });
        });

        localStorage.setItem(STORAGE_POI, JSON.stringify(selectedItems));
        const status = document.getElementById('poi-status');
        status.textContent = 'Selecțiile au fost salvate cu succes! Mergi la pagina "Calcul Buget".';
    });
}

/* --- 4. Calculare Buget (Sima) --- */
function initBudgetCalculator() {
    const calcBtn = document.getElementById('calc-budget-btn');
    if (!calcBtn) return;

    // Afișează destinația salvată
    const destName = document.getElementById('dest-name');
    const savedCountry = localStorage.getItem(STORAGE_COUNTRY);
    if (savedCountry) {
        destName.textContent = savedCountry;
    }

    // Afișează POI-urile salvate
    const poiList = document.getElementById('selected-poi-list');
    const savedPOI = JSON.parse(localStorage.getItem(STORAGE_POI) || '[]');
    
    if (savedPOI.length > 0) {
        poiList.innerHTML = '';
        savedPOI.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.category}: ${item.name} - ${item.cost} EUR`;
            poiList.appendChild(li);
        });
    }

    // Calcul buget la apăsarea butonului
    calcBtn.addEventListener('click', () => {
        const days = parseInt(document.getElementById('num-days').value) || 1;
        const hotelCostPerNight = parseFloat(document.getElementById('accommodation').value) || 0;
        const flightCost = parseFloat(document.getElementById('flight-cost').value) || 0;

        // Suma opțiunilor/punctelor de interes
        let poiTotal = 0;
        savedPOI.forEach(item => {
            // Dacă opțiunea e pe zi (mâncare), o înmulțim cu numărul de zile
            if (item.category === 'Mâncare') {
                poiTotal += item.cost * days;
            } else {
                poiTotal += item.cost;
            }
        });

        const totalCost = (hotelCostPerNight * days) + flightCost + poiTotal;

        document.getElementById('total-amount').textContent = totalCost.toFixed(2);
    });
}
