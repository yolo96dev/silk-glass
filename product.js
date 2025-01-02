document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Get product data from the clicked button
        const productTitle = event.target.getAttribute('data-product');
        const productDescription = event.target.getAttribute('data-description');
        const productImage = event.target.getAttribute('data-image');
        const productPrice = event.target.getAttribute('data-price')
        // Set data in the modal
        document.getElementById('modalProductTitle').textContent = productTitle;
        document.getElementById('modalProductDescription').textContent = productDescription;
        //document.getElementById('modalProductImage').src = productImage;
        document.getElementById('modalProductPrice').textContent = productPrice;

        // Display the modal
        document.getElementById('productModal').style.display = 'block';
    });
});

// Close modal when user clicks on <span> (x)
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('productModal').style.display = 'none';
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('productModal')) {
        document.getElementById('productModal').style.display = 'none';
    }
});
