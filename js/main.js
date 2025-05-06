// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded!');
    
    // Example interactive element
    const headings = document.querySelectorAll('h1, h2, h3');
    
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            this.style.color = this.style.color === 'red' ? '' : 'red';
        });
    });
});