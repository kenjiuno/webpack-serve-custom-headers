const worker = new Worker("worker.js");
worker.postMessage("run");
worker.onmessage = (e) => {
    alert(e.data);
}
