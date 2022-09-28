<template>
    <b-container class="mb-5">
        <b-overlay class="pt-5">
            <b-card
                bg-variant="dark"
                text-variant="white"
                class="position-absolute w-100 h-100"
            ></b-card>
        </b-overlay>
        <b-row class="mt-3 px-3">
            <b-col
                cols="3"
                class="d-flex align-items-center justify-content-center"
            >
                <b-img
                    v-bind="custom"
                    :src="user.avatar | validateProfile"
                    center
                    rounded="circle"
                    thumbnail
                    class="shadow-sm"
                ></b-img>
            </b-col>
            <b-col
                cols="4"
                class="d-flex align-items-center justify-content-start"
            >
                <div>
                    <h3 class="align-middle">{{ user.full_name }}</h3>
                    <p class="text-secondary">
                        {{ user.roles[0].name }} at {{ user.company }}
                    </p>
                    <p class="d-flex align-items-center rounded text-secondary" style="background-color:#dcddde"><b-icon class="mx-2" icon="geo-alt-fill"></b-icon><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></p>
                </div>
            </b-col>
            <b-col
                cols="5"
                class="d-flex align-items-center justify-content-end"
            >
                <div
                    v-for="social in data.socials"
                    :key="social.icon"
                    class="px-2"
                >
                    <a href="#">
                        <b-icon
                            class="h1 p-2 rounded-circle shadow-sm text-dark"
                            :icon="social.icon"
                        ></b-icon>
                    </a>
                </div>
            </b-col>
        </b-row>
        <div class="px-4">
            <hr />
            <p>
                <b-icon icon="telephone-fill" class="mr-2"></b-icon
                >{{ user.phone | validateData("Phone") }}
            </p>
            <p>
                <b-icon icon="envelope-fill" class="mr-2"></b-icon
                >{{ user.email | validateData("Email") }}
            </p>
            <p>
                <b-icon icon="dot" class="mr-2"></b-icon
                >{{ user.birth_date | validateData("Birth Date") }}
            </p>
            <p>
                <b-icon icon="dot" class="mr-2"></b-icon
                >{{ user.interests | validateData("Interest") }}
            </p>
            <b-tabs content-class="mt-3">
                <b-tab title="Apps">
                    <p
                        class="mx-2"
                        v-for="aplication in user.applications"
                        :key="aplication.name"
                    >
                        <b-icon icon="dot"></b-icon>{{ aplication.name }}
                        <span>
                            <br />
                            <p class="ml-5">
                                {{
                                    aplication.description
                                        | validateData("Description")
                                }}
                            </p>
                        </span>
                    </p>

                    <span>{{ user.applications | specialitiesFilter }}</span>
                </b-tab>
                <b-tab title="Specialities"
                    ><p
                        v-for="speciality in user.specialities"
                        :key="speciality.name"
                    ></p>
                    <span>{{ user.specialities | specialitiesFilter }}</span>
                </b-tab>
                <b-tab title="Languages">
                    <div
                        v-for="language in data.languages"
                        :key="language.name"
                    >
                        <p class="m-0">
                            <b-icon icon="dot"></b-icon> {{ language.name }}
                        </p>
                        <b-progress class="mb-4" :max="100" show-value>
                            <b-progress-bar
                                :value="language.percent"
                            ></b-progress-bar>
                        </b-progress>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </b-container>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            custom: { width: 250, height: 250 },
            data: {
                socials: [
                    { icon: "facebook", color: "blue" },
                    { icon: "twitter", color: "blue" },
                    { icon: "instagram", color: "yellow" },
                ],
                languages: [
                    { name: "Spanish", level: "C1", percent: "90" },
                    { name: "English", level: "C1", percent: "90" },
                    { name: "French", level: "B1", percent: "65" },
                ],
            },
        };
    },
};
</script>
