#!/bin/bash -x
apt-get -y update
apt-get -y install git
su -c "source /vagrant/vagrant/user-config.sh" vagrant