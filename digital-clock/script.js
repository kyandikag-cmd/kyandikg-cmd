// List of all available timezones
const timezones = [
    { name: 'New York (EST)', zone: 'America/New_York', flag: '🇺🇸' },
    { name: 'Los Angeles (PST)', zone: 'America/Los_Angeles', flag: '🇺🇸' },
    { name: 'Denver (MST)', zone: 'America/Denver', flag: '🇺🇸' },
    { name: 'Chicago (CST)', zone: 'America/Chicago', flag: '🇺🇸' },
    { name: 'Toronto (EST)', zone: 'America/Toronto', flag: '🇨🇦' },
    { name: 'Mexico City (CST)', zone: 'America/Mexico_City', flag: '🇲🇽' },
    { name: 'São Paulo (BRT)', zone: 'America/Sao_Paulo', flag: '🇧🇷' },
    { name: 'Buenos Aires (ART)', zone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷' },
    { name: 'London (GMT)', zone: 'Europe/London', flag: '🇬🇧' },
    { name: 'Paris (CET)', zone: 'Europe/Paris', flag: '🇫🇷' },
    { name: 'Berlin (CET)', zone: 'Europe/Berlin', flag: '🇩🇪' },
    { name: 'Madrid (CET)', zone: 'Europe/Madrid', flag: '🇪🇸' },
    { name: 'Rome (CET)', zone: 'Europe/Rome', flag: '🇮🇹' },
    { name: 'Amsterdam (CET)', zone: 'Europe/Amsterdam', flag: '🇳🇱' },
    { name: 'Moscow (MSK)', zone: 'Europe/Moscow', flag: '🇷🇺' },
    { name: 'Dubai (GST)', zone: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'Delhi (IST)', zone: 'Asia/Kolkata', flag: '🇮🇳' },
    { name: 'Bangkok (ICT)', zone: 'Asia/Bangkok', flag: '🇹🇭' },
    { name: 'Singapore (SGT)', zone: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'Hong Kong (HKT)', zone: 'Asia/Hong_Kong', flag: '🇭🇰' },
    { name: 'Shanghai (CST)', zone: 'Asia/Shanghai', flag: '🇨🇳' },
    { name: 'Tokyo (JST)', zone: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'Seoul (KST)', zone: 'Asia/Seoul', flag: '🇰🇷' },
    { name: 'Sydney (AEDT)', zone: 'Australia/Sydney', flag: '🇦🇺' },
    { name: 'Melbourne (AEDT)', zone: 'Australia/Melbourne', flag: '🇦🇺' },
    { name: 'Auckland (NZDT)', zone: 'Pacific/Auckland', flag: '🇳🇿' },
    { name: 'Fiji (FJT)', zone: 'Pacific/Fiji', flag: '🇫🇯' },
];

let selectedTimezones = [];
let use24HourFormat = true;

const clocksGrid = document.getElementById('clocksGrid');
const addZoneBtn = document.getElementById('addZoneBtn');
const modal = document.getElementById('timezoneModal');
const closeBtn = document.querySelector('.close');
const timezoneSearch = document.getElementById('timezoneSearch');
const timezoneList = document.getElementById('timezoneList');
const searchInput = document.getElementById('searchInput');

// Initialize with some default timezones
function initializeDefaultTimezones() {
    const defaultZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
    defaultZones.forEach(zone => {
        const tz = timezones.find(t => t.zone === zone);
        if (tz && !selectedTimezones.find(t => t.zone === zone)) {
            selectedTimezones.push(tz);
        }
    });
    renderClocks();
}

// Open modal
addZoneBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    timezoneSearch.focus();
    renderTimezoneList('');
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Search timezone
timezoneSearch.addEventListener('input', (e) => {
    renderTimezoneList(e.target.value);
});

// Render timezone list
function renderTimezoneList(searchTerm) {
    const filtered = timezones.filter(tz => {
        const alreadySelected = selectedTimezones.find(t => t.zone === tz.zone);
        const matchesSearch = tz.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch && !alreadySelected;
    });

    timezoneList.innerHTML = filtered.map(tz => `
        <div class="timezone-item" onclick="addTimezone('${tz.zone}')">
            ${tz.flag} ${tz.name}
        </div>
    `).join('');

    if (filtered.length === 0) {
        timezoneList.innerHTML = '<div class="timezone-item" style="cursor: default; color: #95A5A6;">No timezones found</div>';
    }
}

// Add timezone
function addTimezone(zone) {
    const tz = timezones.find(t => t.zone === zone);
    if (tz && !selectedTimezones.find(t => t.zone === zone)) {
        selectedTimezones.push(tz);
        renderClocks();
        modal.style.display = 'none';
        timezoneSearch.value = '';
    }
}

// Remove timezone
function removeTimezone(zone) {
    selectedTimezones = selectedTimezones.filter(tz => tz.zone !== zone);
    renderClocks();
}

// Render clocks
function renderClocks() {
    if (selectedTimezones.length === 0) {
        clocksGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🕐</div>
                <div class="empty-state-text">No time zones added yet</div>
                <div class="empty-state-subtext">Click "+ Add Time Zone" to get started</div>
            </div>
        `;
        return;
    }

    clocksGrid.innerHTML = selectedTimezones.map(tz => `
        <div class="clock-card">
            <div class="timezone-name">
                <span>
                    <span class="timezone-flag">${tz.flag}</span> ${tz.name}
                </span>
                <button class="remove-btn" onclick="removeTimezone('${tz.zone}')">×</button>
            </div>
            <div class="time-format">
                <button class="format-btn ${use24HourFormat ? 'active' : ''}" onclick="set24HourFormat(true)">24H</button>
                <button class="format-btn ${!use24HourFormat ? 'active' : ''}" onclick="set24HourFormat(false)">12H</button>
            </div>
            <div class="digital-time" id="time-${tz.zone}">${getFormattedTime(tz.zone)}</div>
            <div class="time-details">
                <div class="detail-box">
                    <div class="detail-label">Date</div>
                    <div class="detail-value" id="date-${tz.zone}">${getFormattedDate(tz.zone)}</div>
                </div>
                <div class="detail-box">
                    <div class="detail-label">Day</div>
                    <div class="detail-value" id="day-${tz.zone}">${getDayName(tz.zone)}</div>
                </div>
            </div>
            <div class="timezone-offset" id="offset-${tz.zone}">${getTimezoneOffset(tz.zone)}</div>
        </div>
    `).join('');

    // Update clocks every second
    updateClocks();
}

// Get formatted time
function getFormattedTime(zone) {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: zone }));
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (use24HourFormat) {
        return `${hours}:${minutes}:${seconds}`;
    } else {
        let h = now.getHours();
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12;
        return `${String(h).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    }
}

// Get formatted date
function getFormattedDate(zone) {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: zone }));
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

// Get day name
function getDayName(zone) {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: zone }));
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[now.getDay()];
}

// Get timezone offset
function getTimezoneOffset(zone) {
    const now = new Date();
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: zone }));
    const diff = (tzDate - utcDate) / (1000 * 60 * 60);
    const sign = diff >= 0 ? '+' : '';
    return `UTC ${sign}${diff.toFixed(1)}`;
}

// Update clocks
function updateClocks() {
    selectedTimezones.forEach(tz => {
        const timeEl = document.getElementById(`time-${tz.zone}`);
        const dateEl = document.getElementById(`date-${tz.zone}`);
        const dayEl = document.getElementById(`day-${tz.zone}`);
        const offsetEl = document.getElementById(`offset-${tz.zone}`);

        if (timeEl) timeEl.textContent = getFormattedTime(tz.zone);
        if (dateEl) dateEl.textContent = getFormattedDate(tz.zone);
        if (dayEl) dayEl.textContent = getDayName(tz.zone);
        if (offsetEl) offsetEl.textContent = getTimezoneOffset(tz.zone);
    });

    setTimeout(updateClocks, 1000);
}

// Set 24 hour format
function set24HourFormat(value) {
    use24HourFormat = value;
    renderClocks();
}

// Initialize
initializeDefaultTimezones();

console.log('🌍 Digital Clock loaded!');
console.log('Select and manage your favorite time zones.');