class FakeTrace {
  constructor() {
    this.startSection = jest.fn();
    this.endSection = jest.fn();
    this.events = [];
  }
}
const traceCall = jest.fn().mockImplementation((_, fn) => fn());

module.exports = {
  trace: new FakeTrace(),
  traceCall,
}
