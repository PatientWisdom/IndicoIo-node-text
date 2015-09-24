var indico = require('../..'),
  should = require('chai').should(),
  image = require('../../lib/image.js'),
  fs = require('fs'),
  path = require('path');

// Silence Warnings
var read = function (name) {
    return fs.readFileSync(path.join(__dirname, '..', name), { encoding: 'utf8' });
};
console.warn = function () {};
describe('File types', function () {
  it('PNG', function (done) {
    var filePath = path.join(__dirname, '..', 'face1.png')
    image.preprocess(filePath, 64, true, false).then(function (result) {
        result.should.be.a('string');
        done();
    });
  });

  it('JPG', function (done) {
      var filePath = path.join(__dirname, '..', 'dog.jpg')
      image.preprocess(filePath, 64, true, false).then(function (result) {
          result.should.be.a('string');
          done();
      });
  });

  it('JPG Base64', function (done) {
      image.preprocess(read("jpgbase64.txt"), 64, true, false).then(function (result) {
          result.should.be.a('string');
          done();
      });
  });

  it('PNG Base64', function (done) {
      image.preprocess(read("base64.txt"), 64, true, false).then(function (result) {
          result.should.be.a('string');
          done();
      });
  });
  it('URL JPG', function (done) {
      image.preprocess("http://www.myhoundhaven.org/images/Golden%20Retriever.jpg", 64, true, false).then(function (result) {
          result.should.be.a('string');
          done();
      });
  });
  it('URL GIF', function (done) {
      image.preprocess("http://www.dognameguide.com/images/dog.gif", 64, true, false).then(function (result) {
          result.should.be.a('string');
          done();
      });
  });
  it('URL PNG', function (done) {
      image.preprocess("http://www.butlercountyhs.org/Graphics/Dogs/ButlerHumaneSociety3.png", 64, true, false).then(function (result) {
          result.should.be.a('string');
          done();
      });
  });
});
