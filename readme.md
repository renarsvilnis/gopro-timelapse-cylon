

### Preparation
```bash
# Download and install gort
# http://gort.io/documentation/getting_started/downloads/
# Place the gort binary in /usr/local/bin/
gort arduino install
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

