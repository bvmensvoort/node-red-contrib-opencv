# node-red-contrib-opencv
Node-RED node for OpenCV

This node can detect face, eye, eyeglasses, full body and car from image using OpenCV.
Image file buffer and file path are supported as input message. JSON (coordinates and size of object) and image buffer (original image and red circles of objects) can be selected as output message.

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

# Creating sample flow

## Flow
file inject node in [node-red-contrib-browser-utils](https://flows.nodered.org/node/node-red-contrib-browser-utils) is useful to test OpenCV node. The simplest flow contains file inject node, OpenCV node and debug node as follow. 

![flow.png](https://raw.githubusercontent.com/zuhito/node-red-contrib-opencv/master/flow.png)

## Node property
You can select a detector and output method on the node property. 

![property.png](https://raw.githubusercontent.com/zuhito/node-red-contrib-opencv/master/property.png)

## Run the flow
After clicking the button of file inject node, you can upload image file and OpenCV node will analyze it. Finally debug tab show the coordinate and size of object. If you select "Image buffer" as output format in the OpenCV node, output image will have red circles of objects as follows.

![lenna.jpg](https://raw.githubusercontent.com/zuhito/node-red-contrib-opencv/master/lenna.jpg)

## Flow data
``
[{"id":"49745f27.e1749","type":"opencv","z":"545d41f7.53ce6","detect":"FACE_CASCADE","output":"json","name":"","x":280,"y":140,"wires":[["6115b477.0fd6cc"]]},{"id":"a4b8e8cd.b0e698","type":"fileinject","z":"545d41f7.53ce6","name":"","x":220,"y":80,"wires":[["49745f27.e1749"]]},{"id":"6115b477.0fd6cc","type":"debug","z":"545d41f7.53ce6","name":"","active":true,"console":"false","complete":"false","x":370,"y":200,"wires":[]}]
``
