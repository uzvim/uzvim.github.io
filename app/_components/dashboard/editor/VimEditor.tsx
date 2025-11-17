"use client";

import dynamic from "next/dynamic";

const VimEditorInner = dynamic(() => import("./VimEditorInner"), {
  ssr: false,
});

export default function VimEditor() {
  return <VimEditorInner />;
}
