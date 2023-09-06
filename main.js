const closeButtons = document.querySelectorAll(".modal .close-modal");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  });
});
// withdraw
const modal_withdraw = document.getElementById("withdraw-modal");
const open_withdraw = document.querySelector(".open-withdraw");
const submit_withdraw = document.getElementById("withdraw");
assignOpenModal(modal_withdraw, open_withdraw);
assignCloseModal(modal_withdraw, submit_withdraw);

// unlock
const modal_unlock = document.getElementById("unlock-modal");
const open_unlock = document.querySelector(".open-unlock");
const submit_unlock = document.getElementById("unlock");
const peview_unlock = document.querySelector(".unlock");
const file_unlock = document.querySelector("#image");
const label_unlock = document.querySelector(".choose");
assignOpenModal(modal_unlock, open_unlock);
assignCloseModal(modal_unlock, submit_unlock);
file_unlock.addEventListener("input", handleFileInput);

// lock
const modal_lock = document.getElementById("lock-modal");
const open_lock = document.querySelector(".open-lock");
const submit_lock = document.getElementById("lock");
const peview_lock = document.querySelector(".lock");
assignOpenModal(modal_lock, open_lock);
assignCloseModal(modal_lock, submit_lock);

// delete
const modal_delete = document.getElementById("delete-modal");
const open_delete = document.querySelector(".open-delete");
const submit_delete = document.getElementById("delete");
const peview_delete = document.querySelector(".delete");
assignOpenModal(modal_delete, open_delete);
assignCloseModal(modal_delete, submit_delete);

function assignOpenModal(modal, opener) {
  opener.addEventListener("click", () => {
    modal.style.display = "grid";
  });
}
function assignCloseModal(modal, closer) {
  closer.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
function handleFileInput(event) {
  if (event.target.files.length > 0) {
    const selectedImage = event.target.files[0];
    const imageURL = URL.createObjectURL(selectedImage);
    peview_unlock.src = imageURL;
    label_unlock.textContent = "Upload again";
  }
}
