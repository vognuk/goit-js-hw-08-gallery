(() => {
    const refs = {
      parent: document.querySelector('.js-gallery'),
      closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
      modal: document.querySelector('[data-action="data-modal"]'),
      closeByClickOnOverlay: document.querySelector('.lightbox__overlay'),
    };
  
    //close modal by modal button
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click',  clearSrc);

    refs.parent.addEventListener('click', toggleModal);

    //close modal by click on overlay
    refs.closeByClickOnOverlay.addEventListener('click', toggleModal);
    refs.closeByClickOnOverlay.addEventListener('click', clearSrc);

    //close modal by ESC
    window.addEventListener("keydown", event => {
      if (event.keyCode === 27) {
        toggleModal();
        clearSrc ();
      }
    });

    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }

    //Set clean src and alt for image in modal
    function clearSrc () {
      const clearImageInModalSrc = document.querySelector('.lightbox__image');
      clearImageInModalSrc.src = ' ';
      clearImageInModalSrc.alt = ' ';
    }

  })();
