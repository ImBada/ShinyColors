const shell = require('shelljs')

shell.echo('fetch...')
shell.exec('git fetch origin')
shell.exec('git fetch group')
shell.echo('fetch completed')
shell.echo('branch deploy...')
shell.exec('git branch -D deploy')
shell.exec('git checkout -b deploy group/master')
shell.exec('git pull origin master')
shell.echo('branch created')
shell.echo('start fontmin...')
shell.exec('yarn font')
shell.echo('fontmin finished')
shell.exec('git branch -D master')
shell.exec('git checkout -b master origin/master')
