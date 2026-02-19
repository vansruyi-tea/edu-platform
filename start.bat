@echo off
echo 正在启动教育平台...
cd /d "C:\Users\Administrator\openclaw\edu-platform"
echo.
echo 检查依赖...
if not exist node_modules (
  echo 安装依赖...
  npm install
) else (
  echo 依赖已安装
)
echo.
echo 启动开发服务器...
npx next dev --port 3002
pause