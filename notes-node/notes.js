console.log('starting notes.js');

// if you console log module you see property 'exports' which is set to an empty object.
// we can therefore assign properties to that empty object.
module.exports.addNote = () => {
    console.log('adding note');
};