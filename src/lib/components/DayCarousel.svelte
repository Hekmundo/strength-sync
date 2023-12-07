<script lang="ts">
  import DaySummary from './DaySummary.svelte';

  const days = [
    {
      day: 1,
      dayDescription: 'Primary Bench + Secondary Squat'
    },
    {
      day: 2,
      dayDescription: 'Primary Deadlift'
    },
    {
      day: 3,
      dayDescription: 'Primary Squat'
    },
    {
      day: 4,
      dayDescription: 'Tertiary Bench + Secondary Deadlifts'
    }
  ];

  let currentDayIndex = 0;

  async function handleScroll(event: UIEvent) {
    const target = event.target as HTMLElement;
    currentDayIndex = Math.round(target.scrollLeft / target.offsetWidth);
  }
</script>

<div class="flex justify-center">
  <div class="grid grid-cols-[1fr] gap-4 items-center w-screen">
    <div
      class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto hide-scrollbar"
      on:scroll={handleScroll}
    >
      {#each days as day}
        <div>
          <DaySummary day={day.day} dayDescription={day.dayDescription} />
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="h-[7vh] flex flex-col justify-center">
  <div class="flex justify-center space-x-3">
    {#each days as day, i}
      <div
        class="rounded-full w-3 h-3 {currentDayIndex === i ? 'bg-primary-500' : 'bg-surface-700'}"
      ></div>
    {/each}
  </div>
  <div class="h-[1vh]" />
</div>
