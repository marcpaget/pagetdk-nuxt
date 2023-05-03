<template>
    <div class="flex flex-col">
        <span class="text-4xl text-sky-600 text-center mb-4 mt-4">Guess the country</span>

        <div
            class="bg-slate-300 dark:bg-slate-100 mt-8 rounded-md justify-center self-center shadow-md shadow-slate-500 dark:shadow-slate-50 outline outline-1 box-border p-8 border-8"
        >
            <div class="min-w-max max-w-lg">
                <p class="text-4xl text-sky-600 text-center mb-4">Vælg hvor mange lande du vil gætte</p>
            </div>
            ! FIX: Add optional timer
            <div class="justify-center self-center">
                <img class="rounded-sm w-56" :src="currentFlag" alt="Flag to guess" />
            </div>
            <div class="min-w-max max-w-lg flex flex-col rounded-md shadow-sm mt-4">
                ! FIX: Add a button to start the quiz
            </div>
        </div>
    </div>
</template>
<script></script>
