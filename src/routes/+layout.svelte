<script lang="ts">
  import '../app.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { FirebaseApp } from 'sveltefire';
  import { auth, firestore, storage } from '$lib/firebase';
  import Footer from '$lib/components/Footer.svelte';

  // Floating UI for Popups
  // import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  // import { storePopup } from '@skeletonlabs/skeleton';
  // storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<FirebaseApp {auth} {firestore} {storage}>
  <AppShell slotPageContent="mx-auto" slotFooter="flex justify-center h-[5vh]">
    <slot />
    <Footer slot="footer" />
  </AppShell>
</FirebaseApp>
