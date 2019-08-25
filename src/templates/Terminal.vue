<template>
  <div class="template background">
    <div class="topbar">
      <div class="dots">
        <div class="dot-red"></div>
        <div class="dot-yellow"></div>
        <div class="dot-green"></div>
      </div>
    </div>

    <div class="terminal-container">
      <div>
        <p class="text">{{data.name}} update!</p>
      </div>
      <div>
        <p class="text">What's new?</p>
      </div>
      <div>
        <pre class="text">{{changelog}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terminal',
  props: {
    changelog: String,
    data: Object,
  },
};
</script>

<style scoped>
.template {
  width: 100%;
  margin: auto;
  padding-bottom: 50px;
  padding-top: 20px;
  background-color: var(--background);
}
.limited-container {
  width: 560px;
  margin: auto;
}

.dots {
  margin-left: 13px;
}

.dots div {
  display: inline-flex;
  width: 17px;
  height: 17px;
  border-radius: 8px;
  margin-left: 8px;
}

.dots .dot-red {
  background-color: #ff5f56;
}

.dots .dot-yellow {
  background-color: #ffbd2e;
}

.dots .dot-green {
  background-color: #27c93f;
}

.terminal-container {
  padding: 12px;
}
.terminal-container p {
  font-size: 16px;
}

pre {
  font-size: 15px;
}
</style>
