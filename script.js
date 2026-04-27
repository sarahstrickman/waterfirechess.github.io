document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            buttons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    const buyBtn = document.getElementById('buy-btn');
    const paymentForm = document.getElementById('payment-form');
    const submitBtn = document.getElementById('submit-btn');
    const directionsResult = document.getElementById('directions-result');

    buyBtn.addEventListener('click', () => {
        paymentForm.classList.toggle('hidden');
    });

    submitBtn.addEventListener('click', () => {
        paymentForm.classList.add('hidden');
        buyBtn.classList.add('hidden');
        directionsResult.classList.remove('hidden');
    });
});
