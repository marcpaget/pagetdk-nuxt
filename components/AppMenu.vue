<template>
    <nav
        class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
    >
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <button
                class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    class="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    />
                </svg>
            </button>
            <div id="navbarSupportedContent1" class="collapse navbar-collapse flex-grow items-center">
                <nuxt-link class="text-xl text-white pr-2 font-semibold" to="/">MinBlog</nuxt-link>
                <!-- Left links -->
                <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li class="nav-item p-2">
                        <nuxt-link class="nav-link text-white" to="/about">About</nuxt-link>
                    </li>
                    <li class="nav-item p-2">
                        <nuxt-link
                            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/weather"
                            >Weather</nuxt-link
                        >
                    </li>
                    <li class="nav-item p-2">
                        <nuxt-link
                            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/gallery"
                            >Gallery</nuxt-link
                        >
                    </li>
                    <li class="nav-item p-2">
                        <nuxt-link
                            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/form"
                            >Form</nuxt-link
                        >
                    </li>
                    <li class="nav-item p-2">
                        <nuxt-link
                            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/calculator"
                            >Calculator</nuxt-link
                        >
                    </li>
                    <li class="nav-item p-2">
                        <nuxt-link
                            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/supabasetest"
                            >Supabasetest</nuxt-link
                        >
                    </li>
                    <li class="nav-item p-2">
                        <nuxt-link
                            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                            to="/storagetest"
                            >Storagetest</nuxt-link
                        >
                    </li>
                </ul>
                <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->
            <!-- Right elements -->
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
