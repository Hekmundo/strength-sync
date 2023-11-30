<script lang="ts">
  import '../app.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { FirebaseApp } from 'sveltefire';
  import { auth, firestore } from '$lib/firebase';

  // Floating UI for Popups
  // import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  // import { storePopup } from '@skeletonlabs/skeleton';
  // storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<FirebaseApp {auth} {firestore}>
  <AppShell>
    <slot />
  </AppShell>
</FirebaseApp>
