$("#dark-switch").click(() => {
    $("body").toggleClass("dark");
});
$("#survey-form").submit(e => {
    alert("Thank you! :)");
    return false;
});
