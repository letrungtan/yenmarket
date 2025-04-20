<template>
  <nav class="app-nav">
    <div class="app-nav-wrap">
      <img src="assets/images/icons/icon-navige.svg" class="h-4" data-v-0b36b79a="">
      <div class="nav-label" >List of item</div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {  
  margin: auto;
  padding: .7rem max(1.5rem, min(5%, 4rem));
  max-width: 2080px;
  background: #ca2628;
  margin-bottom: 0.75rem;
  &-wrap {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .nav-label {
    text-transform: uppercase;
    font-weight: bold;
    color: #f8f9fa;
    font-size: max(15px, min(2.5vw, 17.5px));
    line-height: 19.5px;
  }
}
</style>