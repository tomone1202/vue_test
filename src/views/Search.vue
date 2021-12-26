<template>
  <div class="about">
    <h1>This is an props token:{{ token }}</h1>
    <h1>This is an testB testB:{{ testB }}</h1>
    <h1>This is an query query:{{ query }}</h1>
  </div>
</template>

<script>
export default {
  name: "search",
  props: ["token", "testB", "query"],
};
</script>