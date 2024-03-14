<template>
    <div class="min-w-max max-w-lg">
        <span class="text-4xl text-sky-600 text-center mb-4">Score</span>
        <p class="text-2xl text-green-600 text-center mb-4">Correct: {{ score }}</p>
        <p class="text-2xl text-red-600 text-center mb-4">Wrong: {{ wrong }}</p>
        <button @click="totalQuestions = 0">Play Again</button>
        <!-- <StartQuizComponent />
        <EndQuizComponent :score="score" :wrong="wrong" />
        <button @click="showGame = !showGame">Switch</button> -->
    </div>
</template>

<!-- Pass props fra MainQuizComponent -->
<!-- Lav lækre transitions og tsparticle sconfetti -->
