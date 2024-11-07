const rowsPerPage = 3;
        let currentPage = 1;

        function displayTablePage(page) {
            const rows = document.querySelectorAll('#table-body .resdox-body-tr');
            const totalPages = Math.ceil(rows.length / rowsPerPage);
            console.log(totalPages)

            // Hide all rows initially
            rows.forEach((row, index) => {
                row.style.display = 'none';
            });

            // Show the rows for the current page
            const startIndex = (page - 1) * rowsPerPage;
            const endIndex = page * rowsPerPage;
            for (let i = startIndex; i < endIndex && i < rows.length; i++) {
                rows[i].style.display = 'table-row';
            }

            // Update button states
            document.getElementById('prev-btn').disabled = page === 1;
            document.getElementById('next-btn').disabled = page === totalPages;
        }

        document.getElementById('prev-btn').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayTablePage(currentPage);
            }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            const rows = document.querySelectorAll('#table-body .resdox-body-tr');
            const totalPages = Math.ceil(rows.length / rowsPerPage);

            if (currentPage < totalPages) {
                currentPage++;
                displayTablePage(currentPage);
            }
        });

        // Initialize table to show the first page
        displayTablePage(currentPage);