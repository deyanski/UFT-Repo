SystemUtil.Run "notepad"

Window("Notepad").Activate
Window("Notepad").WinEditor("Edit").Type "Test will FAIL"
wait(1)
Window("Notepad").Close
Window("Notepad").Dialog("Notepad").WinButton("Don't Save").Click

reporter.ReportEvent micPass,"test failed","test failed"
