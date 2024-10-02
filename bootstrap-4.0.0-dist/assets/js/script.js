
  // Sort table function
  function sortTable(columnIndex, order = 'asc') {
    const tableBody = document.getElementById('tableBody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const isAscending = tableBody.dataset.sortOrder === 'asc';

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();
      return isAscending
        ? cellA.localeCompare(cellB)
        : cellB.localeCompare(cellA);
    });

    // Toggle sort order
    tableBody.dataset.sortOrder = isAscending ? 'desc' : 'asc';

    // Append sorted rows back to the table body
    rows.forEach((row) => tableBody.appendChild(row));
  }
//form validation 
(function () {
  'use strict'
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
 
  
 