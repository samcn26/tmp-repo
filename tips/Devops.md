## git
### fbrantch

- get remote branch e.g github

```
git fetch
```

- show all branch

```
git branch --all
```

- switch branch

```
git checkout <branch name>
```

### how to make a local git repo

- [reference](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)

```
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
mkdir ~/repo.git
cd ~/repo.git
git init --bare
// output <git address>

mkdir ~/myrepo
cd ~/myrepo
git init
git add .
git commit -m 'Initial commit'

git remote add origin  ssh://<user>@<ip>:<git address>

git push origin master
```

### checkout

````
git checkout master or <branch>
```


### branch

```
git checkout -b test
git add . && git commit -m ''
git push origin test
```

- show branch

```
git show-branch -a
or
git branch -a
```

- delete branch

```
git branch -d test
git push origin --delete test
```

## elk

### import data

```
curl -H "Content-Type: application/json" -XPOST "localhost:9200/shakespeare/_bulk?pretty&refresh" --data-binary "@shakespeare.json"
```

## docker

### docker-compose update image

```
docker-compose up --force-recreate --build
docker image prune -f
```

## ssh
### copy key

```
ssh-copy-id -i ~/.ssh/tatu-key-ecdsa user@host
```

### ssh without pwd

```
# in the remote machine
mkdir ~/.ssh
chmod 700 .ssh

touch authorized_keys
chmod 640 authorized_keys

# or allow ssh from host
sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config


echo <your local id_rsa.pub> > authorized_keys


# in the local ~/.ssh/config
e.g
Host "bigdata-dev"
  Hostname 127.0.0.1
  Port 2222
  user maria_dev

ssh bigdata-dev
```

### add multiple ssh to git hub

```
ssh-keygen -t rsa -f ~/.ssh/worker1_rsa -C "<email>"

->
vi ~/.ssh/config

Host git-worker1
  HostName github.com
  User git
  IdentityFile ~/.ssh/worker1_rsa
Host git-worker2
  HostName github.com
  User git
  IdentityFile ~/.ssh/worker2_rsa

# list keys
ssh-add -l

# delete cache keys
ssh-add -D

ssh-add worker1_rsa
ssh-add worker2_rsa

# add repository or clone

git remote add  origin \
git@github.com:<github account>/<project>

git push origin master
```

## setup

### make python env

```
python3 -m venv my_env
source my_env/bin/activate

deactivate
```