<template>
<div>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="navbar w-full bg-base-300">
                <div class="flex-none lg:hidden">
                    <button class="btn-ghost btn text-xl normal-case">
                <nuxt-link to="/">Selfhosting.ninja</nuxt-link>
                <Icon name="noto:ninja-light-skin-tone" />
            </button>
                </div>
                <div class="mx-2 flex-1 px-2">Navbar Title</div>
                <div class="hidden flex-none lg:block">
                    <ul class="menu menu-horizontal">
                        <!-- Navbar menu content here -->
                        <li>
                            <nuxt-link to="/vueusetest">VueUseTest</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/flagQuizV5">FlagQuizV5</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/flagQuizV6ApiParty">FlagQuizApiPartyV6</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/cloudinaryTest">cloudinaryTest</nuxt-link>
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
                        <li>
                            <nuxt-link to="/countrygame">Countrygame</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/restcountries">Restcountries</nuxt-link>
                        </li>
                        <li><nuxt-link to="/aboutPage">About</nuxt-link></li>
                    </ul>
                </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay" />
                <ul class="menu h-full w-80 bg-base-200 p-4">
                
                <li><a>Item 1</a></li>
                <li tabindex="0">
                    <details>
                        <summary>Projekter</summary>
                        <ul class="p-2">
                    <!-- Sidebar content here -->
                    <li>
                        <nuxt-link to="/vueusetest">VueUseTest</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/flagQuizV5">FlagQuizV5</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/flagQuizV6ApiParty">FlagQuizApiPartyV6</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/cloudinaryTest">cloudinaryTest</nuxt-link>
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
                    <li>
                        <nuxt-link to="/countrygame">Countrygame</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/restcountries">Restcountries</nuxt-link>
                    </li>
                    <li><nuxt-link to="/aboutPage">About</nuxt-link></li>
                </ul>
        </div>
        <div class="navbar-end">
            <ul>
                <ColorModeSwitch />
                <!-- TODO: Move login button to hamburgermenu when site is responsive -->
                <button v-if="user" class="btn" @click="doSignOut">Log out</button>
                <button v-else class="btn">
                    <nuxt-link to="/login">Log in</nuxt-link>
                </button>
            </ul>
        </div>
    </div>
</div>
</div>
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

