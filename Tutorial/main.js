

const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')


let mainWindow

function createWindow(){
    mainWindow = new BrowserWindow({width: 800, height: 600})

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}
app.on('ready',() => {
    let win = new BrowserWindow({width:800, height:600})
    win.loadURL(`file://${__dirname}/index.html`)
    
})

exports.openWindow = (filename) => {
    let win = new BrowserWindow({width:800, height:600 })
    win.loadURL(`file://${__dirname}/` + filename + `.html`)
}