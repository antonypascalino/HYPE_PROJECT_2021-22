<template>
  <div class="path-container">
    <img class="dashed-line" :src=line />

    <div class="poi-and-label">
      <nuxt-link :to="`/itinerari/pois/${this.id1}`">
        <div class="round-container round-poi-1">
          <img class="round-image poi1" :src="`../Poi/${img1}`" />
          <div class="round-text">{{ name1 }}</div>
        </div>
      </nuxt-link>
      <div class="poi-label">{{ name1 }}</div>
    </div>

    <div class="poi-and-label">
      <nuxt-link :to="`/itinerari/pois/${this.id2}`">
        <div class="round-container round-poi-2">
          <img class="round-image poi2" :src="`../Poi/${img2}`" />
          <div class="round-text">{{ name2 }}</div>
        </div>
      </nuxt-link>
      <div class="poi-label">{{ name2 }}</div>
    </div>

    <div class="poi-and-label">
      <nuxt-link :to="`/itinerari/pois/${this.id3}`">
        <div class="round-container round-poi-3">
          <img class="round-image poi3" :src="`../Poi/${img3}`" />
          <div class="round-text">{{ name3 }}</div>
        </div>
      </nuxt-link>
      <div class="poi-label">{{ name3 }}</div>
    </div>

    <div class="poi-and-label">
      <nuxt-link :to="`/itinerari/pois/${this.id4}`">
        <div class="round-container round-poi-4">
          <img class="round-image poi4" :src="`../Poi/${img4}`" />
          <div class="round-text">{{ name4 }}</div>
        </div>
      </nuxt-link>
      <div class="poi-label">{{ name4 }}</div>
    </div>

    <div class="poi-and-label">
      <nuxt-link :to="`/itinerari/pois/${this.id5}`">
        <div class="round-container round-poi-5">
          <img class="round-image poi5" :src="`../Poi/${img5}`" />
          <div class="round-text">{{ name5 }}</div>
        </div>
      </nuxt-link>
      <div class="poi-label">{{ name5 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItineraryPath',
  props: {
    line: {
      type: String,
    },
    name1: {
      type: String,
    },
    name2: {
      type: String,
    },
    name3: {
      type: String,
    },
    name4: {
      type: String,
    },
    name5: {
      type: String,
    },
    img1: {
      type: String,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
    img5: {
      type: String,
    },
    id1: {
      type: Number,
    },
    id2: {
      type: Number,
    },
    id3: {
      type: Number,
    },
    id4: {
      type: Number,
    },
    id5: {
      type: Number,
    },
  },
}
</script>

<style scoped>
.poi-label {
  display: none;
}

.path-container {
  width: 100%;
  height: 300px;
  /*border: 4px solid blue;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10vw;
}

.dashed-line {
  margin-left: 0;
  width: 100%;
  height: inherit;
  aspect-ratio: auto;
  object-fit: cover;
  position: absolute;
}

.round-container {
  border: 0.55vw solid #c13939;
  display: flex;
  height: 10vw;
  width: 10vw;
  border-radius: 100%;
  overflow: hidden;
  transition: 300ms ease-in-out;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
}

.round-container:hover {
  transform: scale(1.2);
  transform-origin: center;
  transition: 300ms ease-in-out;
  cursor: pointer;
}

.round-image {
  aspect-ratio: auto;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 300ms ease-in-out;
}

.round-text {
  opacity: 0;
  color: #c13939;
  position: absolute;
  /*float: left;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  text-align: center;
  text-justify: inter-word;
  /*display: flex;*/
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  font-size: 1.1vw;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: 100ms ease-in-out;
  /*border: 2px solid blue;*/
}

.round-container:hover .round-text,
.round-container.hover .round-text {
  opacity: 100%;
  transition: 300ms ease-in-out;
}

.round-container:hover .round-image,
.round-container.hover .round-image {
  opacity: 0;
  transition: 300ms ease-in-out;
}

@media screen and (max-width: 630px) {
  .path-container {
    flex-direction: column;
    height: auto;
    /*border: 2px solid blue;*/
  }
  .dashed-line {
    transform: rotate(90deg);
    height: 60%;
    width: 100%;
    right: 15vw;
  }
  .round-container {
    width: 80px;
    height: 80px;
  }

  .poi-and-label {
    display: flex;
    /*border: 2px solid blue;*/
    width: 50vw;
    margin-left: 8vw;
  }

  .poi-label {
    display: flex;
    align-items: center;
    /*border: 2px solid red;*/
    color: #c13939;
    font-family: 'Josefin Sans';
    font-size: 4vw;
    padding-left: 20px;
    width: 60vw;
  }
}
</style>
