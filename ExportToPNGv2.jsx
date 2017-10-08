// ---------
// ExportToPNGv2
// export file as png into /PNG subfolder with the name of the open psd file
// transparency = false
// v_2.0
//
// Emil_Drahos
// 5. 10. 2016
// ---------

#target photoshop
app.bringToFront()

//___Declarations
var opts = new ExportOptionsSaveForWeb()
    opts.format = SaveDocumentType.PNG
    opts.PNG8 = false
    opts.quality = 100
    opts.interlaced = false
    opts.transparency = false
    opts.includeProfile = false


displayDialogs = DialogModes.NO //turn dialogs OFF

while (app.documents.length > 0) {
        var docRef = app.activeDocument
        var filename = docRef.name
        var fileexport = new File (docRef.path + "/PNG/" + filename.replace(".psd", ".png"))
        
        var pngFolder = new Folder(docRef.path + "/PNG")
        if(!pngFolder.exists) {  
            pngFolder.create()
        } 
    
        docRef.exportDocument(fileexport, ExportType.SAVEFORWEB, opts)
        $.writeln("File Exported")
        docRef.close(SaveOptions.DONOTSAVECHANGES)
    }
displayDialogs = DialogModes.ALL //turn dialogs ON
