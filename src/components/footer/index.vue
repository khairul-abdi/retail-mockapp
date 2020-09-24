<template>
  <div class="footer fixed-bottom">
    Made w/ love @&nbsp;<a target="_blank" href="https://khairul-abdi.netlify.app/">Khairul Abdi</a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: rgb(183, 72, 14);
  height: 40px;
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  color: white;
  align-items: center;
  padding-right: 1em;
}
a {
  color: white;
}
</style>

<script>
export default {
  name: "footer"
};
</script>
