const fs = require('fs');
const zlib = require('zlib');
const questionData = '../config/speakx_questions.json';
const questionCompressedData = '../config/compressed_speakx_questions.json.gz';

fs.readFile(questionData, (error, data) => {
    if(error){
        console.error('Error in reading file:', error.message);
        return;
    }

    zlib.gzip(data, (error, compressedData) => {
        if(error){
            console.error('Error in compressing data:', error.message);
            return;
        }

        fs.writeFile(questionCompressedData, compressedData, (error) => {
            if(error){
                console.error('Error in writing compressed data:', error.message);
                return;
            }

            console.log('Data compressed successfully');
        });
    });
});