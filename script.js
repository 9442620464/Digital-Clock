function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    gtag('event', 'theme_toggle', { 'event_category': 'UI', 'event_label': document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode' });
}

function trackDownload() {
    gtag('event', 'download', { 'event_category': 'User Action', 'event_label': 'Time Downloaded' });
    alert("Time downloaded!");
}

function trackShare() {
    gtag('event', 'share', { 'event_category': 'User Action', 'event_label': 'Shared Clock' });
    alert("Shared successfully!");
}

function trackTimezoneChange() {
    let timezone = document.getElementById('timezone').value;
    gtag('event', 'timezone_change', { 'event_category': 'Settings', 'event_label': timezone });
}

function trackSearch() {
    let query = document.getElementById('search').value;
    gtag('event', 'search', { 'event_category': 'User Action', 'search_term': query });
}
