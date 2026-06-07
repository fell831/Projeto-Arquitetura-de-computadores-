export class Pipeline {
  constructor() {
    this.fetch = null;
    this.decode = null;
    this.execute = null;
    this.writeback = null;
  }

  clear() {
    this.fetch = null;
    this.decode = null;
    this.execute = null;
    this.writeback = null;
  }
}