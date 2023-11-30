<script lang="ts">
  import { SignedIn, SignedOut, userStore } from 'sveltefire';
  import { auth, signInWithGoogle } from '$lib/firebase';

  function logUser(user: any) {
    console.log(user);
  }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="mw-50 mx-4">
    <SignedIn let:user let:signOut>
      <div class="flex items-center flex-col gap-5">
        <p>Hello {user}</p>
        <button class="btn variant-ghost-primary" on:click={() => logUser(user)}>Click Me</button>
        <button class="btn variant-ghost-primary" on:click={signOut}>Sign Out</button>
      </div>
    </SignedIn>

    <SignedOut let:auth>
      <button class="btn variant-ghost-primary" on:click={signInWithGoogle}>Sign In</button>
    </SignedOut>
    <!-- <input type="number" max="999" {value} class="input" /> -->
  </div>
</div>
