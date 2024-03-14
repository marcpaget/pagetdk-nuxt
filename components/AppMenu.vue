<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn-ghost btn lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="menu-sm dropdown-content menu rounded-box z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
                >
                    <li>
                        <a>Misc</a>
                        <ul class="p-2">
                            <li>
                                <NuxtLink to="/vueusetest">VueUseTest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/cloudinaryTest">cloudinaryTest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/supabasetest">Supabasetest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/storagetest">Storagetest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/calculator">Calculator</NuxtLink>
                            </li>

                            <li><NuxtLink to="/weather">Weather</NuxtLink></li>
                            <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
                            <li><NuxtLink to="/form">Form</NuxtLink></li>
                            <li><NuxtLink to="/text">Text</NuxtLink></li>
                        </ul>
                    </li>
                    <li>
                        <a>Games</a>
                        <ul class="p-2">
                            <li>
                                <NuxtLink to="/quiz">Quiz</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/countrygame">Countrygame</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/restcountries">Restcountries</NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <button class="btn-ghost btn font-permanentmarker text-xl normal-case text-kaldi">
                <NuxtLink to="/">paget.dk</NuxtLink>
                <Icon name="noto:ninja-light-skin-tone" />
            </button>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li tabindex="0">
                    <details>
                        <summary>Misc</summary>
                        <ul class="p-2">
                            <li>
                                <NuxtLink to="/vueusetest">VueUseTest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/cloudinaryTest">cloudinaryTest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/supabasetest">Supabasetest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/storagetest">Storagetest</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/calculator">Calculator</NuxtLink>
                            </li>

                            <li><NuxtLink to="/weather">Weather</NuxtLink></li>
                            <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
                            <li><NuxtLink to="/form">Form</NuxtLink></li>
                            <li><NuxtLink to="/text">Text</NuxtLink></li>
                        </ul>
                    </details>
                </li>
                <label class="cursor-pointer grid place-items-center">
                    <input
                        type="checkbox"
                        value="synthwave"
                        class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                    />
                    <svg
                        class="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                        />
                    </svg>
                    <svg
                        class="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </label>
                <li tabindex="0">
                    <details>
                        <summary>Games</summary>
                        <ul class="p-2">
                            <li>
                                <NuxtLink to="/quiz">Quiz</NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/countrygame">Countrygame</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/restcountries">Restcountries</NuxtLink>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <NuxtLink
                        class="hover:animate-jump animate-once animate-ease-in-out animate-normal animate-fill-forwards"
                        to="/aboutPage"
                        >About me</NuxtLink
                    >
                </li>
                <li>
                    <ul>
                        <span v-if="user"> Logged in as: {{ user.email }} </span>

                        <button v-if="user" class="btn" @click="doSignOut">Log out</button>
                        <button v-else class="btn">
                            <NuxtLink to="/login">Log in</NuxtLink>
                        </button>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <!-- <ColorModeSwitch /> -->
        </div>
    </div>
</template>

<!-- <script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

const doSignOut = async () => {
    await client.auth.signOut()
    router.replace('/login')
}
</script> -->
