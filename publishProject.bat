@echo off
set configuration=%1
set projectName=%2

tasklist /FI "IMAGENAME eq w3wp.exe" 2>NUL | find /I /N "w3wp.exe">NUL
if "%ERRORLEVEL%"=="0" 	taskkill /IM w3wp.exe /F

dotnet publish %projectName%.csproj -c %configuration% -o "..\Output\%configuration%" --no-build