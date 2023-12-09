let isInited = false;
let callback = () => undefined;
const delay = 30 * 1000; // 30s
function fireCallback() {
  callback();
  setupTimer();
}

const eventsOfInterest = ["click", "touch", "focus"];
let timer = setTimeout(fireCallback, delay);
function setupTimer() {
  clearTimeout(timer);
  timer = setTimeout(fireCallback, delay);
}

function subscribe() {
  eventsOfInterest.forEach((event) => {
    window.addEventListener(event, setupTimer);
  });
}

function unsubscribe() {
  eventsOfInterest.forEach((event) => {
    window.removeEventListener(event, setupTimer);
  });
}

export function initIdleTracker(cb: () => void) {
  if (isInited) return unsubscribe;
  isInited = true;
  callback = cb;
  subscribe();
  return unsubscribe;
}