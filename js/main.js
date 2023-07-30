// Elements 
const notificationsHeader = document.querySelector(".notifications-header");
const notificationsNumberElement = notificationsHeader.querySelector(".notifications-header__title span:last-child");
const notificationsHeaderBtn = notificationsHeader.querySelector(".notifications-header__btn");

const notifications = document.querySelectorAll(".notification");

// Global Variables
let notificationsNumber;

// Set the number of unread notifications
function setNotificationsNumber() {

  if (typeof notificationsNumber == "undefined") { // If it's the first time the page loads
    let counter = 0;

    notifications.forEach(notification => {

      // If the notification is unread
      if (!notification.hasAttribute("data-read")) counter++;

      // Mark the notifcation as unread if it's clicked
      notification.addEventListener("click", (e) => {

        let clickedElement = e.target;
        if (notification.contains(clickedElement) && !notification.hasAttribute("data-read")) {

          notification.setAttribute("data-read", "")

          setNotificationsNumber();
        }

      });

    });

    notificationsNumber = counter

  } else if (notificationsNumber !== 0) notificationsNumber--;

  notificationsNumberElement.textContent = notificationsNumber;

}

setNotificationsNumber()


// If the "Mark all as read" button gets clicked
notificationsHeaderBtn.addEventListener("click", () => {

  // Mark all the notifications as read
  notifications.forEach(notification => {

    notification.setAttribute("data-read", "");

  });

  notificationsNumber = 0;
  setNotificationsNumber();

})