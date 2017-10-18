# node-red-contrib-opencv
Node-RED node for OpenCV

This node can detect face, eye, eyeglasses, fullbody and car from image using OpenCV.
Image file buffer and file path are supported as input message. JSON (coordinate and size of object) and image buffer (original image and red circles of objects) can be selected as output message.

# How to Install
Only Ubuntu and Raspbian environments are supported.

(1) Install OpenCV
- sudo apt-get install libopencv-dev

(2) Install OpenCV node
- cd ~/.node-red
- npm install node-red-contrib-opencv

(Node installation function on Node-RED palette is not recommended because it's difficult to see installation progress which takes long time like this node)

(3) Run Node-RED
- node-red

