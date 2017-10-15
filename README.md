# node-red-contrib-opencv
Node-RED node for OpenCV

Image file buffer and file path are supported as input message.
Currently output is only result of face detection.

# How to Install
Only Ubuntu and Raspbian environments are supported.

(1) Install OpenCV
> sudo apt-get install libopencv-dev

(2) Install OpenCV node
> cd ~/.node-red
> npm install node-red-contrib-opencv

(Node installation function on Node-RED palette is not recommended because it's difficult to see installation progress which takes long time like this node)

(3) Run Node-RED
> node-red

