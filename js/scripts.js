document.addEventListener('DOMContentLoaded', function() {
    // Sipariş formunu dinle
    const orderForm = document.querySelector('form');

    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Formun varsayılan submit işlemini durdur
            const urun = document.getElementById('urun').value;
            const miktar = document.getElementById('miktar').value;

            if (miktar < 1) {
                alert('Lütfen geçerli bir miktar girin.');
            } else {
                alert(`Siparişiniz alındı: ${miktar} adet ${urun}`);
                // Burada siparişi işleme kodunu ekleyebilirsiniz.
            }
        });
    }
});

// Masa seçildiğinde
$('#tableSelect').change(function() {
    // Seçilen masa numarasını al
    var selectedTable = $(this).val();
    // localStorage'a masa numarasını kaydet
    localStorage.setItem('tableNumber', selectedTable);
});
