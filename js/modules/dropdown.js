const dropDown = document.getElementById('dropdown-menu');
const contextMenu = document.getElementById('context-menu');
const closeButton = document.getElementById('close-button');

const ConfigureDropdown = () => {
    if(dropDown){
        dropDown.addEventListener('click',() => {
            contextMenu.classList.toggle('show');
        });

        closeButton.addEventListener('click', () => {
            contextMenu.classList.toggle('show');
        })
    }
}

export default ConfigureDropdown;