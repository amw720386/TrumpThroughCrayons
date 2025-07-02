console.log("Trump Crayon Extension loaded");

const fontUrl = chrome.runtime.getURL("crayon-font.woff2");
const crayonFont = new FontFace("CrayonFont", `url(${fontUrl})`);
crayonFont.load().then(font => {
  document.fonts.add(font);
  console.log("Crayon font loaded");
}).catch(err => {
  console.error("Failed to load crayon font", err);
});

function isTrump(tweetElement) {
  const allLinks = tweetElement.querySelectorAll('a[href^="/"]');
  for (const link of allLinks) {
    const span = link.querySelector('span');
    if (!span) continue;
    const handle = span.innerText;
    if (handle.includes("realDonaldTrump")) {
      return true;
    }
  }
  return false;
}

function applyCrayonStyle(tweetElement) {
  const textBlocks = tweetElement.querySelectorAll('div[lang]');
  textBlocks.forEach(block => {
    block.classList.add("crayon-tweet");
  });
}

function processTweets() {
  const tweets = document.querySelectorAll('article[role="article"]');
  tweets.forEach(tweet => {
    if (isTrump(tweet)) {
      const alreadyStyled = tweet.querySelector('.crayon-tweet');
      if (!alreadyStyled) {
        applyCrayonStyle(tweet);
      }
    }
  });
}

chrome.storage.sync.get("enabled", (data) => {
  const isEnabled = data.enabled ?? true;
  if (isEnabled) {
    const observer = new MutationObserver(processTweets);
    observer.observe(document.body, { childList: true, subtree: true });
    processTweets(); 
  } else {
    console.log("🟡 Crayon extension is currently disabled");
  }
});