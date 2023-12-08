<script lang="ts" context="module">
    let isInited = false
    const callbacks = [];
    function fireCallbacks() {
      callbacks.forEach((callback) => {
        callback();
      });
    }

    const eventsOfInterest = ["click", "touch", "focus"]
    let timer: ReturnType<typeof setTimeout>;
    function eventHandler() {
      clearTimeout(timer);
      timer = setTimeout(fireCallbacks, 30 * 1000);
    }

    function subscribe() {
      eventsOfInterest.forEach((event) => {
        window.addEventListener(event, eventHandler)
      })
    }

    function unsubscribe() {
      eventsOfInterest.forEach((event) => {
        window.removeEventListener(event, eventHandler)
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