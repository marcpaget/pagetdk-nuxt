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
            class="flex flex-col gap-2 justify-center items-center"
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
            <input v-model="email" type="email" placeholder="Email" class="p-2 bg-gray-600 rounded" />
            <input v-model="password" type="password" placeholder="Password" class="p-2 bg-gray-600 rounded" />
            <button type="submit" class="p-2 text-white bg-green-500 rounded">
                <span v-if="isSignUp"> Sign up </span>
                <span v-else> Log in </span>
            </button>
        </form>
        <button class="w-full mt-8 text-sm text-center underline text-slate-300" @click="isSignUp = !isSignUp">
            <span v-if="isSignUp"> Have an account? Log in instead </span>
            <span v-else> Create a new account </span>
        </button>
    </div>
</template>
