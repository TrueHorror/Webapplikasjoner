### Nytt repo: <https://github.com/new>

- echo "# testrepo" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin <https://github.com/mariuswallin/testrepo.git>
- git push -u origin master

### GIT

```javascript
// teste at git er tilgjengelig
$ git --version

// initialisere git i mappen du har koden !VIKTIG
// lager en .git mappe som holder kontroll på alt git relatert
$ git init

// ignorere filer du ikke vil at git skal tracke
$ touch .gitignore && echo "node_modules" > .gitignore

// lage en fil
$ touch main.js

// se git status og diff
$ git status
$ git diff file-name

// legge filen (eller alle filer du ser i git status) til git

$ git add file-name
$ git add .

// commite filer allerede addet

$ git commit -m "Beskrivelse"

// shortcut for add og commit filer

$ git commit -am "Beskrivelse"

// se historikk og se historikk hvor du vil få mergeconflict

$ git log
git log --merge

// lage en branch (som nevnt i første forelesning gjør vi dette for å skille ut:
// features, bugfix, hotfix, stages (master, develop)
// den nye brachen blir aktivert og tar med seg alle commits fra den branchen du var i
// tar med seg uncommited endringer inn i ny branch (fint hvis du ser at det du trodde var få endringer blir mange)

$ git checkout -b branchname

// legge til remote repository

$ git remote add origin url

// pushe endringer til ex. bitbucket (sender til origin og master branch)

$ git push origin master

// hente endringer fra ex. bitbucket

$ git pull
```

### Vanlige oppgaver

```javascript

// Andre nice to know ting jeg har lært

// Hente siste endringer fra remote, alltid lurt å starte dagen med. Må også gjøres når du trenger nye bracher andre har laget

$ git fetch

// Gå til master (eller den branchen som er siste nye)

$ git checkout master

// hente siste endringer fra denne

$ git pull

// merge en branch inn i master

$ git merge branch-navn

// hente siste nytt fra master inn i egen branch

$ git checkout din-branch
$ git merge master

// resolve eventuelle konflikter
// terminalen vil vise deg hvis konflikter oppstår og hvor det er (ser det også i VSCode)
// vscode kan fint brukes til dette

$ git add .
$ git commit merged

// gå tilbake til forrige branch

$ git checkout -

// Bruker denne når du trenger kun deler av en feature branch som andre jobber på inn i din kode
$ git cherry-pick commit-id
$ git cherry-pick commit-id1 commit-id2

// stashe endringer midlertidig hvis du må fikse noe på en annen branch (kan også lage en liste med stash men ikke vært nødvendig)

$ git stash

// hente siste stash igjen når du er tilbake for etter en fix

$ git stash pop

// undo siste commit

$ git revert -n HEAD

// !WARNING: git reset brukes til å kansellere og fjerne alle nye endringer du har gjort
$ git reset

```
