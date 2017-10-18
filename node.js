var cv = require('opencv');

module.exports = function(RED) {
    function OpenCVNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.status({fill: "blue", shape: "dot", text: "Analyzing"});
            cv.readImage(msg.payload, function(err, im){
                var classifier = null;
                if (config.detect === "FACE_CASCADE") {
                    classifier = cv.FACE_CASCADE;
                } else if (config.detect === "EYE_CASCADE") {
                    classifier = cv.EYE_CASCADE;
                } else if (config.detect === "EYEGLASSES_CASCADE") {
                    classifier = cv.EYEGLASSES_CASCADE;
                } else if (config.detect === "FULLBODY_CASCADE") {
                    classifier = cv.FULLBODY_CASCADE;
                } else if (config.detect === "CAR_SIDE_CASCADE") {
                    classifier = cv.CAR_SIDE_CASCADE;
                }
                im.detectObject(classifier, {}, function(err, faces){
                    if (!err) {
                        if (config.output === "json") {
                            msg.payload = faces;
                            node.send(msg);
                            node.status({});
                        } else if (config.output === "buffer") {
                            for (var i=0;i<faces.length; i++){
                                var x = faces[i]
                                im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
                            }
                            msg.payload = im.toBuffer();
                            node.send(msg);
                            node.status({});
                        } else {
                            node.error("Unsupported output: " + config.output);
                            node.status({fill: "red", shape: "ring", text: "Error"});
                        }
                    } else {
                        node.error(err);
                        node.status({fill: "red", shape: "ring", text: "Error"});
                    }
                });
            });
        });
    }
    RED.nodes.registerType("opencv", OpenCVNode);
}
