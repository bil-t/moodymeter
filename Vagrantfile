Vagrant.configure(2) do |config|

  config.vm.provider "virtualbox" do |v|
    v.memory = "2048"
	#v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
	
  end
  
  config.vm.box = "ubuntu/trusty64"
  config.ssh.port = 3333
  config.ssh.forward_agent = true
  config.ssh.forward_x11 = true
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 22, host: 2222, id: "ssh", disabled: true
  config.vm.network :forwarded_port, guest: 22, host: 3333, auto_correct: true
  config.vm.provision "shell", path: "vagrant/provision.sh"
end
