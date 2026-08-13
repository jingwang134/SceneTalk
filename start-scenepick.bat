@echo off
title ScenePick Local Server
cd /d %~dp0
set NODE=C:\Users\15869\.workbuddy\binaries\node\versions\22.22.2\node.exe
if not exist "%NODE%" set NODE=node

netstat -ano 2>nul | findstr ":8799" | findstr "LISTENING" >nul
if %errorlevel%==0 (
  echo [ScenePick] Server is already running. Opening browser...
  start "" http://127.0.0.1:8799
  exit /b 0
)

echo.
echo  [ScenePick] Starting local server...
echo  Keep this window open while using ScenePick.
echo.
start "" http://127.0.0.1:8799
"%NODE%" server.js
pause
