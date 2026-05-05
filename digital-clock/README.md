# 🌍 Digital Clock - Multiple Time Zones

A beautiful, interactive digital clock that displays the current time across multiple time zones simultaneously.

## Features

✨ **Real-Time Updates** - Clock updates every second with accurate time

🌍 **27+ Time Zones** - Display time from major cities around the world

🔍 **Search & Filter** - Easily find and add time zones

⏰ **Dual Format** - Switch between 24-hour and 12-hour (AM/PM) format

📅 **Date & Day** - Shows current date and day name for each timezone

🔧 **Easy Management** - Add or remove time zones with a single click

📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

🎨 **Beautiful UI** - Modern gradient design with smooth animations

## How to Use

1. Open `index.html` in your web browser
2. Click **"+ Add Time Zone"** to open the timezone selector
3. Search for a city or timezone (e.g., "Tokyo", "New York", "London")
4. Click on a timezone to add it to your clock display
5. Switch between 24-hour and 12-hour format using the format buttons
6. Remove a timezone by clicking the **×** button on its card

## Supported Time Zones

### Americas
- New York (EST)
- Los Angeles (PST)
- Denver (MST)
- Chicago (CST)
- Toronto (EST)
- Mexico City (CST)
- São Paulo (BRT)
- Buenos Aires (ART)

### Europe
- London (GMT)
- Paris (CET)
- Berlin (CET)
- Madrid (CET)
- Rome (CET)
- Amsterdam (CET)
- Moscow (MSK)

### Asia
- Dubai (GST)
- Delhi (IST)
- Bangkok (ICT)
- Singapore (SGT)
- Hong Kong (HKT)
- Shanghai (CST)
- Tokyo (JST)
- Seoul (KST)

### Oceania
- Sydney (AEDT)
- Melbourne (AEDT)
- Auckland (NZDT)
- Fiji (FJT)

## Technical Details

- **HTML5** - Semantic structure with modal dialogs
- **CSS3** - Modern gradients, animations, and responsive grid layout
- **JavaScript** - Real-time clock updates using `Date.toLocaleString()` API
- **Timezone API** - Accurate timezone conversions using JavaScript's built-in APIs

## File Structure

```
digital-clock/
├── index.html      # Main HTML file
├── style.css       # All styling and animations
├── script.js       # Clock logic and interactivity
└── README.md       # This file
```

## Customization

### Add More Time Zones

Edit the `timezones` array in `script.js`:

```javascript
const timezones = [
    { name: 'Your City', zone: 'Continent/City', flag: '🏳️' },
    // ...
];
```

### Change Colors

Modify the gradient colors in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adjust Update Frequency

Change the timeout in `updateClocks()` function (currently 1000ms):

```javascript
setTimeout(updateClocks, 1000); // Update every second
```

## Browser Compatibility

- ✅ Chrome/Edge - Full support
- ✅ Firefox - Full support
- ✅ Safari - Full support
- ❌ IE - Not supported (uses modern JavaScript APIs)

## Features Breakdown

### Real-Time Updates
The clock updates every second using `setInterval()` to fetch the current time from the system and convert it to each selected timezone.

### Timezone Management
Add unlimited timezone clocks and remove them instantly. The search feature filters all available timezones in real-time.

### Format Toggle
Switch between 24-hour (00:00:00) and 12-hour (12:00:00 AM) format with one click. The change applies to all clocks.

### Responsive Grid
The clock display automatically adapts to screen size using CSS Grid:
- Desktop: Multiple columns
- Tablet: 2 columns
- Mobile: 1 column

## Performance

- Lightweight JavaScript with no external dependencies
- Efficient DOM updates using direct element references
- CSS animations for smooth visual feedback
- Optimized rendering with requestAnimationFrame

## Future Enhancements

- [ ] Analog clock display option
- [ ] Alarm functionality
- [ ] Time difference calculator
- [ ] Local storage to save preferred timezones
- [ ] Dark/Light theme toggle
- [ ] Timezone comparisons
- [ ] Sunrise/Sunset times
- [ ] Business hours indicators

## License

Free to use and modify for personal and commercial projects.

## Author

Created with ❤️ by kyandikag-cmd

---

**Stay on time across the globe!** 🌍⏰