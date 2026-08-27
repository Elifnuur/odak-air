# ✈️ ODAK AIR - Simulated Flight-Based Gamified Focus Platform

**ODAK AIR** is a responsive, gamified focus (Pomodoro/Focus) web application designed for students and professionals. By mapping study durations to **simulated domestic flight routes** within Turkey under a single brand identity, it converts traditional study intervals into immersive flights. 

The application is built entirely as a client-side web application with zero backend dependencies, utilizing a dark glassmorphic design, dynamic leaflet mapping, real-time simulated telemetry, and a physical booklet-style passport aesthetic log.

---

## 📸 Interface Preview / Ekran Görüntüsü

![ODAK AIR Interface](screenshot.png)
*(To display your interface on GitHub, capture a browser screenshot and save it as `screenshot.png` in the root folder.)*

---

## 🌟 English Description & Developer Documentation

### 1. Concept
Instead of selecting a generic countdown timer, the user sets their target focus duration (30 - 120 minutes). The system dynamically filters and displays **simulated flight routes** whose durations match the selected target (e.g., IST ➔ ESB for a 60-minute session). Once the user fills out their boarding pass and "takes off," the dashboard transitions into a flight deck cockpit, displaying study progress, checklist objectives, and live flight telemetry until touchdown.

### 2. Technical Architecture & State Design
The project adheres to a clean monolithic design separating layout, presentation, and behavior:
* **UI Presentation**: Fluid CSS layouts using custom CSS variables, flexbox, grid systems, and a modern dark glassmorphism overlay.
* **State Management**: A centralized, mutable state engine (`currentState`) in Vanilla JS tracking flight telemetries, checklists, active markers, language states, and timing sequences.
* **Storage Persistence**: Uses HTML5 LocalStorage for logs. Encapsulated in try/catch defensive wrappers to ensure stability even if localStorage is corrupted.
* **Localization Engine (i18n)**: Single-page dynamic language toggle engine utilizing `data-i18n` attributes and a DOM walker. Includes localized study categories (`getLocalizedCategory`).

### 3. Key Features & Implementation Details
* **🗺️ Real-Time Leaflet.js Tracking**: Plots simulated route vectors dynamically. Draws active flights with a custom pulsing SVG aircraft marker, mathematically calculated to face the correct destination heading angle. Fully compliant with OpenStreetMap tile attribution requirements.
* **🧭 Cockpit Telemetry Simulation**: Simulates linear flight telemetry (Altitude, Ground Speed, Outside Temperature, Distance Remaining) mapped across three simulated flight phases: Climb, Cruise, and Descent.
* **🛂 Passport-Themed Logbook UI**: Redesigned into a grid-based layout mimicking a physical dual-page passport. Unlocked cities are stamped onto the right page with city-specific ink stamps, icons, pseudo-random rotations, and custom colors.
* **📝 In-Flight Checklist**: Allows adding and tracking study objectives in real-time.

### 4. Tech Stack
* **Markup & Semantics**: HTML5 (structured semantic tags)
* **Styling & Layout**: CSS3 (custom variables, keyframes, transitions, responsive grid/flexbox)
* **Logic & Leaflet Map**: Vanilla ES6+ JavaScript, Leaflet.js, OpenStreetMap API
* **Icons & Typography**: Font Awesome 6.0, Google Fonts (Plus Jakarta Sans, JetBrains Mono)
* **Testing Utilities**: Node.js & Python scripts for DOM checking and syntax verification

### 5. How to Run Locally
Since the application has no server dependencies, running it is simple:
1. Clone or download this repository.
2. Open `index.html` directly in any web browser.
3. Switch languages dynamically via the **TR/EN** button in the header.

---

## 🇹🇷 Türkçe Açıklama ve Geliştirici Dokümantasyonu

### 1. Konsept
Kullanıcı sıradan bir geri sayım sayacı kurmak yerine, odaklanmak istediği süreyi seçer (30 - 120 dakika). Sistem, bu süreye uygun **simüle edilmiş Türkiye içi uçuş rotalarını** listeler (örn: 60 dakikalık çalışma için İstanbul ➔ Ankara uçuşu). Kullanıcı biniş kartını alıp "kalkış" yaptığında ekran uçuş kokpitine dönüşür; çalışma süresi boyunca uçuş telemetrilerini, canlı harita takibini ve çalışma hedeflerini simüle eder.

### 2. Teknik Mimari ve Durum Yönetimi
Proje, HTML (Yapı), CSS (Görünüm) ve JS (Davranış) katmanlarını kesin çizgilerle birbirinden ayıracak şekilde yapılandırılmıştır:
* **Arayüz Tasarımı**: CSS özel değişkenleri (variables), CSS Keyframes animasyonları ve cam efekti (glassmorphism) kullanan responsive tasarım.
* **Durum Yönetimi (State)**: Vanilla JS üzerinde tekil ve merkezi bir nesne (`currentState`) ile yönetilen telemetri, zamanlayıcı, dil ve harita durumları.
* **Veri Güvenliği**: Tarayıcı yerel depolama (`localStorage`) okuma/yazma süreçleri try/catch blokları ile sarmalanarak çerez bozulmalarına karşı korumalı hale getirilmiştir.
* **Dil Motoru (i18n)**: Sayfa yenilenmeden tüm kelime, input placeholder'ları ve kategorileri dinamik olarak çeviren yerelleştirme motoru.

### 3. Öne Çıkan Özellikler
* **🗺️ Leaflet.js Harita Entegrasyonu**: Uçuş rotasını Leaflet.js ile harita üzerinde vektörel olarak çizer. Simüle uçak ikonu, kalkış ve varış koordinatları arasındaki açıya göre dinamik olarak yönlendirilir (rotaya bakar). OpenStreetMap telif hakları ile tam uyumludur.
* **🧭 Kokpit Telemetri Simülasyonu**: Çalışma süresine bağlı olarak uçağın tırmanış, düz uçuş ve alçalış aşamalarındaki irtifa (ft/m), hız (km/h), sıcaklık (°C) ve kalan mesafesini doğrusal aşama modelleriyle simüle eder.
* **🛂 Pilot Pasaportu ve Vize Damgaları**: Kitapçık şeklinde tasarlanmış, iki sayfalık biyometrik pasaport estetiğine sahip kayıt günlüğü (logbook) ekranı. Kazanılan millere göre rütbe sistemi ve gidilen şehirlere ait özel retro vize damgaları (her şehre özel ikon, ink rengi ve rastgele mühür dönüş açısı).
* **📝 Uçuş Checklist**: Çalışma esnasında yapılacak görevlerin eklenebildiği görev takip listesi.

### 4. Kullanılan Teknolojiler
* **HTML5 & CSS3**: Semantik yapılar ve modern gölgelendirmeler/geçiş efektleri.
* **Leaflet.js & OpenStreetMap**: Harita entegrasyonu (API Key gerektirmez).
* **Font Awesome & Google Fonts**: Modern simgeler ve kod blokları fontları.
* **Node.js & Python**: Kod kalitesi ve statik bağdaştırma analiz araçları.

### 5. Yerel Kurulum
Uygulama tamamen statik dosyalardan oluştuğu için:
1. Bu projeyi bilgisayarınıza indirin.
2. `index.html` dosyasına çift tıklayarak tarayıcınızda açın.
3. Çalışmanızı başlatıp sağ üstteki **TR/EN** butonu ile diller arası geçişi test edin.
