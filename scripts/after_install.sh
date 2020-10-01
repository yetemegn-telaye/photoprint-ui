#!/bin/bash
HOME=/var/www/html
LOG=$HOME/log/deploy.log

/bin/echo "$(date '+%Y-%m-%d'): ** After Install Hook Started **" >> $LOG
/bin/echo "$(date '+%Y-%m-%d'): ** changing owner and group of application ...  **" >> $LOG

#verify that app dir has correct owner/group
/usr/bin/sudo /bin/chown -R ec2-user:ec2-user $HOME

echo -e "Done" >> $LOG

/bin/echo  "$(date '+%Y-%m-%d %X'): ** After Install Hook Completed **" >> $LOG