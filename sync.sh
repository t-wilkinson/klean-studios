#!/usr/bin/env bash
rsync --delete -azhv ./client/ klean-studios:/www/klean-studios-new/client/ --exclude node_modules --exclude build --exclude .env
rsync --delete -azhv ./server/ klean-studios:/www/klean-studios-new/server/ --exclude node_modules --exclude build --exclude .env
