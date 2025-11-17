import { Editor } from "@monaco-editor/react";
import { useRef } from "react";
import { initVimMode } from "monaco-vim";
import type * as monaco from "monaco-editor";

export default function VimEditor() {
  const statusRef = useRef<HTMLDivElement>(null);

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    initVimMode(editor, statusRef.current!);
  }

  return (
    <div>
      <Editor
        className="border border-gray-200 rounded-t-lg overflow-hidden"
        height="300px"
        defaultLanguage="javascript"
        defaultValue={`// Vim rejimi yoqildi!`}
        onMount={handleEditorDidMount}
      />
      <div
        ref={statusRef}
        className="text-sm rounded-b-lg p-2 text-white bg-[#FC4850]"
      />
    </div>
  )
}

