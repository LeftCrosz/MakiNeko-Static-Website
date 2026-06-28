window.onload = function() {
    const payButton = document.getElementById('pay-button');
    payButton.addEventListener('click', () => {
        window.location.href = 'paymentdone.html';
    });
}