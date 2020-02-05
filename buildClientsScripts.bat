@echo off

set tscompiler="..\Tools\Typescript\3.4.0\tsc.cmd"
set uglifyTsOutput="..\Tools\Uglify-js\uglify-ts-output.bat"

cd /d "%~dp0"
set INITDIR=%~dp0

cd "ClientScripts"

set configuration=%1
if [%configuration%]==[] set configuration=Debug

set incremental=%2
if [%incremental%]==[] ( 
	echo Full rebuild
	set forceParam=--force
	del /S /Q "bin\*.js"
	del /S /Q "bin\*.js.map"
) else (
	set "forceParam="
)


setlocal EnableDelayedExpansion
echo %tscompiler%

call %tscompiler% -b tsconfig.json --verbose %forceParam%
if %errorlevel% neq 0 exit /b %errorlevel%
if NOT "%configuration%" == "Debug" ( 
	for /f "usebackq delims=|" %%f in (`dir /b tsconfig.json`) do (
		echo Minifing output of '%%f' ...
		call %uglifyTsOutput% %%f
	)
)
if NOT "%configuration%" == "Debug" ( 
    xcopy "bin\*.min.js" "..\Output\%configuration%\wwwroot\js\" /y
	xcopy "bin\*.min.js" "..\AspNetCoreSPA\wwwroot\js\" /y
) else (
	xcopy "bin\*.js" "..\Output\%configuration%\wwwroot\js\" /y
	xcopy "bin\*.js" "..\AspNetCoreSPA\wwwroot\js\" /y
)
if %errorlevel% neq 0 exit /b %errorlevel%

cd /d "%~dp0"
