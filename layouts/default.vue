<template>
    <div>
        <b-navbar type="dark" variant="dark" toggleable="">
            <b-container>
                <b-navbar-brand href="/">Pokemon API</b-navbar-brand>
                <div class="d-flex">
                    <b-button
                        type="dark"
                        variant="dark"
                        class="mx-4"
                        v-b-toggle.user_side_bar
                        >Notifications
                        <span
                            class="rounded-circle px-2 text-white bg-primary"
                            >{{ notifications.length }}</span
                        ></b-button
                    >
                    <b-nav-item-dropdown
                        text="Sections"
                        type="dark"
                        variant="dark"
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
                        <b-dropdown-item href="/profile"
                            >Profile</b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </div>
            </b-container>
        </b-navbar>
        <b-sidebar id="user_side_bar" backdrop-variant="dark" backdrop shadow>
            <a href="/profile">
                <b-img
                    :src="user.avatar | validateProfile"
                    center
                    rounded="circle"
                    thumbnail
                    style="width: 150px; height: 150px"
                    class="shadow-sm"
                ></b-img>
            </a>
            <div class="pl-3 mt-3">
                <h3>{{ user.full_name }}</h3>
                <p class="text-secondary">
                    {{ user.roles[0].name }} at {{ user.company }}
                </p>
            </div>
            <div class="pl-3 mt-3">
                <p
                    v-for="(notification, index) in notifications"
                    :key="notification.title"
                >
                <span class="d-flex justify-content-between ">
                    <span>
                        <b-icon icon="dot"></b-icon>
                        {{ notification.title }}</span
                    >
                    <b-icon icon="check-circle-fill" variant="success" class="h3 mr-3" @click="markAsRead(index)" ></b-icon>
                </span>
                    <span class="pl-4">{{ notification.issue }}</span>
                </p>
            </div>
        </b-sidebar>
        <nuxt />
    </div>
</template>
<script>
export default {
    data() {
        return {
            notifications: [
                { title: "Job", issue: "Notification about job" },
                { title: "Home", issue: "Notification about home" },
                { title: "Friends", issue: "Notification about friends" },
            ],
        };
    },

    methods: {
        markAsRead(index) {
            this.notifications.splice(index, 1);
        },
    },
};
</script>
