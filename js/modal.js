let modalModule = (function () {
    function showModal(title, text, imgURL) {
        let modalTitle = document.querySelector('#modal-title');
        let modalBody = document.querySelector('#modal-body');

        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';

        let titleElement = document.createElement('h5');
        titleElement.classList.add('modal-title');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        let imageElement = document.createElement('img');
        imageElement.src = imgURL;
        imageElement.classList.add('img-fluid');

        modalTitle.appendChild(titleElement);
        modalBody.appendChild(contentElement);
        modalBody.appendChild(imageElement);
        modalContainer.appendChild(modal);

        let modal = new bootstrap.Modal(
            document.querySelector('.example-modal')
        );
        modal.show();
    }

    return {
        showModal: showModal,
    };
})();
