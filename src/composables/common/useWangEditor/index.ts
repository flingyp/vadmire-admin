import { IDomEditor, IToolbarConfig, IEditorConfig } from '@wangeditor/editor'

export const useWangEditor = () => {
  const placeholder = ref('')
  const editorInstance = shallowRef<IDomEditor>()

  const toolBarConfig = ref<Partial<IToolbarConfig>>({})
  const editorConfig = ref<Partial<IEditorConfig>>({
    placeholder: placeholder.value,
    readOnly: false,
  })

  const setEditor = (editor: IDomEditor) => {
    editorInstance.value = editor
  }

  onBeforeUnmount(() => {
    const editor = editorInstance.value
    if (!editor) return
    editor.destroy()
  })

  return {
    editorInstance,
    toolBarConfig,
    editorConfig,
    setEditor,
  }
}
