// Функция для печати таблицы маникюра
function printManicureTable() {
    var content = document.querySelector('.manicure-price-table').outerHTML;
    var watermark = document.querySelector('.watermark').outerHTML; // Получаем HTML водяного знака
    var printWindow = window.open('', '', 'height=600,width=800');
    
    printWindow.document.write('<html><head><title>Распечатать таблицу маникюра</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('table {width: 100%; border-collapse: collapse;} th, td {border: 1px solid black; padding: 8px;}');
    printWindow.document.write('.watermark {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 5em; color: rgba(0, 0, 0, 0.1); pointer-events: none; text-align: center; z-index: 0;}'); // Стили для водяного знака
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(watermark); // Вставляем водяной знак
    printWindow.document.write(content); // Вставляем таблицу
    printWindow.document.write('</body></html>');
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

// Функция для печати таблицы педикюра
function printPedicureTable() {
    var content = document.querySelector('.pedicure-price-table').outerHTML;
    var watermark = document.querySelector('.watermark').outerHTML; // Получаем HTML водяного знака
    var printWindow = window.open('', '', 'height=600,width=800');
    
    printWindow.document.write('<html><head><title>Распечатать таблицу педикюра</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('table {width: 100%; border-collapse: collapse;} th, td {border: 1px solid black; padding: 8px;}');
    printWindow.document.write('.watermark {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 5em; color: rgba(0, 0, 0, 0.1); pointer-events: none; text-align: center; z-index: 0;}'); // Стили для водяного знака
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(watermark); // Вставляем водяной знак
    printWindow.document.write(content); // Вставляем таблицу
    printWindow.document.write('</body></html>');
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}