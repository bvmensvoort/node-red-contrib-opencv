var cv = require('opencv');

module.exports = function(RED) {
    function OpenCVNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            cv.readImage(msg.payload, function(err, im){
                im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
                    if (!err) {
                        console.log(JSON.stringify(faces));
                        msg.payload = faces;
                        node.send(msg);
                    } else {
                        console.log("error: " + err);
                        node.error(err);
                    }
                });
            });
        });
    }
    RED.nodes.registerType("opencv", OpenCVNode);
}
