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

  let elemCarousel: HTMLDivElement;
  // function carouselLeft(): void {
  //   const x =
  //     elemCarousel.scrollLeft === 0
  //       ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
  //       : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
  //   elemCarousel.scroll(x, 0);
  // }

  // function carouselRight(): void {
  //   const x =
  //     elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
  //       ? 0 // loop
  //       : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
  //   elemCarousel.scroll(x, 0);
  // }
</script>

<div class="flex justify-center">
  <div class="grid grid-cols-[1fr] gap-4 items-center w-screen">
    <div
      bind:this={elemCarousel}
      class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto hide-scrollbar"
    >
      {#each days as day}
        <DaySummary day={day.day} dayDescription={day.dayDescription} />
      {/each}
    </div>
  </div>
</div>
