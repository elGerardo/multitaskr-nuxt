export default function ({ $axios, store }) {
    /*$axios.onRequest((config) => {
        console.log("Making request to " + config.url);
    });*/
    $axios.onError((error) => {
        const code = parseInt(error.response && error.response.status);
        if (code === 422) {
            store.commit("errors", error.response.data.errors);
        }
    });

    $axios.onRequest((config) => {
        store.commit("errors", {});
    });
}
