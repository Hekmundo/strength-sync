<script lang="ts">
  import ExerciseSummary from './ExerciseSummary.svelte';
  import benchPress from '$lib/assets/exercises/bench-press.png';

  export let day: number;
  export let dayDescription: string;

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<div>
  <div class="card snap-always snap-center w-[94vw] mx-[3vw]">
    <h3 class="flex justify-center py-2 px-4 text-center text-primary-400 text-sm">
      Day {day}/4 - {dayDescription}
    </h3>
    <div class="overflow-y-auto hide-scrollbar max-h-[55vh]">
      <div class="flex justify-center mt-4">
        <button class="btn bg-primary-500 font-bold text-center w-52 mx-3 py-3 text-sm"
          >Start Day {day}</button
        >
      </div>

      <li class="space-y-4 mx-4 mt-6 list-none last-of-type:mb-2">
        {#each images as image}
          <ExerciseSummary src={benchPress} />
        {/each}
      </li>
    </div>
  </div>
</div>
