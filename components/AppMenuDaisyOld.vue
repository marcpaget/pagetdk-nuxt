<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
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
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li><nuxt-link>Item 1</nuxt-link></li>
                    <li tabindex="0">
                        <nuxt-link class="justify-between">
                            Parent
                            <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </nuxt-link>
                        <ul class="p-2">
                            <li><nuxt-link>Submenu 1</nuxt-link></li>
                            <li><nuxt-link>Submenu 2</nuxt-link></li>
                        </ul>
                    </li>
                    <li><nuxt-link>Item 3</nuxt-link></li>
                </ul>
            </div>
            <Icon name="noto:ninja-light-skin-tone" />
            <nuxt-link class="btn btn-ghost normal-case text-xl" to="/">Selfhosting.ninja</nuxt-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal primary-focus p-0">
                <li><nuxt-link>Item 1</nuxt-link></li>
                <li tabindex="0">
                    <nuxt-link>
                        Parent
                        <svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </nuxt-link>
                    <ul class="p-2">
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
                    </ul>
                </li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <nuxt-link class="btn">Get started</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
