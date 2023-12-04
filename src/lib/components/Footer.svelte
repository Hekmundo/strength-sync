<script lang="ts">
  import { SignedIn } from 'sveltefire';
</script>

<div class="text-center text-xs">
  <SignedIn let:signOut>
    <div class="mb-2">
      <a href={null} on:click={signOut} class="anchor cursor-pointer text-sm no-underline">
        Sign Out
      </a>
    </div>
  </SignedIn>
  <p class="text-surface-600">© Copyright StrengthSync 2023. All rights reserved.</p>
</div>
