<template>
    <div class="flex flex-col">
        <span class="mb-4 mt-4 text-center text-4xl text-sky-600">Guess the country</span>

        <div
            class="mt-8 box-border justify-center self-center rounded-md border-8 bg-slate-300 p-8 shadow-md shadow-slate-500 outline outline-1 dark:bg-slate-100 dark:shadow-slate-50"
        >
            <div class="min-w-max max-w-lg">
                <p class="mb-4 text-center text-4xl text-sky-600">Vælg hvor mange lande du vil gætte</p>
            </div>
            ! FIX: Add optional timer
            <div class="justify-center self-center">
                <img class="w-56 rounded-sm" :src="currentFlag" alt="Flag to guess" />
            </div>
            <div class="mt-4 flex min-w-max max-w-lg flex-col rounded-md shadow-sm">
                ! FIX: Add a button to start the quiz
            </div>
        </div>
    </div>
</template>
<script></script>
