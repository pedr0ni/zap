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
		details.requestHeaders["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"; 
		callback({ cancel: false, requestHeaders: details.requestHeaders }); 
	});
    
    Window.loadURL("https://web.whatsapp.com", {userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'});
    
    Window.on('ready-to-show', () => {
        Window.setMenuBarVisibility(false);
        Window.show();
    });
}

app.on('ready', createWindow);
