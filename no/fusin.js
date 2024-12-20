const fs = require('fs');

const filename = 'data.txt';
const initialOffset = 100; // Example offset where you want to start writing

// Open the file with a file descriptor
fs.open(filename, 'r+', (err, fd) => {
    if (err) throw err;

    // Move the write cursor to the initial offset
    fs.ftruncate(fd, initialOffset, (err) => {
        if (err) throw err;

        // Write new data starting from initialOffset
        const data = 'New data to append\n';
        fs.write(fd, data, 0, data.length, initialOffset, (err) => {
            if (err) throw err;
            console.log('Data appended successfully');
            
            // Close the file descriptor
            fs.close(fd, (err) => {
                if (err) throw err;
                console.log('File closed successfully');
            });
        });
    });
});
