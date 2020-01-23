angular.module('textTransformationModuleImproved', [])
  .factory('textserviceimproved', function(){
    //Single responsibility + reusability priciples applied
    const capitalize = function(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const addExclamationMark = function(text) {
      return text + '!';
    }

    const addPunctuation = function(text) {
      return text + '.';
    }

    const makeImportant = function(text){
        let transformed = text;
        transformed = transformed.trim();
        transformed = transformed.toLowerCase();
        transformed = capitalize(transformed);
        transformed = addExclamationMark(transformed);
        return transformed;
    };

    const makeUnimportant = function(text) {
        let transformed = text;
        transformed = transformed.trim();
        transformed = transformed.toLowerCase();
        transformed = addPunctuation(transformed);
        return transformed;
    }

    return {
        capitalize,
        addExclamationMark,
        addPunctuation, 
        makeImportant,
        makeUnimportant
    };
  });