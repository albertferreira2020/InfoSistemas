# InfoSistemas
Simples crud utilizando angular e json-server.
Para iniciar acesse o powershel do windows/linux/mac e acesse o diretório Backend, digitando o comando "npm start" o sistema irá inicializar um servidor node.js usando o framework json-server na porta 3001.
Caso houver necessidade de alterar a porta padrão do json-server basta alterar o arquivo package.js na linha:

"start": "json-server --watch veiculos.json --port 3001"

Após a inicialização do servidor podemos iniciar a interface acessando o diretório FrontEnd e executando o mesmo comando "npm start", o serviço irá utilizar a porta padrão 4200. 
Caso queira mudar a porta padrão altere o arquivo schema.json que fica alocado no diretório "FrontEnd\node_modules\@angular\cli\lib\config" dentro da tag devServer/port.

Albert Ferreira
