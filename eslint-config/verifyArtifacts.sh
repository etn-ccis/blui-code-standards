#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color


echo "Checking ESlint Config Required Files"
echo -ne "  readme:  "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./license.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index: "
if [ ! -f ./index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  ts: "
if [ ! -f ./ts.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  tsx: "
if [ ! -f ./tsx.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  pxb-rules: "
if [ ! -f ./pxb-rules.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
