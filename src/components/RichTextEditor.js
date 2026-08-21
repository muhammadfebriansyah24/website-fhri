'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  return (
    <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white focus-within:border-brand-red/30 focus-within:ring-1 focus-within:ring-brand-red/20 transition-all duration-300">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-slate-50 border-b border-slate-100">
        <ToolBtn
          active={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
          label="B"
          className="font-bold font-mono text-[10px]"
        />
        <ToolBtn
          active={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          label="I"
          className="italic font-mono text-[10px]"
        />
        <ToolBtn
          active={editor.isActive('heading', { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          label="H2"
          className="font-black text-[9px]"
        />
        <ToolBtn
          active={editor.isActive('heading', { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          label="H3"
          className="font-black text-[9px]"
        />
        <ToolBtn
          active={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          label="• List"
          className="font-medium text-[9px]"
        />
        <ToolBtn
          active={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          label="1. List"
          className="font-medium text-[9px]"
        />
        <ToolBtn
          active={editor.isActive('blockquote')}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          label="❝ Quote"
          className="font-serif text-[9px]"
        />
      </div>

      {/* Editor area - styled for light background prose */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-[220px] text-brand-navy text-xs leading-relaxed focus:outline-none [&_.tiptap]:outline-none [&_.tiptap]:min-h-[200px] [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-5 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-5 [&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-brand-red [&_.tiptap_blockquote]:pl-4 [&_.tiptap_blockquote]:italic [&_.tiptap_h2]:text-brand-navy [&_.tiptap_h2]:text-base [&_.tiptap_h2]:font-bold [&_.tiptap_h2]:mt-4 [&_.tiptap_h2]:mb-2 [&_.tiptap_h3]:text-brand-navy [&_.tiptap_h3]:text-sm [&_.tiptap_h3]:font-bold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-1 cursor-text bg-white"
      />
    </div>
  );
}

function ToolBtn({ active, onClick, label, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${className} ${
        active 
          ? 'bg-brand-red text-white shadow-sm border border-brand-red' 
          : 'bg-white border border-slate-200/60 text-slate-500 hover:text-brand-navy hover:bg-slate-50'
      }`}
    >
      {label}
    </button>
  );
}
