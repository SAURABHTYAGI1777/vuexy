
// Sidebar Active Item Highlight
const sidebarItems = document.querySelectorAll('.sidebar ul li');

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Search Box Placeholder Animation
const searchBox = document.querySelector('header input[type="text"]');

searchBox.addEventListener('focus', () => {
    searchBox.placeholder = 'Type to search...';
});

searchBox.addEventListener('blur', () => {
    searchBox.placeholder = 'Search (Ctrl+/)';
});

// Simulate Data Update in Earnings Report
setInterval(() => {
    const earningValue = document.querySelector('.earning-reports p');
    const randomIncrease = (Math.random() * 10).toFixed(2);
    earningValue.innerHTML = `$${(468 + parseFloat(randomIncrease)).toFixed(2)} <span class="positive">+${randomIncrease}%</span>`;
}, 5000);
