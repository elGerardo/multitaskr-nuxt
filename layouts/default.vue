<template>
    <div>
        <b-navbar type="dark" variant="dark" toggleable="">
            <b-container>
                <b-navbar-brand href="/">Pokemon API</b-navbar-brand>
                <p>{{ user.email }}</p>
                <b-nav-item-dropdown
                    text="Sections"
                    type="light"
                    variant="faded"
                    right
                >
                    <b-dropdown-item href="/">Pokemon</b-dropdown-item>
                    <b-dropdown-item href="/abilities"
                        >Abilities</b-dropdown-item
                    >
                    <b-dropdown-item href="/evolutions"
                        >Evolutions</b-dropdown-item
                    >
                    <b-dropdown-item href="/locations"
                        >Locations</b-dropdown-item
                    >
                    <b-dropdown-item href="/users/create"
                        >Create User</b-dropdown-item
                    >
                    <b-dropdown-item href="/users/avatar"
                        >Avatar</b-dropdown-item
                    >
                </b-nav-item-dropdown>
            </b-container>
        </b-navbar>
        <nuxt />
    </div>
</template>
