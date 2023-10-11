<template>
    <MapboxMap>
        <MapboxSource
            source-id="{ID}"
            :source="{
                type: 'geojson',
                data: '/test.geojson',
            }"
        />
        <MapboxLayer
            :layer="{
                source: '{ID}',
                id: 'geojson-layer',
                type: 'fill',
            }"
        />
        <MapboxGeolocateControl position="top-left" />
    </MapboxMap>
</template>
