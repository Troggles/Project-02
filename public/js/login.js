$(document).ready(() => {
  $(".login-form").on("submit", event => {
    event.preventDefault();

    const saveUser = $("#saveUser").prop("checked");
    const username = $("#inputUsername").val();

    console.log(username);

    $.ajax({
      method: "GET",
      url: `/?saveUser=${saveUser.toString()}`
    });
  });
});
