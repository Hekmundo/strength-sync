<script lang="ts">
  import { SignedIn, SignedOut } from 'sveltefire';
  import { signInWithGoogle } from '$lib/firebase';
  import DayCarousel from '$lib/components/DayCarousel.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<SignedIn>
  <Header />
  <DayCarousel />
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
