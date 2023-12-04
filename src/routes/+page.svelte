<script lang="ts">
  import { SignedIn, SignedOut } from 'sveltefire';
  import { signInWithGoogle } from '$lib/firebase';
  import DayCarousel from '$lib/components/DayCarousel.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<SignedIn>
  <Header />
  <DayCarousel />

  <div class="flex justify-center space-x-3 mt-3">
    <div class="bg-primary-500 rounded-full w-3 h-3"></div>
    <div class="bg-surface-700 rounded-full w-3 h-3"></div>
    <div class="bg-surface-700 rounded-full w-3 h-3"></div>
    <div class="bg-surface-700 rounded-full w-3 h-3"></div>
  </div>
</SignedIn>

<SignedOut>
  <div class="h-full mx-auto flex justify-center items-center mw-50">
    <button class="btn variant-ghost-primary" on:click={signInWithGoogle}>Sign In</button>
  </div>
</SignedOut>
