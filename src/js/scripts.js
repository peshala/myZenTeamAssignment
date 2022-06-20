window.addEventListener
('DOMContentLoaded', () => {
    // overlay selector 
    const overlayTask = document.querySelector('#overlay-task');
    const Uploadoverlay = document.querySelector('#overlay-uploadDocument');

    //modal open actions 
    const openTaskModal = document.querySelector('#taskItem');
    const openUploadModals = document.querySelector('#uploadNewDoc');
    
    //modal close action
    const closeModal = document.querySelector('#itemClose');
    const closeUploadModal = document.querySelector('#uploadDocClose');

    // open and close fucntions

    // open task fucntion
    const toggleTaskModal = () => {
        overlayTask.classList.toggle('flex');
        overlayTask.classList.toggle('hidden');
    }

    // opn upload modal
    const toggleUploadModal = () => {
        Uploadoverlay.classList.toggle('flex');
        Uploadoverlay.classList.toggle('hidden');
    }
    const myFunction = () => {
        console.log('asdsa');
     }

    openUploadModals.addEventListener('click',()=> {
        toggleUploadModal()
    })

    openTaskModal.addEventListener('click', () => {
        toggleTaskModal();
    })



    closeUploadModal.addEventListener('click', () => {
        toggleUploadModal()
    })
    closeModal.addEventListener('click', () => {
        toggleTaskModal()
    })


})


