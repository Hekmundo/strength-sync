<script lang="ts">
  import { SignedIn, SignedOut } from 'sveltefire';
  import { signInWithGoogle } from '$lib/firebase';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="mw-50 mx-4">
    <SignedIn let:user let:signOut>
      <div class="flex items-center flex-col">
        <p>Hello {user.displayName}</p>
      </div>
    </SignedIn>

    <SignedOut let:auth>
      <button class="btn variant-ghost-primary" on:click={signInWithGoogle}>Sign In</button>
    </SignedOut>
    <!-- <input type="number" max="999" {value} class="input" /> -->
  </div>
</div>
