// Importação do Ace Editor
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';

// Inicialização do Ace Editor
ace.edit("editor", {
    theme: "ace/theme/monokai",
    mode: "ace/mode/javascript"
});
