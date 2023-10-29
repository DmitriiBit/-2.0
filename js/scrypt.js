(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-op]"),
      closeModalBtn: document.querySelector("[data-modal-clo]"),
      modal: document.querySelector("[data-mo]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();