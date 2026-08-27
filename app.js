// State & Constants
const AIRPORTS = {
    IST: { name: "Istanbul Airport", city: "Istanbul", code: "IST", lat: 41.2751, lng: 28.7519, icon: "fa-mosque" },
    SAW: { name: "Sabiha Gökçen Airport", city: "Istanbul", code: "SAW", lat: 40.8986, lng: 29.3092, icon: "fa-mosque" },
    ESB: { name: "Esenboğa Airport", city: "Ankara", code: "ESB", lat: 40.1281, lng: 32.9947, icon: "fa-monument" },
    ADB: { name: "Adnan Menderes Airport", city: "Izmir", code: "ADB", lat: 38.2892, lng: 27.1553, icon: "fa-umbrella-beach" },
    AYT: { name: "Antalya Airport", city: "Antalya", code: "AYT", lat: 36.9003, lng: 30.7929, icon: "fa-water" },
    TZX: { name: "Trabzon Airport", city: "Trabzon", code: "TZX", lat: 41.0028, lng: 39.7897, icon: "fa-mountain" },
    ADA: { name: "Adana Airport", city: "Adana", code: "ADA", lat: 36.9822, lng: 35.2804, icon: "fa-bridge" },
    DIY: { name: "Diyarbakır Airport", city: "Diyarbakır", code: "DIY", lat: 37.8939, lng: 40.2011, icon: "fa-chess-rook" },
    BJV: { name: "Milas-Bodrum Airport", city: "Bodrum", code: "BJV", lat: 37.2506, lng: 27.6643, icon: "fa-sailboat" },
    DLM: { name: "Dalaman Airport", city: "Dalaman", code: "DLM", lat: 36.7131, lng: 28.7925, icon: "fa-tree" },
    GZT: { name: "Gaziantep Airport", city: "Gaziantep", code: "GZT", lat: 36.9470, lng: 37.4470, icon: "fa-utensils" },
    VAN: { name: "Ferit Melen Airport", city: "Van", code: "VAN", lat: 38.4682, lng: 43.3323, icon: "fa-cat" },
    ASR: { name: "Erkilet Airport", city: "Kayseri", code: "ASR", lat: 38.7704, lng: 35.4957, icon: "fa-snowflake" },
    ERZ: { name: "Erzurum Airport", city: "Erzurum", code: "ERZ", lat: 39.9567, lng: 41.1702, icon: "fa-igloo" },
    KSY: { name: "Harakani Airport", city: "Kars", code: "KSY", lat: 40.5619, lng: 43.1150, icon: "fa-castle" },
    EZS: { name: "Elazığ Airport", city: "Elazığ", code: "EZS", lat: 38.6028, lng: 39.2915, icon: "fa-archway" },
    VAS: { name: "Sivas Airport", city: "Sivas", code: "VAS", lat: 39.8139, lng: 36.9036, icon: "fa-gavel" },
    MLX: { name: "Malatya Airport", city: "Malatya", code: "MLX", lat: 38.4353, lng: 38.0908, icon: "fa-apple-whole" },
    KYA: { name: "Konya Airport", city: "Konya", code: "KYA", lat: 37.9790, lng: 32.5619, icon: "fa-dharmachakra" },
    DNZ: { name: "Çardak Airport", city: "Denizli", code: "DNZ", lat: 37.7856, lng: 29.7014, icon: "fa-mountain-sun" },
    HTY: { name: "Hatay Airport", city: "Hatay", code: "HTY", lat: 36.3622, lng: 36.2822, icon: "fa-scroll" },
    GZP: { name: "Gazipaşa Airport", city: "Alanya", code: "GZP", lat: 36.2993, lng: 32.3014, icon: "fa-hotel" },
    SZF: { name: "Çarşamba Airport", city: "Samsun", code: "SZF", lat: 41.2581, lng: 36.5492, icon: "fa-person-running" }
};

const CITIES = AIRPORTS; // Maintain backward compatibility for collected stamps & other logic

const FLIGHT_TEMPLATES = [
    // Istanbul (IST) Routes
    { dep: "IST", dest: "ADB", duration: 70, airline: "TK", flightNo: "2320" },
    { dep: "IST", dest: "ESB", duration: 60, airline: "TK", flightNo: "2108" },
    { dep: "IST", dest: "AYT", duration: 75, airline: "TK", flightNo: "2412" },
    { dep: "IST", dest: "TZX", duration: 100, airline: "TK", flightNo: "2826" },
    { dep: "IST", dest: "ADA", duration: 90, airline: "TK", flightNo: "2454" },
    { dep: "IST", dest: "DIY", duration: 110, airline: "TK", flightNo: "2602" },
    { dep: "IST", dest: "BJV", duration: 75, airline: "TK", flightNo: "2504" },
    { dep: "IST", dest: "DLM", duration: 75, airline: "TK", flightNo: "2556" },
    { dep: "IST", dest: "GZT", duration: 95, airline: "TK", flightNo: "2224" },
    { dep: "IST", dest: "VAN", duration: 120, airline: "TK", flightNo: "2738" },
    { dep: "IST", dest: "ASR", duration: 80, airline: "TK", flightNo: "2010" },
    { dep: "IST", dest: "ERZ", duration: 105, airline: "TK", flightNo: "2706" },
    { dep: "IST", dest: "KSY", duration: 120, airline: "TK", flightNo: "2714" },
    { dep: "IST", dest: "EZS", duration: 100, airline: "TK", flightNo: "2642" },
    { dep: "IST", dest: "VAS", duration: 85, airline: "TK", flightNo: "2658" },
    { dep: "IST", dest: "MLX", duration: 95, airline: "TK", flightNo: "2630" },
    { dep: "IST", dest: "KYA", duration: 75, airline: "TK", flightNo: "2032" },
    { dep: "IST", dest: "DNZ", duration: 70, airline: "TK", flightNo: "2578" },
    { dep: "IST", dest: "HTY", duration: 100, airline: "TK", flightNo: "2252" },
    { dep: "IST", dest: "GZP", duration: 80, airline: "TK", flightNo: "2592" },
    { dep: "IST", dest: "SZF", duration: 90, airline: "TK", flightNo: "2054" },

    // Sabiha Gökçen (SAW) Routes (Pegasus & AnadoluJet)
    { dep: "SAW", dest: "ADB", duration: 70, airline: "PC", flightNo: "2182" },
    { dep: "SAW", dest: "ESB", duration: 60, airline: "VF", flightNo: "4110" },
    { dep: "SAW", dest: "AYT", duration: 75, airline: "PC", flightNo: "2008" },
    { dep: "SAW", dest: "TZX", duration: 100, airline: "PC", flightNo: "2810" },
    { dep: "SAW", dest: "ADA", duration: 85, airline: "PC", flightNo: "2082" },
    { dep: "SAW", dest: "DIY", duration: 110, airline: "PC", flightNo: "2380" },
    { dep: "SAW", dest: "BJV", duration: 70, airline: "PC", flightNo: "2244" },
    { dep: "SAW", dest: "DLM", duration: 70, airline: "PC", flightNo: "2282" },
    { dep: "SAW", dest: "GZT", duration: 95, airline: "PC", flightNo: "2400" },
    { dep: "SAW", dest: "VAN", duration: 120, airline: "PC", flightNo: "2510" },
    { dep: "SAW", dest: "ASR", duration: 75, airline: "PC", flightNo: "2430" },
    { dep: "SAW", dest: "ERZ", duration: 105, airline: "PC", flightNo: "2540" },
    { dep: "SAW", dest: "KSY", duration: 120, airline: "PC", flightNo: "2590" },
    { dep: "SAW", dest: "EZS", duration: 100, airline: "PC", flightNo: "2520" },
    { dep: "SAW", dest: "VAS", duration: 80, airline: "VF", flightNo: "4260" },
    { dep: "SAW", dest: "MLX", duration: 90, airline: "PC", flightNo: "2500" },
    { dep: "SAW", dest: "KYA", duration: 70, airline: "PC", flightNo: "2070" },
    { dep: "SAW", dest: "DNZ", duration: 65, airline: "PC", flightNo: "2260" },
    { dep: "SAW", dest: "HTY", duration: 95, airline: "PC", flightNo: "2050" },
    { dep: "SAW", dest: "GZP", duration: 80, airline: "PC", flightNo: "2060" },
    { dep: "SAW", dest: "SZF", duration: 85, airline: "PC", flightNo: "2020" },

    // Ankara (ESB) Routes
    { dep: "ESB", dest: "ADB", duration: 75, airline: "VF", flightNo: "4050" },
    { dep: "ESB", dest: "AYT", duration: 60, airline: "VF", flightNo: "4010" },
    { dep: "ESB", dest: "TZX", duration: 70, airline: "VF", flightNo: "4170" },
    { dep: "ESB", dest: "ADA", duration: 50, airline: "VF", flightNo: "4080" },
    { dep: "ESB", dest: "DIY", duration: 75, airline: "VF", flightNo: "4130" },
    { dep: "ESB", dest: "VAN", duration: 95, airline: "VF", flightNo: "4180" },
    { dep: "ESB", dest: "ERZ", duration: 80, airline: "VF", flightNo: "4150" },
    { dep: "ESB", dest: "GZT", duration: 65, airline: "VF", flightNo: "4140" },
    { dep: "ESB", dest: "BJV", duration: 75, airline: "VF", flightNo: "4040" },
    { dep: "ESB", dest: "DLM", duration: 70, airline: "VF", flightNo: "4060" },
    { dep: "ESB", dest: "KYA", duration: 40, airline: "VF", flightNo: "4070" },
    { dep: "ESB", dest: "ASR", duration: 45, airline: "VF", flightNo: "4090" },
    { dep: "ESB", dest: "VAS", duration: 45, airline: "VF", flightNo: "4100" },

    // Izmir (ADB) Routes
    { dep: "ADB", dest: "AYT", duration: 60, airline: "XQ", flightNo: "9084" },
    { dep: "ADB", dest: "TZX", duration: 110, airline: "XQ", flightNo: "9252" },
    { dep: "ADB", dest: "ADA", duration: 85, airline: "XQ", flightNo: "9112" },
    { dep: "ADB", dest: "DIY", duration: 100, airline: "XQ", flightNo: "9210" },
    { dep: "ADB", dest: "GZT", duration: 95, airline: "XQ", flightNo: "9230" },
    { dep: "ADB", dest: "ASR", duration: 85, airline: "XQ", flightNo: "9030" },
    { dep: "ADB", dest: "DLM", duration: 45, airline: "XQ", flightNo: "9040" },

    // Antalya (AYT) Routes
    { dep: "AYT", dest: "TZX", duration: 100, airline: "XQ", flightNo: "7610" },
    { dep: "AYT", dest: "ADA", duration: 60, airline: "XQ", flightNo: "7120" },
    { dep: "AYT", dest: "DIY", duration: 85, airline: "XQ", flightNo: "7210" },

    // Other regional connections
    { dep: "ADA", dest: "GZT", duration: 40, airline: "TK", flightNo: "2910" },
    { dep: "DIY", dest: "EZS", duration: 35, airline: "TK", flightNo: "2920" }
];

const TRANSLATIONS = {
    TR: {
        subtitle: "Odaklan, Uçuşa Geç, Hedeflerine Ulaş!",
        stat_miles: "Mil",
        demo_mode: "Hızlı Uçuş (Demo)",
        passport_title_tooltip: "Pilot Pasaportu",
        study_category_label: "Bugün ne yapacaksın?",
        study_subject_label: "Çalışma Konusu",
        duration_label: "Hedef Odaklanma Süresi",
        available_flights: "Uçuş Seçenekleri",
        prepare_boarding_pass: "Biniş Kartını Hazırla",
        boarding_pass_title: "Biniş Kartı",
        bp_purpose_label: "Çalışma Amacı",
        bp_duration_label: "Uçuş Süresi (Odak)",
        bp_class_label: "Kabin Sınıfı",
        bp_miles_label: "Kazanılacak Mil",
        bp_back_btn: "Geri Dön",
        bp_takeoff_btn: "Uçuşu Başlat (Takeoff)",
        ife_title: "ODAK AIR Uçuş Bilgi Ekranı",
        ife_goal_prefix: "Uçuş Amacı: ",
        ife_checklist_title: "Görev Listem",
        ife_telemetry_title: "Uçuş Durumu",
        ife_phase_label: "Aşama",
        ife_alt_label: "İrtifa",
        ife_speed_label: "Hız",
        ife_distance_label: "Kalan Mesafe",
        ife_temp_label: "Sıcaklık",
        ife_seat_label: "Koltuk",
        ife_abort_btn: "Acil İniş (Abort Flight)",
        ife_time_label: "Kalan Süre",
        arr_summary_title: "Uçuş Sonrası Çalışma Raporu",
        arr_purpose_label: "Çalışma Konusu",
        arr_tasks_label: "Görev Tamamlandı",
        arr_tasks_desc: "Uçuşta tamamlanan hedefleriniz",
        arr_miles_label: "Mil Kazanıldı",
        arr_miles_desc: "Hesabınıza eklendi",
        arr_stamp_label: "Yeni Pasaport Damgası!",
        arr_passport_btn: "Pasaportu Gör",
        arr_new_flight_btn: "Yeni Uçuş Planı",
        arr_success_title: "İniş Başarılı! (Touchdown)",
        arr_success_desc1: "Tebrikler, ",
        arr_success_desc2: " şehrine iniş yaptınız. Odaklanma tamamlandı!",
        pass_title: "Pilot Pasaportu",
        pass_back_btn: "Ana Sayfa",
        pass_emblem: "T.C. ODAK AIR PILOT PASAPORTU",
        pass_rank_label: "RÜTBE / RANK",
        pass_miles_label: "TOPLAM MİL / TOTAL MILES",
        pass_flights_label: "UÇUŞ SAYISI / FLIGHTS",
        pass_class_label: "LİSANS SINIFI / CLASS",
        pass_class_val: "Odak Uçuş Sınıfı (Focus Class)",
        pass_unlocked_stamps_title: "VİZE DAMGALARI / GİDİLEN ŞEHİRLER",
        // Categories
        cat_University: "Üniversite",
        cat_Work: "İş",
        cat_Reading: "Kitap",
        cat_Coding: "Kodlama"
    },
    EN: {
        subtitle: "Focus, Take Off, Achieve Your Goals!",
        stat_miles: "Miles",
        demo_mode: "Fast Flight (Demo)",
        passport_title_tooltip: "Pilot Passport",
        study_category_label: "What will you do today?",
        study_subject_label: "Study Subject",
        duration_label: "Target Focus Time",
        available_flights: "Available Flights",
        prepare_boarding_pass: "Prepare Boarding Pass",
        boarding_pass_title: "Boarding Pass",
        bp_purpose_label: "Study Purpose",
        bp_duration_label: "Flight Duration (Focus)",
        bp_class_label: "Cabin Class",
        bp_miles_label: "Miles to Earn",
        bp_back_btn: "Go Back",
        bp_takeoff_btn: "Start Flight (Takeoff)",
        ife_title: "ODAK AIR IFE System",
        ife_goal_prefix: "Flight Goal: ",
        ife_checklist_title: "Checklist",
        ife_telemetry_title: "Flight Telemetry",
        ife_phase_label: "Phase",
        ife_alt_label: "Altitude",
        ife_speed_label: "Speed",
        ife_distance_label: "Distance",
        ife_temp_label: "Temp",
        ife_seat_label: "Seat",
        ife_abort_btn: "Emergency Landing",
        ife_time_label: "Time Remaining",
        arr_summary_title: "Post-Flight Study Summary",
        arr_purpose_label: "Study Topic",
        arr_tasks_label: "Tasks Completed",
        arr_tasks_desc: "Focus tasks completed on this flight",
        arr_miles_label: "Miles Earned",
        arr_miles_desc: "Added to your pilot account",
        arr_stamp_label: "New Passport Stamp!",
        arr_passport_btn: "View Passport",
        arr_new_flight_btn: "New Flight Plan",
        arr_success_title: "Touchdown Successful!",
        arr_success_desc1: "Congratulations, you have landed in ",
        arr_success_desc2: ". Focus session completed!",
        pass_title: "Pilot Passport",
        pass_back_btn: "Home",
        pass_emblem: "REPUBLIC OF ODAK AIR PILOT PASSPORT",
        pass_rank_label: "RANK",
        pass_miles_label: "TOTAL MILES",
        pass_flights_label: "FLIGHTS",
        pass_class_label: "CLASS",
        pass_class_val: "Focus Class License",
        pass_unlocked_stamps_title: "VISA STAMPS / UNLOCKED CITIES",
        // Categories
        cat_University: "University",
        cat_Work: "Work",
        cat_Reading: "Reading",
        cat_Coding: "Coding"
    }
};

let flightsDb = [];

let currentState = {
    language: 'TR',
    selectedFlight: null,
    targetDuration: 45,
    departure: null,
    destination: null,
    timeMinutes: 0,
    milesReward: 0,
    timerInterval: null,
    timeRemaining: 0,
    airplaneMarker: null,
    routeLine: null,
    map: null,
    markers: [],
    ambientPlanes: [],
    // ODAK AIR properties
    studyCategory: 'YKS',
    studySubject: 'TYT Matematik',
    tasks: []
};

// DOM Elements
const screens = {
    selection: document.getElementById('screen-selection'),
    boardingPass: document.getElementById('screen-boarding-pass'),
    focus: document.getElementById('screen-focus'),
    arrival: document.getElementById('screen-arrival'),
    passport: document.getElementById('screen-passport')
};

// Selection Screen Elements
const btnGeneratePass = document.getElementById('btn-generate-boarding-pass');
const previewMiles = document.getElementById('preview-miles');

// Setup
function initApp() {
    generateFlightsDatabase();
    updatePreviewMiles();
    updateLanguage();
    initMainMap();
    setupEventListeners();
    filterFlights(45); // default duration
}

function getStoredData() {
    let miles = 0;
    let stamps = [];
    
    try {
        const storedMiles = localStorage.getItem('focusMiles');
        if (storedMiles) {
            miles = parseInt(storedMiles, 10) || 0;
        }
    } catch (e) {
        console.error("Failed to parse focusMiles:", e);
    }
    
    try {
        const storedStamps = localStorage.getItem('focusStamps');
        if (storedStamps) {
            const parsed = JSON.parse(storedStamps);
            if (Array.isArray(parsed)) {
                stamps = parsed;
            }
        }
    } catch (e) {
        console.error("Failed to parse focusStamps, resetting storage:", e);
        try {
            localStorage.removeItem('focusStamps');
        } catch (err) {}
    }
    
    return { miles, stamps };
}

function saveRewards(newMiles, newStampCode) {
    let data = getStoredData();
    data.miles += newMiles;
    if (!data.stamps.includes(newStampCode)) {
        data.stamps.push(newStampCode);
    }
    try {
        localStorage.setItem('focusMiles', data.miles);
        localStorage.setItem('focusStamps', JSON.stringify(data.stamps));
    } catch (e) {
        console.error("Failed to save rewards to localStorage:", e);
    }
}

function updatePreviewMiles() {
    previewMiles.textContent = getStoredData().miles.toLocaleString();
}

function updateLanguage() {
    const lang = currentState.language;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });

    // Update input placeholders and titles dynamically
    const subjectInput = document.getElementById('study-subject');
    const taskInput = document.getElementById('checklist-task-input');
    const passportNavBtn = document.getElementById('btn-passport-nav');
    const langBtn = document.getElementById('btn-lang-toggle');

    if (lang === 'TR') {
        subjectInput.placeholder = "Örn: TYT Matematik";
        taskInput.placeholder = "Görev ekle (örn: 20 soru çöz)";
        passportNavBtn.title = "Pilot Pasaportu";
        langBtn.textContent = "EN";
    } else {
        subjectInput.placeholder = "e.g., Chemistry";
        taskInput.placeholder = "Add task (e.g., solve 20 questions)";
        passportNavBtn.title = "Pilot Passport";
        langBtn.textContent = "TR";
    }
}

function getLocalizedCategory(category) {
    const isTr = currentState.language === 'TR';
    if (category === 'Üniversite') return isTr ? 'Üniversite' : 'University';
    if (category === 'İş') return isTr ? 'İş' : 'Work';
    if (category === 'Kitap') return isTr ? 'Kitap' : 'Reading';
    if (category === 'Kodlama') return isTr ? 'Kodlama' : 'Coding';
    return category;
}

// Distance Calculation (Haversine formula)
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Database generation and utility functions
function generateFlightsDatabase() {
    flightsDb = [];
    FLIGHT_TEMPLATES.forEach(tmpl => {
        const depAir = AIRPORTS[tmpl.dep];
        const destAir = AIRPORTS[tmpl.dest];
        if (depAir && destAir) {
            const distance = getDistanceFromLatLonInKm(depAir.lat, depAir.lng, destAir.lat, destAir.lng);
            const miles = Math.round(distance);
            
            // Forward flight
            flightsDb.push({
                id: `OA-${tmpl.flightNo}`,
                airlineCode: "OA",
                airlineName: "ODAK AIR",
                flightNo: tmpl.flightNo,
                dep: tmpl.dep,
                dest: tmpl.dest,
                duration: tmpl.duration,
                distance: distance,
                miles: miles
            });
            
            // Reverse flight
            const revNo = (parseInt(tmpl.flightNo) + 1).toString();
            flightsDb.push({
                id: `OA-${revNo}`,
                airlineCode: "OA",
                airlineName: "ODAK AIR",
                flightNo: revNo,
                dep: tmpl.dest,
                dest: tmpl.dep,
                duration: tmpl.duration,
                distance: distance,
                miles: miles
            });
        }
    });
}

function getAirlineName(code) {
    return "ODAK AIR";
}

// Selection Map Preview Setup
function initMainMap() {
    if (!currentState.map) {
        currentState.map = L.map('main-map', {
            zoomControl: false,
            attributionControl: true
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(currentState.map);
        
        // Initial center on Turkey
        currentState.map.setView([39.0, 35.2], 6.2);
    }
    drawAirportsOnMap();
}

function drawAirportsOnMap() {
    // Clear any existing markers
    currentState.markers.forEach(m => currentState.map.removeLayer(m));
    currentState.markers = [];
    
    // Draw all airports as small dots
    Object.keys(AIRPORTS).forEach(code => {
        const ap = AIRPORTS[code];
        const marker = L.circleMarker([ap.lat, ap.lng], {
            radius: 4,
            fillColor: '#818CF8',
            color: '#4F46E5',
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        }).addTo(currentState.map);
        
        marker.bindTooltip(`${ap.city} (${code})`, { direction: 'top', className: 'map-tooltip' });
        currentState.markers.push(marker);
    });
}

function drawSelectedRoute(flight) {
    // Clear active route line if exists
    if (currentState.routeLine) {
        currentState.map.removeLayer(currentState.routeLine);
        currentState.routeLine = null;
    }
    // Clear active airplane marker if exists
    if (currentState.airplaneMarker) {
        currentState.map.removeLayer(currentState.airplaneMarker);
        currentState.airplaneMarker = null;
    }
    
    // Reset airport styles to normal
    drawAirportsOnMap();
    
    const depAir = AIRPORTS[flight.dep];
    const destAir = AIRPORTS[flight.dest];
    
    if (depAir && destAir) {
        // Highlight active airports
        currentState.markers.forEach(marker => {
            const latlng = marker.getLatLng();
            if ((latlng.lat === depAir.lat && latlng.lng === depAir.lng) ||
                (latlng.lat === destAir.lat && latlng.lng === destAir.lng)) {
                marker.setStyle({
                    radius: 6,
                    fillColor: '#10B981',
                    color: '#F59E0B',
                    weight: 2,
                    fillOpacity: 0.9
                });
            }
        });
        
        // Draw route line
        const route = [
            [depAir.lat, depAir.lng],
            [destAir.lat, destAir.lng]
        ];
        currentState.routeLine = L.polyline(route, {
            color: '#10B981',
            weight: 3,
            dashArray: '8, 8',
            opacity: 0.8
        }).addTo(currentState.map);
        
        // Smoothly zoom in on the selection
        currentState.map.fitBounds(currentState.routeLine.getBounds(), {
            padding: [100, 100],
            animate: true,
            duration: 1.0
        });
    }
}

// Filter and Render Sidebar List
function filterFlights(duration) {
    currentState.targetDuration = duration;
    
    // Filter flights between [duration - 10, duration + 10]
    const matched = flightsDb.filter(f => Math.abs(f.duration - duration) <= 10);
    
    // Sort flights by absolute difference to target duration
    matched.sort((a, b) => Math.abs(a.duration - duration) - Math.abs(b.duration - duration));
    
    renderFlightsList(matched);
}

function renderFlightsList(flights) {
    const listContainer = document.getElementById('flight-list-vertical');
    const countEl = document.getElementById('carousel-count');
    
    countEl.textContent = flights.length;
    listContainer.innerHTML = '';
    
    const isTr = currentState.language === 'TR';
    
    if (flights.length === 0) {
        const emptyTitle = isTr ? "Bu süre aralığında uçuş bulunamadı." : "No flights found in this range.";
        const emptyDesc = isTr ? "Farklı bir çalışma süresi seçmeyi deneyin." : "Try choosing a different duration.";
        listContainer.innerHTML = `
            <div class="empty-flights">
                <i class="fa-solid fa-plane-slash"></i>
                <p>${emptyTitle}</p>
                <span>${emptyDesc}</span>
            </div>
        `;
        btnGeneratePass.disabled = true;
        
        if (currentState.routeLine) {
            currentState.map.removeLayer(currentState.routeLine);
            currentState.routeLine = null;
        }
        drawAirportsOnMap();
        currentState.map.setView([39.0, 35.2], 6.2);
        return;
    }
    
    flights.forEach((flight) => {
        const card = document.createElement('div');
        card.className = 'flight-card';
        if (currentState.selectedFlight && currentState.selectedFlight.id === flight.id) {
            card.classList.add('selected');
        }
        
        const depAir = AIRPORTS[flight.dep];
        const destAir = AIRPORTS[flight.dest];
        
        card.innerHTML = `
            <div class="card-header">
                <span class="airline-badge">ODAK AIR</span>
                <span class="flight-no-badge">OA-${flight.flightNo}</span>
            </div>
            <div class="card-body">
                <div class="airport-box">
                    <span class="code">${flight.dep}</span>
                    <span class="city">${depAir ? depAir.city : flight.dep}</span>
                </div>
                <div class="route-arrow">
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div class="airport-box" style="text-align: right;">
                    <span class="code">${flight.dest}</span>
                    <span class="city">${destAir ? destAir.city : flight.dest}</span>
                </div>
            </div>
            <div class="card-footer">
                <span class="duration-tag"><i class="fa-regular fa-clock"></i> ${flight.duration} ${isTr ? 'dk' : 'm'}</span>
                <span class="miles-tag"><i class="fa-solid fa-award"></i> +${flight.miles}</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            selectFlight(flight, card);
        });
        
        listContainer.appendChild(card);
    });
    
    // Auto-select first flight if none or invalid is selected
    if (flights.length > 0) {
        const isStillValid = currentState.selectedFlight && flights.some(f => f.id === currentState.selectedFlight.id);
        if (!isStillValid) {
            const firstCard = listContainer.querySelector('.flight-card');
            selectFlight(flights[0], firstCard);
        } else {
            const selectedIdx = flights.findIndex(f => f.id === currentState.selectedFlight.id);
            if (selectedIdx !== -1) {
                const cardEl = listContainer.children[selectedIdx];
                if (cardEl) cardEl.classList.add('selected');
            }
        }
    }
}

function selectFlight(flight, cardElement) {
    currentState.selectedFlight = flight;
    currentState.departure = flight.dep;
    currentState.destination = flight.dest;
    currentState.timeMinutes = flight.duration;
    currentState.milesReward = flight.miles;
    
    const cards = document.querySelectorAll('.flight-card');
    cards.forEach(c => c.classList.remove('selected'));
    if (cardElement) {
        cardElement.classList.add('selected');
    }
    
    drawSelectedRoute(flight);
    btnGeneratePass.disabled = false;
}

// Screen Transitions
function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
    
    // Invalidate Leaflet map to recalculate sizes after overlay changes
    setTimeout(() => {
        if (currentState.map) {
            currentState.map.invalidateSize();
            
            if (screenName === 'selection') {
                if (currentState.selectedFlight) {
                    drawSelectedRoute(currentState.selectedFlight);
                } else {
                    currentState.map.setView([39.0, 35.2], 6.2);
                }
            } else if (screenName === 'focus') {
                if (currentState.routeLine) {
                    currentState.map.fitBounds(currentState.routeLine.getBounds(), { padding: [100, 100] });
                }
            }
        }
    }, 200);
}

// Event Listeners
function setupEventListeners() {
    // Duration Slider and Preset Buttons
    const slider = document.getElementById('duration-slider');
    const label = document.getElementById('selected-duration-label');
    const presetBtns = document.querySelectorAll('.preset-btn');
    
    slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        label.textContent = `${val} dk`;
        filterFlights(val);
        
        presetBtns.forEach(btn => {
            if (parseInt(btn.getAttribute('data-val')) === val) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
    
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = parseInt(btn.getAttribute('data-val'));
            slider.value = val;
            label.textContent = `${val} dk`;
            
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            filterFlights(val);
        });
    });
    
    // Study Config Selectors
    const studyCategorySelect = document.getElementById('study-category');
    const studySubjectInput = document.getElementById('study-subject');
    
    studyCategorySelect.addEventListener('change', (e) => {
        currentState.studyCategory = e.target.value;
    });
    studySubjectInput.addEventListener('input', (e) => {
        currentState.studySubject = e.target.value;
    });

    // In-flight checklist controls
    const taskInput = document.getElementById('checklist-task-input');
    const addTaskBtn = document.getElementById('btn-add-task');
    
    addTaskBtn.addEventListener('click', () => addTaskFromInput());
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskFromInput();
        }
    });

    btnGeneratePass.addEventListener('click', () => {
        populateBoardingPass();
        showScreen('boardingPass');
    });

    document.querySelectorAll('.btn-go-selection').forEach(btn => {
        btn.addEventListener('click', () => {
            if(currentState.timerInterval) clearInterval(currentState.timerInterval);
            updatePreviewMiles();
            showScreen('selection');
        });
    });

    document.getElementById('btn-takeoff').addEventListener('click', () => {
        startFlight();
    });

    document.getElementById('btn-emergency-landing').addEventListener('click', () => {
        if(confirm(TRANSLATIONS[currentState.language].confirm_abort)) {
            clearInterval(currentState.timerInterval);
            showScreen('selection');
        }
    });

    document.getElementById('btn-passport-nav').addEventListener('click', () => showPassport());
    document.getElementById('btn-goto-passport').addEventListener('click', () => showPassport());
    
    document.getElementById('btn-lang-toggle').addEventListener('click', () => {
        currentState.language = (currentState.language === 'TR') ? 'EN' : 'TR';
        updateLanguage();
        // Update flight lists and slider values
        const val = parseInt(slider.value);
        label.textContent = `${val} ${currentState.language === 'TR' ? 'dk' : 'm'}`;
        filterFlights(val);
        if (screens.passport.classList.contains('active')) {
            showPassport();
        }
    });
}

function populateBoardingPass() {
    const flight = currentState.selectedFlight;
    const dCity = AIRPORTS[flight.dep];
    const aCity = AIRPORTS[flight.dest];
    
    const isTr = currentState.language === 'TR';
    document.querySelector('.flight-no').textContent = `${isTr ? 'Uçuş' : 'Flight'}: OA-${flight.flightNo}`;
    document.getElementById('bp-dep-code').textContent = flight.dep;
    document.getElementById('bp-dep-name').textContent = dCity.city;
    document.getElementById('bp-dest-code').textContent = flight.dest;
    document.getElementById('bp-dest-name').textContent = aCity.city;
    document.getElementById('bp-time').textContent = `${flight.duration} ${isTr ? 'dk' : 'm'}`;
    document.getElementById('bp-miles').textContent = `+${flight.miles}`;
    
    // Translate category and subject names
    const catVal = getLocalizedCategory(currentState.studyCategory);
    const defaultSubject = isTr ? 'Genel Çalışma' : 'General Study';
    document.getElementById('bp-purpose').textContent = `${catVal} - ${currentState.studySubject || defaultSubject}`;
}

function startFlight() {
    showScreen('focus');
    
    document.getElementById('focus-dep').textContent = currentState.departure;
    document.getElementById('focus-dest').textContent = currentState.destination;
    
    // Set In-Flight Study parameters
    const isTr = currentState.language === 'TR';
    const catVal = getLocalizedCategory(currentState.studyCategory);
    const defaultSubject = isTr ? 'Genel Çalışma' : 'General Study';
    document.getElementById('ife-purpose-display').textContent = `${catVal} - ${currentState.studySubject || defaultSubject}`;
    currentState.tasks = [];
    document.getElementById('checklist-task-input').value = '';
    renderTaskList();
    
    const totalSeconds = currentState.timeMinutes * 60;
    currentState.timeRemaining = totalSeconds;
    
    updateTimerDisplay();
    initMap();
    updateTelemetry(0);
    
    document.getElementById('flight-progress').style.width = '0%';
    
    const isDemoMode = document.getElementById('demo-mode-checkbox').checked;
    const timeStep = isDemoMode ? 60 : 1;
    
    currentState.timerInterval = setInterval(() => {
        currentState.timeRemaining -= timeStep;
        if (currentState.timeRemaining < 0) currentState.timeRemaining = 0;
        
        updateTimerDisplay();
        
        const progressPercent = 1 - (currentState.timeRemaining / totalSeconds);
        document.getElementById('flight-progress').style.width = `${progressPercent * 100}%`;
        
        updateAirplanePosition(progressPercent);
        updateTelemetry(progressPercent);
        
        if (currentState.timeRemaining <= 0) {
            clearInterval(currentState.timerInterval);
            handleArrival();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(currentState.timeRemaining / 60).toString().padStart(2, '0');
    const s = (currentState.timeRemaining % 60).toString().padStart(2, '0');
    document.getElementById('focus-timer').textContent = `${m}:${s}`;
}

// In-Flight Task Checklist Actions
function addTaskFromInput() {
    const input = document.getElementById('checklist-task-input');
    const text = input.value.trim();
    if (text) {
        currentState.tasks.push({ text: text, completed: false });
        input.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    const list = document.getElementById('ife-task-list');
    if (!list) return;
    list.innerHTML = '';
    
    currentState.tasks.forEach((task, idx) => {
        const item = document.createElement('li');
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        const textSpan = document.createElement('span');
        textSpan.textContent = task.text;
        item.appendChild(textSpan);
        
        const actions = document.createElement('div');
        actions.className = 'task-actions';
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'task-btn btn-check';
        checkBtn.innerHTML = `<i class="fa-solid ${task.completed ? 'fa-square-check' : 'fa-square'}"></i>`;
        checkBtn.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTaskList();
        });
        actions.appendChild(checkBtn);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'task-btn btn-delete';
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        deleteBtn.addEventListener('click', () => {
            currentState.tasks.splice(idx, 1);
            renderTaskList();
        });
        actions.appendChild(deleteBtn);
        
        item.appendChild(actions);
        list.appendChild(item);
    });
}

// Telemetry Real-time Calculation
function updateTelemetry(progressPercent) {
    const totalDistance = currentState.selectedFlight ? currentState.selectedFlight.distance : 350;
    
    let altitude = 0;
    let speed = 0;
    let temp = 15;
    const isTr = currentState.language === 'TR';
    let phase = isTr ? "KALKIŞTA" : "CLIMBING";
    let phaseClass = "ascending";
    
    if (progressPercent <= 0.1) {
        // Ascent (0% - 10%)
        const factor = progressPercent / 0.1;
        altitude = Math.round(factor * 35000);
        speed = Math.round(factor * 850);
        temp = Math.round(15 - factor * 71); // drops to -56
        phase = isTr ? "KALKIŞTA / CLIMBING" : "CLIMBING";
        phaseClass = "ascending";
    } else if (progressPercent <= 0.9) {
        // Cruise (10% - 90%)
        altitude = Math.round(35000 + (Math.random() - 0.5) * 100);
        speed = Math.round(850 + (Math.random() - 0.5) * 10);
        temp = -56;
        phase = isTr ? "SEYİR İRTİFASINDA / CRUISING" : "CRUISING";
        phaseClass = "cruising";
    } else {
        // Descent (90% - 100%)
        const factor = (1.0 - progressPercent) / 0.1;
        altitude = Math.round(factor * 35000);
        speed = Math.round(250 + factor * 600); // landing speed 250
        temp = Math.round(15 - factor * 71);
        phase = isTr ? "ALÇALIŞTA / LANDING" : "LANDING";
        phaseClass = "descending";
    }
    
    const distanceRemaining = Math.max(0, Math.round(totalDistance * (1 - progressPercent)));
    
    const altitudeEl = document.getElementById('tele-altitude');
    const speedEl = document.getElementById('tele-speed');
    const distanceEl = document.getElementById('tele-distance');
    const tempEl = document.getElementById('tele-temp');
    const phaseEl = document.getElementById('tele-phase');
    
    if (altitudeEl) altitudeEl.textContent = `${altitude.toLocaleString()} ft (${Math.round(altitude * 0.3048).toLocaleString()} m)`;
    if (speedEl) speedEl.textContent = `${speed} km/h`;
    if (distanceEl) distanceEl.textContent = `${distanceRemaining} km`;
    if (tempEl) tempEl.textContent = `${temp} °C`;
    if (phaseEl) {
        phaseEl.textContent = phase;
        phaseEl.className = `val-phase ${phaseClass}`;
    }
}

// Leaflet Map Logic for Active Flight
function initMap() {
    const map = currentState.map;
    const dCity = AIRPORTS[currentState.departure];
    const aCity = AIRPORTS[currentState.destination];
    
    // Clear previous active route line and airplane marker
    if (currentState.routeLine) {
        map.removeLayer(currentState.routeLine);
        currentState.routeLine = null;
    }
    if (currentState.airplaneMarker) {
        map.removeLayer(currentState.airplaneMarker);
        currentState.airplaneMarker = null;
    }
    
    // Reset airport styles to normal
    drawAirportsOnMap();
    
    // Draw active flight route line
    const route = [
        [dCity.lat, dCity.lng],
        [aCity.lat, aCity.lng]
    ];
    currentState.routeLine = L.polyline(route, {
        color: '#10B981',
        weight: 4,
        dashArray: '10, 10',
        opacity: 0.8
    }).addTo(map);
    
    // Setup airplane icon with custom airliner SVG path and pulsing radar ripples
    const angle = calculateAngle(dCity.lat, dCity.lng, aCity.lat, aCity.lng);
    const planeIcon = L.divIcon({
        html: `
            <div style="position: relative; width: 36px; height: 36px;">
                <div class="radar-pulse"></div>
                <div style="transform: rotate(${angle}deg); display: flex; justify-content: center; align-items: center; width: 36px; height: 36px;">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#10B981" style="filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.8));">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l8 2.5z"/>
                    </svg>
                </div>
            </div>
        `,
        className: 'active-airplane-marker',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
    
    currentState.airplaneMarker = L.marker([dCity.lat, dCity.lng], { icon: planeIcon }).addTo(map);
    
    // Fit bounds tightly
    map.fitBounds(currentState.routeLine.getBounds(), { padding: [100, 100] });
}

function calculateAngle(lat1, lon1, lat2, lon2) {
    const dy = lat2 - lat1;
    const dx = Math.cos(Math.PI/180*lat1)*(lon2 - lon1);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return -angle + 90; // Adjust for icon orientation (pointing up by default)
}

function updateAirplanePosition(progress) {
    if (!currentState.airplaneMarker) return;
    
    const dCity = AIRPORTS[currentState.departure];
    const aCity = AIRPORTS[currentState.destination];
    
    const currentLat = dCity.lat + (aCity.lat - dCity.lat) * progress;
    const currentLng = dCity.lng + (aCity.lng - dCity.lng) * progress;
    
    currentState.airplaneMarker.setLatLng([currentLat, currentLng]);
}

// Arrival & Rewards
function handleArrival() {
    showScreen('arrival');
    const aCity = AIRPORTS[currentState.destination];
    
    document.getElementById('arr-dest-name').textContent = aCity.name;
    document.getElementById('arr-earned-miles').textContent = currentState.milesReward;
    document.getElementById('arr-earned-stamp').textContent = `${aCity.name} Kilidi Açıldı`;
    
    // Study summary reports
    const isTr = currentState.language === 'TR';
    const catVal = getLocalizedCategory(currentState.studyCategory);
    const defaultSubject = isTr ? 'Genel Çalışma' : 'General Study';
    document.getElementById('arr-purpose-display').textContent = `${catVal} - ${currentState.studySubject || defaultSubject}`;
    const completedTasks = currentState.tasks.filter(t => t.completed).length;
    const totalTasks = currentState.tasks.length;
    document.getElementById('arr-tasks-completed').textContent = `${completedTasks}/${totalTasks}`;

    const stored = getStoredData();
    const isNewStamp = !stored.stamps.includes(currentState.destination);
    
    const stampEl = document.querySelector('.new-stamp');
    if (isNewStamp) {
        stampEl.classList.remove('hidden');
    } else {
        stampEl.classList.add('hidden');
    }
    
    saveRewards(currentState.milesReward, currentState.destination);
}

function showPassport() {
    showScreen('passport');
    const data = getStoredData();
    
    // Calculate Rank
    const isTr = currentState.language === 'TR';
    let rank = isTr ? "Öğrenci Pilot" : "Student Pilot";
    let rankBadge = "fa-user-graduate";
    if (data.miles >= 1000 && data.miles < 3000) {
        rank = isTr ? "İkinci Pilot" : "First Officer";
        rankBadge = "fa-user-astronaut";
    } else if (data.miles >= 3000 && data.miles < 6000) {
        rank = isTr ? "Kaptan Pilot" : "Captain";
        rankBadge = "fa-user-tie";
    } else if (data.miles >= 6000) {
        rank = isTr ? "Filo Komutanı" : "Fleet Commander";
        rankBadge = "fa-crown";
    }
    
    // Render Stats
    document.getElementById('passport-total-miles').textContent = data.miles.toLocaleString();
    document.getElementById('passport-rank').textContent = rank;
    document.getElementById('passport-flights-count').textContent = data.stamps.length;
    document.getElementById('passport-rank-icon').className = `fa-solid ${rankBadge}`;

    // Stamp configs (custom ink colors & shapes for cities)
    const STAMP_STYLES = {
        IST: { color: '#ef4444', shape: 'stamp-circle', icon: 'fa-mosque' },
        ESB: { color: '#3b82f6', shape: 'stamp-hex', icon: 'fa-landmark' },
        ADB: { color: '#10b981', shape: 'stamp-oval', icon: 'fa-anchor' },
        AYT: { color: '#f59e0b', shape: 'stamp-circle', icon: 'fa-umbrella-beach' },
        TZX: { color: '#06b6d4', shape: 'stamp-shield', icon: 'fa-fish' },
        ADA: { color: '#ec4899', shape: 'stamp-square', icon: 'fa-pepper-hot' },
        DIY: { color: '#8b5cf6', shape: 'stamp-oct', icon: 'fa-building-columns' },
        BJV: { color: '#14b8a6', shape: 'stamp-oval', icon: 'fa-ship' },
        DLM: { color: '#6366f1', shape: 'stamp-circle', icon: 'fa-water' },
        GZT: { color: '#a855f7', shape: 'stamp-hex', icon: 'fa-utensils' },
        VAN: { color: '#eab308', shape: 'stamp-oval', icon: 'fa-cat' },
        ASR: { color: '#f43f5e', shape: 'stamp-shield', icon: 'fa-mountain' },
        ERZ: { color: '#3b82f6', shape: 'stamp-hex', icon: 'fa-snowflake' },
        KSY: { color: '#10b981', shape: 'stamp-circle', icon: 'fa-tree' },
        EZS: { color: '#f59e0b', shape: 'stamp-square', icon: 'fa-cubes' },
        VAS: { color: '#06b6d4', shape: 'stamp-oct', icon: 'fa-monument' },
        MLX: { color: '#ec4899', shape: 'stamp-oval', icon: 'fa-seedling' },
        KYA: { color: '#8b5cf6', shape: 'stamp-circle', icon: 'fa-compass' },
        DNZ: { color: '#14b8a6', shape: 'stamp-shield', icon: 'fa-dove' },
        HTY: { color: '#6366f1', shape: 'stamp-hex', icon: 'fa-wheat-awn' },
        GZP: { color: '#a855f7', shape: 'stamp-oval', icon: 'fa-lemon' },
        SZF: { color: '#eab308', shape: 'stamp-square', icon: 'fa-industry' }
    };
    
    const grid = document.getElementById('stamps-grid');
    grid.innerHTML = '';
    
    Object.keys(AIRPORTS).forEach(code => {
        const city = AIRPORTS[code];
        const unlocked = data.stamps.includes(code);
        const style = STAMP_STYLES[code] || { color: '#94a3b8', shape: 'stamp-circle', icon: 'fa-stamp' };
        
        // Pseudo-random rotation for unlocked stamps
        const rotation = unlocked ? (Math.sin(code.charCodeAt(0)) * 12).toFixed(1) : 0;
        
        const card = document.createElement('div');
        card.className = `stamp-card ${unlocked ? 'unlocked' : 'locked'}`;
        if (unlocked) {
            card.style.setProperty('--stamp-ink', style.color);
            card.style.transform = `rotate(${rotation}deg)`;
        }
        
        card.innerHTML = unlocked ? `
            <div class="stamp-ink-wrap ${style.shape}">
                <div class="stamp-ink-border">
                    <div class="stamp-ink-content">
                        <span class="stamp-code">${code}</span>
                        <i class="fa-solid ${style.icon} stamp-ink-icon"></i>
                        <span class="stamp-date">${isTr ? 'ONAYLANDI' : 'APPROVED'}</span>
                    </div>
                </div>
            </div>
            <div class="stamp-name">${city.name}</div>
        ` : `
            <div class="stamp-locked-graphic">
                <i class="fa-solid fa-lock stamp-lock-icon"></i>
                <span class="stamp-code-locked">${code}</span>
            </div>
            <div class="stamp-name">${city.name}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Start
initApp();
