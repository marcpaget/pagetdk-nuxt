<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
})

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()

const signUp = async () => {
    const { user, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
}

const login = async () => {
    const { user, error } = await client.auth.signIn({
        email: email.value,
        password: password.value,
    })
    console.log('user', user)
    console.log('error', error)
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/about')
        }
    })
})
</script>

<template>
    <div>
        <form
            class="flex flex-col items-center justify-center gap-2"
            @submit.prevent="() => (isSignUp ? signUp() : login())"
        >
            <!--
    <input v-if="isSignUp"
        type="text"
        placeholder="First Name"
        v-model="text"
        class="p-2 bg-gray-600 rounded"
        />
    -->
            <input v-model="email" type="email" placeholder="Email" class="rounded bg-gray-600 p-2" />
            <input v-model="password" type="password" placeholder="Password" class="rounded bg-gray-600 p-2" />
            <button type="submit" class="rounded bg-green-500 p-2 text-white">
                <span v-if="isSignUp"> Sign up </span>
                <span v-else> Log in </span>
            </button>
        </form>
        <button class="mt-8 w-full text-center text-sm text-slate-300 underline" @click="isSignUp = !isSignUp">
            <span v-if="isSignUp"> Have an account? Log in instead </span>
            <span v-else> Create a new account </span>
        </button>
    </div>
</template>
