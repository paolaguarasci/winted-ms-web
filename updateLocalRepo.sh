#!/usr/bin/bash

# Update remote info ed eliminazione dei link ai branch remoti che non esistono piu'
git fetch --prune

# Rimozione dei branch locali che non sono piu' presenti nel repository remoto
git branch -vv | grep ': gone]'|  grep -v "\*" | awk '{ print $1; }' | xargs -r git branch -d