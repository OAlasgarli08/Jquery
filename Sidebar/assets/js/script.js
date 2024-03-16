// const sidebar = document.querySelector(".sidebar");
// const sidebarClose = document.querySelector("#sidebar-close");
// const menu = document.querySelector(".menu-content");
// const menuItems = document.querySelectorAll(".submenu-item");
// const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

// sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

// menuItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     menu.classList.add("submenu-active");
//     item.classList.add("show-submenu");
//     menuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove("show-submenu");
//       }
//     });
//   });
// });

// subMenuTitles.forEach((title) => {
//   title.addEventListener("click", () => {
//     menu.classList.remove("submenu-active");
//   });
// });







$(document).ready(function() {
  let sidebar = $(".sidebar");
  let sidebarClose = $("#sidebar-close");
  let menu = $(".menu-content");
  let menuItems = $(".submenu-item");
  let subMenuTitles = $(".submenu .menu-title");

  sidebarClose.click(function() {
      sidebar.toggleClass("close");
  });

  menuItems.each(function(index) {
      $(this).click(function() {
          menu.addClass("submenu-active");
          $(this).addClass("show-submenu");
          menuItems.each(function(index2) {
              if (index !== index2) {
                  $(this).removeClass("show-submenu");
              }
          });
      });
  });

  subMenuTitles.each(function() {
      $(this).click(function() {
          menu.removeClass("submenu-active");
      });
  });
});

