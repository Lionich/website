<script lang="ts">
  import { activeItem, isPressed, videoSrc } from './store'
  import { handleClick, handleClickOff } from './handlers'

  console.log($videoSrc)
</script>

<svelte:head>
  <title>Барчик — это эмоции</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div
  class="h-screen w-screen flex items-center justify-center flex-col bg-black select-none"
  on:mousedown={handleClick}
  on:mouseup={handleClickOff}
>
  <video id="video" class="h-full absolute top-0" autoplay muted loop playsinline>
    <source id="video-source" src={$videoSrc} type="video/mp4" />
  </video>
  <div id="overlay" class="bg-black/50 absolute h-full w-full" />
  <div id="motto" class="w-1/3 flex items-center flex-col space-y-4 relative text-gray-100 -mt-12">
    <h1 class=" whitespace-nowrap">Барчик — это</h1>
    <span id="motto-variant">
      {$activeItem.motto}
    </span>
    <p id="description" class={`text-xl absolute top-full pt-8 ${$isPressed ? '' : 'hidden'}`}>
      {$activeItem.desc}
    </p>
  </div>
</div>

<style>
  #motto {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
</style>
