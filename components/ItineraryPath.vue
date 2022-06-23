<template>
  <div class="path-container">
    <img class="dashed-line" src="@/static/itineraries/LineaDrittaPNG.png" />

    <nuxt-link :to="'pois/poi1'">
      <div class="round-container round-poi-1">
        <img class="round-image poi1" src="@/static/Poi/piazzaMaggiore02.jpg" />
        <div class="round-text">Piazza Maggiore</div>
      </div>
    </nuxt-link>

    <div class="round-container round-poi-2">
      <img class="round-image poi2" src="@/static/Poi/palazzoAccursio03.jpg" />
      <div class="round-text">Palazzo Accursio</div>
    </div>

    <div class="round-container round-poi-3">
      <img class="round-image poi3" src="@/static/Poi/palazzoReEnzo02.jpg" />
      <div class="round-text">Palazzo Re Enzo</div>
    </div>

    <div class="round-container round-poi-4">
      <img class="round-image poi4" src="@/static/Poi/fontanaNettuno02.jpg" />
      <div class="round-text">Fontana del Nettuno</div>
    </div>

    <div class="round-container round-poi-5">
      <img class="round-image poi5" src="@/static/Poi/torri03.jpg" />
      <div class="round-text">Le torri</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItineraryPath',
}
</script>

<style scoped>
.path-container {
  width: 100%;
  height: 300px;
  /*border: 8px solid blue;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  overflow: hidden;
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
  background-color: #e5e5e5;
}

.round-container:hover {
  transform: scale(1.1);
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
  font-size: 1.2vw;
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
  opacity: 20%;
  transition: 300ms ease-in-out;
}
</style>
