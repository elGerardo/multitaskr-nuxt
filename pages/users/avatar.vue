<template>
    <b-container>
        <h2>Avatar</h2>
        <form @submit.prevent="onSubmit">
            <b-row>
                <b-col>
                    <b-form-group label="Upload..." label-for="file">
                        <b-form-file
                            id="file"
                            placeholder="Upload image"
                            @change="onFileChange"
                            :multiple="true"
                            accept=".jpg, .png, .webp, .jpeg"
                            drop-placeholder="Drop Image(s)"
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
            <b-card-group deck>
                <div v-for="(image, index) in images" :key="image.imageUrl">
                    <b-card
                        :img-src="image.imageUrl"
                        :title="image.files.name"
                        img-top
                        style="max-width: 200px"
                        class="mb-2"
                    >
                        <b-card-text>
                            {{ image.files.size }} bytes

                            <b-button
                                :id="`${index}_btn_open_options`"
                                @click="openOptions(index)"
                                >Remove</b-button
                            >
                            <div :id="`${index}_container_options`" hidden>
                                <b-button
                                    variant="danger"
                                    @click="removeImage(index, image.files.name)"
                                    >Yes, remove It!</b-button
                                >
                                <b-button
                                    variant="primary"
                                    @click="closeOptions(index)"
                                    >No, don't remove it</b-button
                                >
                            </div>
                        </b-card-text>
                    </b-card>
                </div>
            </b-card-group>
            <b-button
                type="submit"
                :disabled="images.length == 0"
                variant="primary"
                >Submit</b-button
            >
            <b-button
                :disabled="images.length == 0"
                @click="clearGroupImages"
                variant="secondary"
                >Clear</b-button
            >
        </form>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            form: {
                deal_uid: "1ba8444e-df99-4439-9d71-82301d773c3c",
            },
            images: [],
            errors: {},
        };
    },

    methods: {
        async onSubmit(event) {
            let files = this.images;
            let formData = new FormData();
            for (let index = 0; index < files.length; index++) {
                console.log(files[index]);
                formData.append(
                    "image[]",
                    files[index].files,
                    files[index].files.name
                );
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
            //let files = event.target.files;
            /*for (let index = 0; index < files.length; index++) {
                
            }*/

            let files = event.target.files;
            Object.keys(files).map((file) => {

                let jsonObject = {
                    imageUrl: URL.createObjectURL(files[file]),
                    files: files[file],
                };
                this.images.push(jsonObject);
            
            });
        },
        openOptions(index) {
            document.getElementById(index + "_btn_open_options").hidden = true;
            document.getElementById(
                index + "_container_options"
            ).hidden = false;
        },
        closeOptions(index) {
            document.getElementById(index + "_btn_open_options").hidden = false;
            document.getElementById(index + "_container_options").hidden = true;
        },
        removeImage(index, imageName) {
            this.thinking = false;
            this.images.splice(index, 1);
            this.$bvToast.toast(`${imageName} was removed correctly.`, {
                title: `${imageName} Removed`,
                autoHideDelay: 2500,
                appendToast: false,
            });
        },
        clearGroupImages() {
            this.images = [];
        },
    },
};
/*Array.prototype.filter.call( files, function(file){
    //un filter.call siempre espera un return
    //y funcionara bajo una condicion, donde
    //si algun elemento no cumple dentro de array
    //lo elimina
});*/
//this.image = arrayFiles;
</script>
