# Title: The Roaming Hobo

The Roamning Hobo is a website application that allows the user to 
remotely control a model car. Movement of the car would be controlled 
from the phyiscal buttons on the keyboard and also the camera mount can be controlled
via keyboard buttons. 

# Getting Started
Getting started, the Raspberry Pi can be powered up by a powerbank.
1. Turn on Power Source to boot up Raspberry Pi. 
2. SSH into the Raspberry Pi through the terminal window with the command:
    * ssh pi@raspberrypi.local, or ssh@["ip address"] if ip address is known.
3. To start node program within Raspberry Pi:
    * cd ~/Documents/projects/Capstoneproject
    * sudo node index.js


# Description

## Operation
When first landing on home page, user can have option to register and/or login. Once
user is logged-in, there's an option to "Connect" to the car on the page. Clicking 
"Connect" will bring user to an interface with feed from the Raspberry Pi Camera and 
displays of direction buttons. The buttons are un-clickable but will highlight when 
either of the Arrow Keys or WASD Keys are pressed. 

## Functionality

### Car Movement
Using the arrow keys on the keyboard:
* UP arrow drives the car foward
* DOWN arrow drives the car in reverse
* RIGHT rotates the car to the right/clockwise
* LEFT rotates the car to the left/counterclockwise

### Camera Mount
The Pi Camera is mounted and operated by two servo drivers
It's controlled by the "QWASD" keys:
* W - Moves camera UP
* S - Moves camera DOWN
* D - Pans camera to the RIGHT
* A - Pans camera to the LEFT
* Q - Resets camera postion to center/home 

# Technologies
* React.js - Build page layout and design
* RaspberryPi - Mounted on car for user control
* Node.js - control movements of remote control car and camera mount
* socket.io - Communicate between RC Car and website remotely over Wifi network
* Johnny-Five - Drive and control dc motors of the car
* Firebase - database for user's login saved


Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

# Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

# Authors
* Brandon Hernandez
* Brian Lafuente
* Khanh Vu

