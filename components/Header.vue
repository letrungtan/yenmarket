<template>
  <header class="app-header">
      <img src="assets/images/logo.png" alt="Yen Market" class="p-0 h-[60%] sm:h-full sm:p-2">
      <input type="text" placeholder="Key search" class="max-w-[35rem] border border-[#ced4da] rounded min-h-10 w-full py-1 px-3">
      <!-- <button>Login</button> -->
      <div class="flex gap-8 flex justify-center items-center">
        <div class="flex justify-center items-center border-2 border-[#ca2628] rounded-[10px] w-[2.7rem] h-[2.7rem] relative aspect-square hidden sm:flex">
          <img src="assets/images/icons/icon-cart.svg" class="text-[#ca2628]">
        </div>
        <div class="flex gap-3">
          <img src="assets/images/icons/flag-vi.svg" class="min-w-[38px] w-[38px]">
          <img src="assets/images/icons/flag-en.svg" class="min-w-[38px] w-[38px]">
        </div>
      </div>
    </header>
</template>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0 max(1rem, min(5%, 4rem));
  height: 96px;
  max-width: 2080px;
  gap: 1rem;
}
</style>