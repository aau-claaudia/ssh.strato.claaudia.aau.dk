![](https://www.claaudia.aau.dk/digitalAssets/420/420595_logo-upload.png)

Access instances created in Claaudia's strato environment though this ssh gateway:

	ssh -J <user>@ssh.strato.claaudia.aau.dk <user>@<internal-address>

## Usernames
The username provided to the gateway must be identical to the username used to login into the instance - otherwise, authentication will fail.

## ssh keys
This gateway uses [citen](https://github.com/aau-claaudia/citen); It will accept the first ssh key provided to it - If you have multiple ssh keys, you may have to specify which to use explicitly. [Learn more](https://superuser.com/questions/772660/howto-force-ssh-to-use-a-specific-private-key)
