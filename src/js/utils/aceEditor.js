import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';

export const editor = ace.edit("editor", {
    mode: "ace/mode/javascript"
});
