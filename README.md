## Instructions pour les TPs

## TP4 : LOGS
1. Logger en JSON
2. Créer et déployer une application LogStash
3. Activer les log drain depuis votre application vers le LogStash `scalingo -a <todo-api> log-drains-add --type elk --url https://<user>:<pwd>@<logstash-app>.osc-fr1.scalingo.io`
4. Déployer un Kibana via [cette URL](https://dashboard.scalingo.com/create/app?source=https%3A%2F%2Fgithub.com%2FScalingo%2Fkibana-scalingo)