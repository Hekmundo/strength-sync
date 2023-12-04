<script lang="ts">
  import { SignedIn } from 'sveltefire';
  import { signOut } from 'firebase/auth';
</script>

<div class="text-center text-xs">
  <SignedIn let:auth>
    <div class="mb-2">
      <a href={null} on:click={() => signOut(auth)} class="anchor cursor-pointer text-sm">
        Sign Out
      </a>
    </div>
  </SignedIn>
  <p class="text-surface-600">© Copyright StrengthSync 2023. All rights reserved.</p>
</div>
