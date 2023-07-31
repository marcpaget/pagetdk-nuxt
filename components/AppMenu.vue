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
                                <nuxt-link to="/vueusetest">VueUseTest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/cloudinaryTest">cloudinaryTest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/supabasetest">Supabasetest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/storagetest">Storagetest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/calculator">Calculator</nuxt-link>
                            </li>

                            <li><nuxt-link to="/weather">Weather</nuxt-link></li>
                            <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                            <li><nuxt-link to="/form">Form</nuxt-link></li>
                            <li><nuxt-link to="/text">Text</nuxt-link></li>
                        </ul>
                    </li>
                    <li>
                        <a>Games</a>
                        <ul class="p-2">
                            <li>
                                <nuxt-link to="/flagQuizV5">FlagQuizV5</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV6ApiParty">FlagQuizApiPartyV6</nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to="/flagQuizV6ApiParty">FlagQuizApiPartyV6</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/countryQuizV3">CountryQuizV3</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/countryQuizV2">CountryQuizV2</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV3">FlagQuizV3</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV2">FlagQuizV2</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV3">FlagQuizV3</nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to="/countrygame">Countrygame</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/restcountries">Restcountries</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <button class="btn-ghost btn font-permanentmarker text-xl normal-case text-kaldi">
                <nuxt-link to="/">paget.dk</nuxt-link>
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
                                <nuxt-link to="/vueusetest">VueUseTest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/cloudinaryTest">cloudinaryTest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/supabasetest">Supabasetest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/storagetest">Storagetest</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/calculator">Calculator</nuxt-link>
                            </li>

                            <li><nuxt-link to="/weather">Weather</nuxt-link></li>
                            <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                            <li><nuxt-link to="/form">Form</nuxt-link></li>
                            <li><nuxt-link to="/text">Text</nuxt-link></li>
                        </ul>
                    </details>
                </li>

                <li tabindex="0">
                    <details>
                        <summary>Games</summary>
                        <ul class="p-2">
                            <li>
                                <nuxt-link to="/flagQuizV5">FlagQuizV5</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV6ApiParty">FlagQuizApiPartyV6</nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to="/flagQuizV6ApiParty">FlagQuizApiPartyV6</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/countryQuizV3">CountryQuizV3</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/countryQuizV2">CountryQuizV2</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV3">FlagQuizV3</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV2">FlagQuizV2</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/flagQuizV3">FlagQuizV3</nuxt-link>
                            </li>

                            <li>
                                <nuxt-link to="/countrygame">Countrygame</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/restcountries">Restcountries</nuxt-link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><nuxt-link to="/aboutPage">About me</nuxt-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <span v-if="user"> Logged in as: {{ user.email }} </span>
            <ul>
                <ColorModeSwitch />
                <button v-if="user" class="btn" @click="doSignOut">Log out</button>
                <button v-else class="btn">
                    <nuxt-link to="/login">Log in</nuxt-link>
                </button>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

const doSignOut = async () => {
    await client.auth.signOut()
    router.replace('/login')
}
</script>

<style></style>
