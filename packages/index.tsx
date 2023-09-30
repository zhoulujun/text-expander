import { defineComponent, nextTick, onMounted, ref } from 'vue'
import './index.scss'
import { EditLine } from 'bkui-vue/lib/icon'

export default defineComponent({
  name: 'TextExpander',
  props: {
    emptyText: {
      type: String,
      default: '--'
    },
    line: {
      type: Number,
      default: 3
    },
    lineHeight: Number,
    content: String
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const boxRef = ref<HTMLElement>(null)
    const icon = slots.icon ? slots.icon() : (
      <EditLine class='multi-text-over-icon' onClick={() => emit('click')} />
    )
    const isOverflow = ref(false)
    onMounted(() => {
      nextTick(() => {
        const { clientHeight, scrollHeight } = boxRef.value
        isOverflow.value = scrollHeight > clientHeight
      })
    })
    return () => (
      <div class='multi-text-over' ref={boxRef} style={{ '-webkit-line-clamp': props.line }}>
        <span title={isOverflow.value ? props.content : ''}>{props.content || '--'}</span>
        {isOverflow.value ? (<div class='multi-text-over-more'>...{icon}</div>) : (
          <span>{icon}</span>)}
      </div>
    )
  }
})
