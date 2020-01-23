angular.module('textTransformationModule', [])
  .factory('textservice', function(){
    //State management principle discussiob
    // const init = (text) => {
    //     text = text;
    // }
    const makeImportant = (text) => {
        text = text.trim(); // trim
        text = text.toLowerCase(); // make lowercase
        text = text.charAt(0).toUpperCase() + text.slice(1); // capitalize
        text = text + '!'; // add !
        return text;
    }
    const makeUnimportant = (text) => {
        text = text.trim(); // trim
        text = text.toLowerCase(); // make lowercase
        text = text + '.'; // add .
        return text;
    }
    
    return {
        makeImportant,
        makeUnimportant
    };
});