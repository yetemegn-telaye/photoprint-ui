#!/bin/bash
HOME=/var/www/html
LOGFOLDER=$HOME/log
LOG=$LOGFOLDER/deploy.log

/usr/bin/sudo /usr/bin/chmod 777 -R /var/www/html/

/bin/mkdir $LOGFOLDER
/usr/bin/touch $LOG
/bin/echo "$(date '+%Y-%m-%d %X'): ** Before Install Hook Started **" >> $LOG

# This will do some actions before installation

/bin/echo "$(date '+%Y-%m-%d %X'): ** Before Install Hook Completed **" >> $LOG