const fs = require('fs')
const csv = require('csv-parser')

const inputFile = 'input_countries.csv'
const canadaFile = 'canada.txt'
const usaFile = 'usa.txt'

// delete function of existing files if they exist
function deleteFile(fileName) {
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName)
        console.log(`File ${fileName} deleted`)
    } else {
        console.log(`File ${fileName} not found`)
    }
}

// filter and write data function
function filterAndWriteData(input, output, country) {
    const writeStream = fs.createWriteStream(output, {flags: 'w'});
    writeStream.write('country, year, population\n');

    const readStream = fs.createReadStream(input).pipe(csv())

    readStream.on('data', (row) => {
        if (row.country.toLowerCase() === country.toLowerCase()) {
            writeStream.write(`${row.country}, ${row.year}, ${row.population}\n`)
        }
    })

    readStream.on('end', () => {
        writeStream.end()
        console.log(`File ${output} created for ${country}`)
    })

    readStream.on('error', (err) => {
        console.log(`Error reading file ${input}: ${err.message}`)
    })

    writeStream.on('error', (err) => {
        console.log(`Error writing file ${output}: ${err.message}`)
    })
}

console.log('--- Start ---')

// Delete existing files
deleteFile(canadaFile)
deleteFile(usaFile)

// Filter and write data for Canada
filterAndWriteData(inputFile, canadaFile, 'Canada')

// Filter and write data for USA
filterAndWriteData(inputFile, usaFile, 'United States')

console.log('--- End ---')