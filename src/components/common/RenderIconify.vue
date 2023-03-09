<script lang="ts">
export default defineComponent({
  name: 'RenderIconify',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup(props) {
    const icon = toRef(props, 'icon')
    // return render function
    return useRenderIcon(icon.value)
  },
})
</script>
