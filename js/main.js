var dialogs = document.querySelectorAll('.image-modal-dialog');
var modalButtons = document.querySelectorAll('.show-modal-card');

var key = "modal";

if (dialogs.length == modalButtons.length) {
    modalButtons.forEach((button, i) => {
        var dialog = dialogs[i];
    
        if (button.dataset[key] !== dialog.dataset[key]) {
            return;
        }

        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }

        button.addEventListener('click', function () {
            dialog.showModal();
          });
          
          dialog.querySelector('.close').addEventListener('click', function () {
            dialog.close();
          });
    });
}