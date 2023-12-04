<script lang="ts">
  import '../app.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { FirebaseApp } from 'sveltefire';
  import { auth, firestore, storage } from '$lib/firebase';
  import { signOut } from 'firebase/auth';
  import { SignedIn, userStore } from 'sveltefire';
  import Footer from '$lib/components/Footer.svelte';

  // Floating UI for Popups
  // import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  // import { storePopup } from '@skeletonlabs/skeleton';
  // storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<FirebaseApp {auth} {firestore} {storage}>
  <AppShell slotFooter="flex justify-center px-4 py-5">
    <slot />
    <Footer slot="footer" />
  </AppShell>
</FirebaseApp>
