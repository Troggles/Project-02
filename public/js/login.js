$(document).ready(() => {
  $(".login-form").on("submit", event => {
    event.preventDefault();

    const user = {
      username: $(this)
        .children("#inputUsername")
        .val()
    };

    $.ajax({
      method: "GET",
      url: `/${user.username}`
    });
  });
});
