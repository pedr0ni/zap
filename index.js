const { app, BrowserWindow, session } = require('electron');

function createWindow() {
    let Window = new BrowserWindow({
        width: 1280,
        height: 720,
        show: false,
        webPreferences: {
            nodeIntegration: false
        },
        icon: __dirname + "/WhatsApp.png"
    });

    Window.setMenu(null);

    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => { 
		details.requestHeaders["User-Agent"] = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"; 
		callback({ cancel: false, requestHeaders: details.requestHeaders }); 
	});
    
    Window.loadURL("https://web.whatsapp.com", {userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'});
    
    Window.on('ready-to-show', () => {
        Window.setMenuBarVisibility(false);
        Window.show();
    });
}

app.on('ready', createWindow);
