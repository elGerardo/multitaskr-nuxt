<template>
    <b-container>
        <h2>Confirm Information</h2>
        <p>Make sure your info is complete so you can download your report.</p>
        <form @submit.prevent="onSubmit" @keyup="clearError" class="needs-validation">
            <b-row>
                <b-col>
                    <b-form-group label="First Name" label-for="name">
                        <b-form-input
                            id="name"
                            name="name"
                            v-model="form.name"
                            placeholder="Enter first name"
                            :state="hasError('name')"
                        ></b-form-input>
                        <b-form-invalid-feedback>
                            <p v-if="errors.name">
                                <span
                                    v-for="error in errors.name"
                                    :key="error.name"
                                >
                                    {{ error }}
                                </span>
                            </p>
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Last Name" label-for="last_name">
                        <b-form-input
                            id="last_name"
                            name="last_name"
                            v-model="form.last_name"
                            placeholder="Enter last name"
                            :state="hasError('last_name')"
                        ></b-form-input>
                        <b-form-invalid-feedback>
                            <p v-if="errors.last_name">
                                <span
                                    v-for="error in errors.last_name"
                                    :key="error.last_name"
                                >
                                    {{ error }}
                                </span>
                            </p>
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Email" label-for="email">
                        <b-form-input
                            id="email"
                            name="email"
                            v-model="form.email"
                            placeholder="Enter email"
                            :state="hasError('email')"
                        ></b-form-input>
                        <b-form-invalid-feedback>
                            <p v-if="errors.email">
                                <span
                                    v-for="error in errors.email"
                                    :key="error.email"
                                >
                                    {{ error }}
                                </span>
                            </p>
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Phone number" label-for="phone">
                        <b-form-input
                            id="phone"
                            name="phone"
                            v-model="form.phone"
                            placeholder="Enter phone number"
                            :state="hasError('phone')"
                        ></b-form-input>
                        <b-form-invalid-feedback>
                            <p v-if="errors.phone">
                                <span
                                    v-for="error in errors.phone"
                                    :key="error.phone"
                                >
                                    {{ error }}
                                </span>
                            </p>
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Submit</b-button>
        </form>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: null,
                last_name: null,
                email: null,
                phone: null,
                deal_uid: "1ba8444e-df99-4439-9d71-82301d773c3c",
            },
        };
    },

    methods: {
        async onSubmit(event) {
            try {
                await this.$store.dispatch("users/create", this.form);
            } catch (e) {
                console.error(e);
//                console.log(e.response.data.errors);
            }
        },
    },
};
</script>
