<script setup lang="ts"></script>

<template>
  <div class="bg-gray-100 font-sans pb-24">
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
      <div class="md:grid md:grid-cols-3 md:gap-4">
        <div class="col-span-1">
          <div
            class="bg-white rounded border border-gray-200 relative flex flex-col"
          >
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">Upload</span>
              <Icon name="mdi:cloud-upload" class="text-green-400" />
            </div>
            <div class="p-6">
              <!-- Upload Dropbox -->
              <div
                class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
              >
                <h5>Drop your files here</h5>
              </div>
              <hr class="my-6" />
              <!-- Progess Bars -->
              <div class="mb-4">
                <!-- File Name -->
                <div class="font-bold text-sm">Just another song.mp3</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                  <!-- Inner Progress Bar -->
                  <div
                    class="transition-all progress-bar bg-blue-400"
                    style="width: 75%"
                  ></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="font-bold text-sm">Just another song.mp3</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                  <div
                    class="transition-all progress-bar bg-blue-400"
                    style="width: 35%"
                  ></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="font-bold text-sm">Just another song.mp3</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                  <div
                    class="transition-all progress-bar bg-blue-400"
                    style="width: 55%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div
            class="bg-white rounded border border-gray-200 relative flex flex-col"
          >
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">My Songs</span>

              <Icon name="fa6-solid:compact-disc" class="text-green-400" />
            </div>
            <div class="p-6">
              <!-- Composition Items -->
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <Icon name="ic:baseline-watch-later" />
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <Icon name="ic:baseline-edit" />
                  </button>
                </div>
                <div>
                  <form>
                    <div class="mb-3">
                      <label class="inline-block mb-2">Song Title</label>
                      <input
                        type="text"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter Song Title"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="inline-block mb-2">Genre</label>
                      <input
                        type="text"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter Genre"
                      />
                    </div>
                    <button
                      type="submit"
                      class="py-1.5 px-3 rounded text-white bg-green-600"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      class="py-1.5 px-3 rounded text-white bg-gray-600"
                    >
                      Go Back
                    </button>
                  </form>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <Icon name="ic:baseline-watch-later" />
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <Icon name="ic:baseline-edit" />
                  </button>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <Icon name="ic:baseline-watch-later" />
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <Icon name="ic:baseline-edit" />
                  </button>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <Icon name="ic:baseline-watch-later" />
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <Icon name="ic:baseline-edit" />
                  </button>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <Icon name="ic:baseline-watch-later" />
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <Icon name="ic:baseline-edit" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
