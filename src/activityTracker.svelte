<script lang="ts" context="module">
    let isInited = false
    const callbacks = [];
    const delay = 30 * 1000; // 30s
    function fireCallbacks() {
      callbacks.forEach((callback) => {
        callback();
      });
      setupTimer()
    }

    const eventsOfInterest = ["click", "touch", "focus"]
    let timer = setTimeout(fireCallbacks, delay);
    function setupTimer() {
      clearTimeout(timer);
      timer = setTimeout(fireCallbacks, delay);
    }

    function subscribe() {
      eventsOfInterest.forEach((event) => {
        window.addEventListener(event, setupTimer)
      })
    }

    function unsubscribe() {
      eventsOfInterest.forEach((event) => {
        window.removeEventListener(event, setupTimer)
      })
    }

    export function initIdleTracker(callback: () => void) {
      if (isInited) return unsubscribe
      isInited = true
      callbacks.push(callback)
      subscribe()
      return unsubscribe
    }
</script>