<template>
    <div>
        <b-navbar type="dark" variant="dark" toggleable="">
            <b-container>
                <b-navbar-brand to="/">Pokemon API</b-navbar-brand>
                <b-nav-item-dropdown
                    text="Sections"
                    type="light"
                    variant="faded"
                    right
                >
                    <b-dropdown-item to="/">Pokemon</b-dropdown-item>
                    <b-dropdown-item to="/abilities">Abilities</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-container>
        </b-navbar>
        <nuxt />
    </div>
</template>
