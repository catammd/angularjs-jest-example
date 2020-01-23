require('angular/angular.min');
require('angular-mocks');
require('./textTransformation.js');

describe('Text transformation service', function(){

  beforeEach(
    angular.mock.module('textTransformationModule')
  );

  var _textservice;

  beforeEach(inject((textservice) => {
    _textservice = textservice;
  }));

  it('Makes it capitalized, trimmed with ! at the end.', function(){
    //Arrange
    const textInput = ' sOlAr  ';
    //Act
    var actual = _textservice.makeImportant(textInput);
    //Assert
    expect(actual).toEqual('Solar!');
  });

  it('Makes it lowercase, trimmed with . at the end.', function(){
    //Arrange
    const textInput = ' sOlAr  ';
    //Act
    var actual = _textservice.makeUnimportant(textInput);
    //Assert
    expect(actual).toEqual('solar.');
  });

  it('State test fail', function(){
    //Arrange
    const textInput = ' sOlAr  ';
    //Act
    let firstCall = _textservice.makeImportant(textInput);
    let finallCall = _textservice.makeUnimportant(textInput);
    
    //Assert
    expect(finallCall).toEqual('solar.');
  });
});
