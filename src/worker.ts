
try {
    new SharedArrayBuffer(4);
    self.postMessage("From worker: SharedArrayBuffer available.");
}
catch (ex) {
    self.postMessage("From worker: SharedArrayBuffer not available.\n\n" + ex);
}
