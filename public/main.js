const btn = document.querySelector('#get-btn');
btn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://wishlist-deploy-practice.onrender.com/wish');
        const div = document.createElement('div');
        console.log(response.url);
        document.body.appendChild(div);
    } catch (err) {
        console.log(err);
    }
})