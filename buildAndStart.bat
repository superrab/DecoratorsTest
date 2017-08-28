@echo on

echo Clean dist/compiled
del dist\compiled /F /Q

echo Building js from ts
call tsc 

echo Starting Node
node dist\compiled\main.js