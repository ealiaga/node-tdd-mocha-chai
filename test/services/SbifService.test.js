const { SbifService } = require('../../services');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('SbifService', () => {
    let sandbox;

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.createSandbox();
    });
  
    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });

    describe('getBanks', () => {
    
        it('expect return all banks from Sbif API', async() => {
            const got = sinon.stub().returns(Promise.resolve({ body: 3 }));
            const sbifService = new SbifService({ got });
      
            const res = {
                send: sinon.spy()
            };

            await sbifService.getBanks({}, res);
            
            expect(res.send.calledOnce).to.be.true;
            expect(res.send.calledWith(3)).to.be.true;
        });
    });
})
