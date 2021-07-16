function pow(x, n) {
    /* Здесь будет реализация функции, пока пусто */
}



mocha.setup('bdd');
const assert = chai.assert;


//тесты

describe("pow", function() {

    it("2 возведение в 3 степень = 8", function() {
      assert.equal(8, pow(2, 3));
    });
    it("3 возведение в 3 степень = 27", function() {
        assert.equal(27, pow(3, 3));
    });
  
  });

mocha.run();