import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", function (value, date) {
    return moment(value).format("dddd, MMMM Do YYYY");
});
Vue.filter("differenceDate", function (value, date) {
    let a = moment(value);
    let b = moment(date);
    return a.diff(b, "days");
});
Vue.filter("toUpper", function (value, date) {
    return value.toUpperCase();
});
Vue.filter("sum", function (value, n1, n2) {
    if (n1 == "") n1 = 0;
    if (n2 == "") n2 = 0;
    let result = parseFloat(n1) + parseFloat(n2);
    return result.toFixed(3);
});
Vue.filter("fixedThree", function (value) {
    let result = parseFloat(value);
    return result.toFixed(3);
});

Vue.filter("validateProfile", function (value) {
    if (value == null) return "https://www.gravatar.com/avatar?d=mp&s=400";
});

Vue.filter("validateData", function (value, message) {
    if (value == null) return "No " + message + " To Show";
    return value;
});

Vue.filter("specialitiesFilter", function (value) {
    if (value.length == 0) return "No Data To Show";
});
