import { expect } from 'chai';
import Foo from '../src/javascript/Foo';

describe('Foo', () => {
  let subject;

  beforeEach(() => {
    subject = new Foo('hello');
  });

  it('has a name', done => {
    expect(subject.name).to.equal('hello');
    done();
  });
});
