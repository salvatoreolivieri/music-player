<script setup lang="ts"></script>

<template>
  <div class="bg-gray-100 font-sans pb-24">
    <!-- Music Header -->
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div
        class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
        style="background-image: url(/assets/img/song-header.png)"
      ></div>
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button
          type="button"
          class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
        >
          <Icon name="heroicons:play-20-solid" />
        </button>
        <div class="z-50 text-left ml-8">
          <!-- Song Info -->
          <div class="text-3xl font-bold">Song Title</div>
          <div>Blues Rock</div>
        </div>
      </div>
    </section>
    <!-- Form -->
    <section class="container mx-auto mt-6">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <!-- Comment Count -->
          <span class="card-title">Comments (15)</span>

          <Icon
            name="heroicons:chat-bubble-left-right-solid"
            class="float-right text-green-400"
          />
        </div>
        <div class="p-6">
          <form>
            <textarea
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."
            ></textarea>
            <button
              type="submit"
              class="py-1.5 px-3 rounded text-white bg-green-600 block"
            >
              Submit
            </button>
          </form>
          <!-- Sort Comments -->
          <select
            class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          >
            <option value="1">Latest</option>
            <option value="2">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <ul class="container mx-auto">
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
    </ul>

    <!-- Player -->
    <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
      <!-- Track Info -->
      <div class="text-center">
        <span class="song-title font-bold">Song Title</span> by
        <span class="song-artist">Artist</span>
      </div>
      <div class="flex flex-nowrap gap-4 items-center">
        <!-- Play/Pause Button -->
        <button type="button">
          <Icon name="heroicons:play-20-solid" />
        </button>
        <!-- Current Position -->
        <div class="player-currenttime">00:00</div>
        <!-- Scrub Container  -->
        <div class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
          <!-- Player Ball -->
          <span
            class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
            style="left: 50%"
          >
            <Icon name="ic:baseline-circle" />
          </span>
          <!-- Player Progress Bar-->
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            style="width: 50%"
          ></span>
        </div>
        <!-- Duration -->
        <div class="player-duration">03:06</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
