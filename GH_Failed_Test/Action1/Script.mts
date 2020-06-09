SystemUtil.Run "notepad"

Window("Notepad").Activate @@ hightlight id_;_263366_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Notepad").WinEditor("Edit").Type "Test will FAIL" @@ hightlight id_;_394372_;_script infofile_;_ZIP::ssf3.xml_;_
wait(1)
Window("Notepad").Close
Window("Notepad").Dialog("Notepad").WinButton("Don't Save").Click @@ hightlight id_;_197796_;_script infofile_;_ZIP::ssf4.xml_;_

reporter.ReportEvent micFail,"test failed","test failed"

