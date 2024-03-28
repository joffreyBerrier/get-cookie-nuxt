<script setup>
await useAsyncData(
  'counter',
  () => $fetch('/api/counter')
);
</script>

<template>
  <div>
    <h1>GetCookie doesn't work in `server/api/counter``</h1>
    <p>Check server logs</p>
    <pre>
      console.log('counter', counter) => counter 1
      console.log(getCookie(event, 'counter')) => undefined
    </pre>
  </div>
</template>
