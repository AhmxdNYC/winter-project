const addCardClickEvent = () => {
    const layoutDiv = document.querySelector('.layout-flex');

    layoutDiv.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        
        if (card) {
            console.log("Card clicked: ", card);
            const url = card.dataset.url;
            if (url) {
                window.location.href = url;
            }
        }
    });
};

// Export the function if using modules
export { addCardClickEvent };