<script setup lang="ts">
// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
// }
const { coords, locatedAt, error, resume, pause } = useGeolocation()
const speedkmh = computed(() => {
    if (coords.value.speed) {
        return (coords.value.speed * 3.6).toFixed(2)
    }
    return 0
})
const altitude = computed(() => {
    if (coords.value.altitude) {
        return coords.value.altitude.toFixed(2)
    }
    return 0
})
const accurateAltitude = computed(() => {
    if (coords.value.altitude) {
        return coords.value.altitude.toFixed(2)
    }
    return 0
})
const accuracy = computed(() => {
    if (coords.value.accuracy) {
        return coords.value.accuracy.toFixed(2)
    }
    return 0
})
const heading = computed(() => {
    if (coords.value.heading) {
        return coords.value.heading.toFixed(2)
    }
    return 0
})

//create a function to show maximum speed in km/h during the session
let maxSpeed = 0
const maxSpeedkmh = computed(() => {
    if (coords.value.speed) {
        if (coords.value.speed > maxSpeed) {
            maxSpeed = coords.value.speed
        }
        return (maxSpeed * 3.6).toFixed(2)
    }
    return 0
})

// create function to show how many kilometers have been traveled during the session
let distance = 0
const distancekm = computed(() => {
    if (coords.value.speed) {
        distance = distance + coords.value.speed
        return (distance / 1000).toFixed(2)
    }
    return 0
})
</script>

<template>
  <!-- <pre lang="json">{{
            JSON.stringify(
                {
                    coords: {
                        accuracy: coords.accuracy,
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        altitude: coords.altitude,
                        altitudeAccuracy: coords.altitudeAccuracy,
                        heading: coords.heading,
                        speed: coords.speed,
                    },
                    locatedAt,
                    error: error ? error.message : error,
                },
                null,
                2
            )
        }}</pre> -->
  <div class="stats stats-vertical bg-primary text-primary-content">
    <div class="stat">
      <div class="stat-title">
        Speed
      </div>
      <div class="stat-value">
        {{ speedkmh }}
      </div>
      <div class="stat-desc">
        KM/T
      </div>
      <div class="stat">
        <div class="stat-title">
          Max. Speed
        </div>
        <div class="stat-value">
          {{ maxSpeedkmh }}
        </div>
        <div class="stat-desc">
          KM/T
        </div>
        <div class="stat">
          <div class="stat-title">
            Max. Speed
          </div>
          <div class="stat-value">
            {{ maxSpeed }}
          </div>
          <div class="stat-desc">
            KM/T
          </div>
          <div class="stat">
            <div class="stat-title">
              Distance
            </div>
            <div class="stat-value">
              {{ distancekm }}
            </div>
            <div class="stat-desc">
              KM/T
            </div>
            <div class="stat">
              <div class="stat-title">
                Approx. altitude
              </div>
              <div class="stat-value">
                {{ altitude }}
              </div>
              <div class="stat-desc">
                M.O.H.
              </div>

              <div class="stat">
                <div class="stat-title">
                  Accurate altitude
                </div>
                <div class="stat-value">
                  {{ accurateAltitude }}
                </div>
                <div class="stat-desc">
                  m.o.h.
                </div>
              </div>
              <div class="stat">
                <div class="stat-title">
                  Heading
                </div>
                <div class="stat-value">
                  {{ heading }}
                </div>
                <div class="stat-desc" />
              </div>
              <div class="stat">
                <div class="stat-title">
                  Accuracy
                </div>
                <div class="stat-value">
                  {{ accuracy }}
                </div>
                <div class="stat-desc" />
              </div>
              <div class="stat-actions">
                <button
                  class="btn-success btn-sm btn"
                  @click="resume"
                >
                  Start watch
                </button>
              </div>
              <div class="stat-actions">
                <button
                  class="btn-sm btn"
                  @click="pause"
                >
                  Pause watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
