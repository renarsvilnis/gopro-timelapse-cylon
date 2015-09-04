

### Preparation
```bash
# Download and install gort
# http://gort.io/documentation/getting_started/downloads/
# Place the gort binary in /usr/local/bin/
gort arduino install
```

### Running the app
```bash
# Run the application
node index.js
```

### Uploading
```bash
# Find port
# You sohuld look for something like /dev/tty.usbmodem<port>
gort scan serial

# Upload sketch
# gort arduino upload <filename> <port>
gort arduino upload firmadata /dev/tty.usbmodem14421
```


### TODO
- [ ] Create class that wraps servo management removing redundancy code
- [ ] Add build scrips in npm package
- [ ] Fill `package.json`