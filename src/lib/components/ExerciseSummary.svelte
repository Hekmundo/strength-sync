<script lang="ts">
  export let src = '$lib/assets/yin-yang.png';
</script>

<div class="flex justify-between gap-3 pb-1">
  <img
    {src}
    alt="Bench press"
    class="w-[60px] h-[60px] bg-white rounded-container-token object-contain ring-2 ring-secondary-500"
  />
  <p class="text-sm self-center font-semibold ml-1">Competition Standard Bench Press</p>
  <li
    class="text-[0.6rem] list text-xs font-semibold text-end space-y-0 whitespace-nowrap self-center text-surface-400"
  >
    <p>1 x 6 @ 7.5</p>
    <p>1 x 6 @ 7.5</p>
    <p>1 x 6 @ 7.5</p>
  </li>
</div>
