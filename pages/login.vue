<template>
    <b-container>
        <h1>Login</h1>
        <form @submit.prevent="onSubmit">
            <b-form-group>
                <b-form-input 
                    id="email" 
                    placeholder="email"
                    type="email"
                    v-model="form.username"
                    :state="hasError('emails')">
                </b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    id="password"
                    placeholder="password"
                    type="password"
                    v-model="form.password"
                    :state="hasError('password')"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </form>
    </b-container>
</template>
<script>
export default {
    layout: "empty",
    data() {
        return{
            form:{
                username: null,
                password: null
            },
            errors: {}
        }
    },
    methods:{
        async onSubmit(event){
            try{
                await this.$auth.loginWith('local', { data: this.form });
            }catch(e){
                console.error(e);
            }

        },
    }
};
</script>
