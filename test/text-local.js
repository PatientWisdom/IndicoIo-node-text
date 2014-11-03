var indico = require('..').local;
var should = require('chai').should();

describe('Text', function() {
  describe('political', function() {
    it('should get the right response format', function(done) {
      indico.political("Guns don't kill people, people kill people.", function(err, res) {
      if (err) {
        done(err);
        return;
      }

      Object.keys(res).should.have.length(4);
      done();
      });  
    });
  });
  
  describe('posneg', function() {
    it('should get the right response format', function(done) {
      indico.sentiment('Really enjoyed the movie.', function(err, res) {
      if (err) {
        done(err);
        return;
      }
  
      res.should.be > 0.5
      done();
      });
    });
  });

  describe('language', function() {
    it('should get the right response format', function(done) {
      indico.language('Quis custodiet ipsos custodes', function(err, res) {
        if (err) {
          done(err);
          return;
        }

        // number of languages
        Object.keys(res).should.have.length(33)
        done();
      });
    });
  });

  describe('documentclassification', function() {
    it('should get the right response format', function(done) {
      indico.documentclassification('Really enjoyed the movie.', function(err, res) {
        if (err) {
          done(err);
          return;
        }

        // number of categories
        Object.keys(res).should.have.length(4)
        done();
      });
    });
  });

  describe('ner', function() {
    it('should get the right response format', function(done) {
      indico.ner('On Monday, president Barack Obama plans to ...', function(err, res) {
        if (err) {
          done(err);
          return;
        }

        // number of named entities
        Object.keys(res).should.have.length(1)
        done();
      });
    });
  });
});