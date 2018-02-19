const cluster = require('cluster');

cluster.on('disconnect', function(worker) {
    process.exit(1);
});

if (cluster.isMaster) {
  cluster.fork();
} else {
    console.log('Something');
}