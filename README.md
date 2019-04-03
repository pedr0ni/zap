# zap

A simple WhatsApp wrapper for Linux

## Installation

* Clone this repository
```
$ git clone https://github.com/pedr0ni/zap.git
```

* Copy the folder dist/zap to /usr/share or /opt/
Note: if you want to copy to the /opt/ directory you'll need to change the Exec desktop entry on the next step

```
$ cd zap/
```
```
$ sudo cp -r dist/zap /usr/share
```

* Copy the desktop entry (dist/whatsapp.desktop) to your applications folder (/usr/share/applications)
```
$ sudo cp dist/whatsapp.desktop 
```

## Known Issues

* The session cookie is restoring on close
