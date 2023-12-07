<script lang="ts">
  import { SignedIn, SignedOut } from 'sveltefire';
  import { signInWithGoogle } from '$lib/firebase';
  import DayCarousel from '$lib/components/DayCarousel.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<SignedIn>
  <div class="h-[1vh]" />
  <Header />
  <div class="h-[1vh]" />
  <DayCarousel />

  <div class="h-[7vh] flex flex-col justify-center">
    <div class="flex justify-center space-x-3">
      <div class="bg-primary-500 rounded-full w-3 h-3"></div>
      <div class="bg-surface-700 rounded-full w-3 h-3"></div>
      <div class="bg-surface-700 rounded-full w-3 h-3"></div>
      <div class="bg-surface-700 rounded-full w-3 h-3"></div>
    </div>
    <div class="h-[1vh]" />
  </div>
</SignedIn>

<SignedOut>
  <div class="h-full mx-auto flex justify-center items-center mw-50">
    <button class="btn variant-ghost-primary" on:click={signInWithGoogle}>Sign In</button>
  </div>
</SignedOut>

<!-- Mobile heights -->
<!-- Footer: 5vh -->
<!-- Header: 15vh -->
<!-- Day Title: 5vh -->
<!-- Day Content: 65vh -->
<!-- Dots: 8vh -->
