#!/bin/bash -x
git config --global user.name bil-t
git config --global user.email bil-t@users.noreply.github.com

#donwnload and install meteor
curl https://install.meteor.com/ | sudo bash

#give appropriate permissions to user 'vagrant'
sudo chown -R 'vagrant' ~/.meteor
#setup meteor
meteor

#create an initial app
cd /vagrant
meteor create meteorapp && cd meteorapp && rm -rf .meteor && mkdir .meteor/
#give appropriate permissions to user 'vagrant'
sudo chown -R 'vagrant' /vagrant/meteorapp

#work-around the symbolic links issue
meteor create ~/meteorapp
sudo mount --bind /home/vagrant/meteorapp/.meteor/ /vagrant/meteorapp/.meteor/
echo "sudo mount --bind /home/vagrant/meteorapp/.meteor/ /vagrant/meteorapp/.meteor/" >> ~/.bashrc && source ~/.bashrc

#add/remove meteor packages
cd /vagrant/meteorapp
meteor remove insecure
meteor remove autopublish
meteor add tmeasday:publish-counts
meteor add practicalmeteor:mocha

