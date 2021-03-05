const print = (starts, header) => {
    console.log('*'.repeat(starts));
    console.log(header);
    console.log('*'.repeat(starts));
};

if (require.main == module) {
    // Running as a script
    print(process.argv[2], process.argv[3]);
} else {
    module.exports = print;
}