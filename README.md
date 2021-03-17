# devWeb

### inicializar

- git init
- git remote add origin <url>

##### faz push de uma nova branch

- git push --set-upstream origin master

##### faz push de uma branch especifica

- git push -u origin <master>

### comandos

- git add \*
- git commit -m "mensagem"
- git fetch
- git pull
- git push

##### navega na branch:

- git checkout <master>

##### deleta a branch:

- git brach -d <nome-da-branch>
- git push origin --delete <nome-da-branch>

##### faz merge da branch:

- (vai pra branch que deseja permanecer)
- git merge <nome-da-branch>

##### remove do add:

- git reset

##### remove o ultimo commit:

- git reset --soft HEAD^

##### retira as mudanças:

- git checkout nome-do-arquivo
