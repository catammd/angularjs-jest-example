require('angular/angular.min');
require('angular-mocks');
require('./textTransformationImproved.js');

describe('Text transformation service - improved', function(){

  beforeEach(
    angular.mock.module('textTransformationModuleImproved')
  );

  var _textserviceImproved;

  beforeEach(inject((textserviceimproved) => {
    _textserviceImproved = textserviceimproved;
  }));

  describe('test atomic functions', function() {
      it('capitalize(text) turns first character to Capital', function(){
        var actual = _textserviceImproved.capitalize('sOlAr');
        expect(actual).toEqual('SOlAr');
      });
      it('addExclamationMark(text) adds !', function(){
        var actual = _textserviceImproved.addExclamationMark('sOlAr');
        expect(actual).toEqual('sOlAr!');
      });
      it('addPunctuation(text) adds .', function(){
        var actual = _textserviceImproved.addPunctuation('sOlAr');
        expect(actual).toEqual('sOlAr.');
      });
  });
  describe('test composed functions', function() {
    it('Makes it capitalized, trimmed with ! at the end.', function(){
      var actual = _textserviceImproved.makeImportant(' sOlAr  ');
      expect(actual).toEqual('Solar!');
    });

    it('Makes it lowercase, trimmed with . at the end.', function(){
      var actual = _textserviceImproved.makeUnimportant(' sOlAr  ');
      expect(actual).toEqual('solar.');
    });
  });
  describe('dummy test', function(){
    it('should pass', function(){
      expect(true).toEqual(true);
    })
  })
});
