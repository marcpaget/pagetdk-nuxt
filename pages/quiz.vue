<template>
  <div>
    <section v-if="totalQuestions > 10">
      <QuizComponentEnd />
    </section>
    <section v-else>
      <QuizComponentMain />
    </section>
    <!-- <section>
            <EndQuizComponent :score="score" :wrong="wrong" />
        </section> -->
  </div>
</template>
