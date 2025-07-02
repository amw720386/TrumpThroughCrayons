# Trump Tweets in Crayon

**Trump Tweets in Crayon** is a light-hearted Chrome extension that restyles Donald Trump's tweets (or any account you want to target) using a crayon-style font and customizable theme. It’s a fun way to change the tone of political posts—or anything with an @handle!

---

## Features

- Replaces the font of selected tweets with a crayon-style font
- Works on `x.com` (formerly Twitter)
- Auto-updates as you scroll through the feed
- Toggle ON/OFF via the popup

---

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to [`chrome://extensions/`](chrome://extensions/)
3. Enable **Developer Mode** (top right).
4. Click **"Load unpacked"** and select the project folder.
5. You're good to go! Visit [https://x.com](https://x.com) and scroll to see the magic.

---

## 🎨 Usage

- Click the extension icon in the toolbar.
- Use the **Enable Crayon Tweets** checkbox to toggle the effect.
- Tweets that match the configured selector (by default: any with `@`) will update in real time.

---

## 🔧 Customization

Want to change who gets the crayon treatment?

Open `content.js` and modify the `isTrump()` function:

```js
function isTrump(tweetElement) {
  const handle = ...;
  return handle === "@realDonaldTrump";
}
