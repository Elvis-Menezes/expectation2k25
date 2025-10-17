# Quick Setup Guide - E[X]PECTATIONS 2025

## 🚀 Important: Google Forms Integration

### Step 1: Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add the following fields (recommended):
   - **Name** (Short answer, Required)
   - **Email** (Email, Required)
   - **Phone Number** (Short answer, Required)
   - **College/University** (Short answer, Required)
   - **Course & Year** (Short answer)
   - **Event Category** (Multiple choice):
     - Technical Events
     - Non-Technical Events
     - Gaming Arena
     - All Events
   - **Specific Events Interested In** (Checkboxes):
     - Code Crack
     - Data Visualization
     - AI Innovation
     - Gaming Arena
     - Digital Art
     - Tech Talks
   - **Team Members** (Long answer - if applicable)
   - **Why do you want to participate?** (Paragraph)

4. Click **Send** button
5. Click the **Link** icon (🔗)
6. Click **Shorten URL** checkbox
7. Copy the shortened URL (e.g., `https://forms.gle/abc123xyz`)

### Step 2: Update the Website

Open `register.html` and find line 407:

```javascript
const googleFormURL = 'https://forms.gle/YOUR_FORM_ID_HERE';
```

Replace `YOUR_FORM_ID_HERE` with your actual Google Form URL:

```javascript
const googleFormURL = 'https://forms.gle/abc123xyz';
```

### Step 3: Test the Registration

1. Open the website
2. Click "REGISTER" in navigation OR "Register Now" button
3. Select an event category (optional)
4. Click "Register via Google Forms"
5. Verify the form opens in a new tab

---

## 🎨 Customization Quick Tips

### Change Event Information

Edit `assets/js/event-modals.js`, find the `eventData` object and modify:

```javascript
'code-crack': {
  title: 'Your Event Name',
  prize: '₹75,000',  // Change prize
  date: 'November 25, 2025',  // Change date
  contacts: [
    { 
      name: 'Your Name',
      phone: '+91 98765 43210',
      email: 'youremail@christuniversity.in'
    }
  ]
}
```

### Change Colors

Edit `assets/css/style.css`, find the `:root` section:

```css
:root {
  --neon-primary: #00ffff;    /* Change cyan */
  --neon-secondary: #ff0080;  /* Change pink */
  --neon-accent: #ffff00;     /* Change yellow */
}
```

### Add New Event

1. In `index.html`, add event card:
```html
<div class="event-card cyber-card magic-card card-scroll-reveal" data-event="new-event">
  <div class="event-icon">
    <i class="fas fa-star"></i>
  </div>
  <h3>New Event</h3>
  <p>Description here</p>
  <button class="btn btn-outline" onclick="openEventModal('new-event')">Learn More</button>
</div>
```

2. In `assets/js/event-modals.js`, add event data:
```javascript
'new-event': {
  icon: 'fas fa-star',
  title: 'New Event',
  subtitle: 'Event Subtitle',
  date: 'TBA',
  duration: 'TBA',
  team: 'TBA',
  venue: 'TBA',
  description: 'Event description...',
  rules: ['Rule 1', 'Rule 2'],
  prize: 'TBA',
  contacts: [...]
}
```

---

## 📱 Testing Checklist

Before going live, test:

- [ ] Homepage loads correctly
- [ ] Intro video plays (or skip button works)
- [ ] Navigation menu works (all links)
- [ ] "Register" button goes to registration page
- [ ] Event cards animate on scroll
- [ ] "Learn More" opens event modals
- [ ] Modal closes properly (X, Escape, click outside)
- [ ] All 6 event modals have correct information
- [ ] Registration page loads
- [ ] Event category selection works
- [ ] Google Forms link opens in new tab
- [ ] "Back to Home" link works
- [ ] Mobile responsive (test on phone)
- [ ] All animations work smoothly
- [ ] No console errors in browser

---

## 🐛 Troubleshooting

### Cards not animating?
- Check if `card-animations.css` is loaded
- Open browser console (F12) for errors
- Verify JavaScript is enabled

### Modal not opening?
- Check `event-modals.js` is loaded
- Verify event ID matches in HTML and JS
- Check browser console for errors

### Google Forms not opening?
- Verify URL is correct in `register.html`
- Check if pop-up blocker is enabled
- Try in incognito/private mode

### Mobile issues?
- Clear browser cache
- Test on actual device, not just browser resize
- Check `mobile.css` is loaded

---

## 🎯 Quick Reference

### Key Files:
- `index.html` - Main page
- `register.html` - Registration page
- `assets/css/card-animations.css` - Card effects
- `assets/css/event-modal.css` - Modal styling
- `assets/js/event-modals.js` - Event data & modal logic

### Important Functions:
- `openEventModal(eventId)` - Open event modal
- `closeEventModal()` - Close modal
- `window.location.href='register.html'` - Go to registration

### CSS Classes to Use:
- `.magic-card` - Apply card styling
- `.card-scroll-reveal` - Animate on scroll
- `.card-floating` - Continuous float animation
- `.card-glow-pulse` - Pulsing glow effect

---

## 📞 Need Help?

1. Check `UPDATES.md` for detailed documentation
2. Review browser console for errors
3. Test in different browsers
4. Verify all files are in correct locations
5. Check file paths are correct

---

## ✅ Go Live Checklist

Before launching:

1. **Content Review**
   - [ ] All event information is accurate
   - [ ] Contact details are correct
   - [ ] Dates and times are finalized
   - [ ] Prize amounts are confirmed

2. **Technical Setup**
   - [ ] Google Forms URL is updated
   - [ ] All images are uploaded
   - [ ] All CSS/JS files are included
   - [ ] No broken links

3. **Testing**
   - [ ] Desktop browser testing
   - [ ] Mobile device testing
   - [ ] Registration flow tested
   - [ ] All modals checked

4. **Optimization**
   - [ ] Images compressed
   - [ ] Files minified (optional)
   - [ ] Cache headers set
   - [ ] Analytics added (optional)

5. **Final Steps**
   - [ ] Upload to web server
   - [ ] Test live URL
   - [ ] Share with team
   - [ ] Promote on social media

---

**Website is ready to go! 🚀**

For detailed documentation, see `UPDATES.md`
