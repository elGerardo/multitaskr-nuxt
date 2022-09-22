<template>
    <b-container>
        <h2>Avatar</h2>
        <p>Avatar</p>
        <form @submit.prevent="onSubmit">
            <b-row>
                <b-col>
                    <b-form-group label="Avatar" label-for="file">
                        <b-form-file
                            id="file"
                            v-model="form.files"
                            placeholder="Enter file"
                            @change="onFileChange"
                            :multiple="true"
                        ></b-form-file>
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
            </b-row>
            <div v-for="image in images" :key="image">
                <b-img-lazy :src="image" />
            </div>

            <b-button type="submit" variant="primary">Submit</b-button>
        </form>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            form: {
                files: null,
                deal_uid: "1ba8444e-df99-4439-9d71-82301d773c3c",
            },
            images: [],
            errors: {},
        };
    },

    methods: {
        async onSubmit(event) {           
            let files = this.form.files;
            let formData = new FormData();
            for (let index = 0; index < files.length; index++) {
                console.log(files[index]);
                formData.append("image[]", files[index], files[index].name);
            }
            try {
                await this.$store.dispatch("users/create", formData);
            } catch (e) {
                console.error(e);
//                console.log(e.response.data.errors);
//                this.errors = e.response.data.errors;
            }
        },
        hasError(property) {
            if (Object.keys(this.errors).length == 0) return null;
            return !this.errors.hasOwnProperty(property);
        },
        onFileChange(event) {
            console.log(event.target.files);
            let files = event.target.files;
            for (let index = 0; index < files.length; index++) {
                this.images.push(URL.createObjectURL(files[index]));
            }
            /*Array.prototype.filter.call( files, function(file){
                //un filter.call siempre espera un return
                //y funcionara bajo una condicion, donde
                //si algun elemento no cumple dentro de array
                //lo elimina
            });*/
            //this.image = arrayFiles;
        },
    },
};
</script>
