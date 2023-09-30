import { defineComponent } from 'vue'
import TextExpander from '../packages/index'

export default defineComponent({
  name: 'App',
  setup() {
  },
  render() {
    return (
      <div style='width:200px;line-height:20px;'>
        <TextExpander
          content='22asdfasdfdasfsafasdfasfasfasdfdsafdsafasfads22asdfasdfdasfsafasdfasfasfasdfdsafdsafasfads22asdfasdfdasfsafasdfasfasfasdfdsafdsafasfads22asdfasdfdasfsafasdfasfasfasdfdsafdsafasfads22asdfasdfdasfsafasdfasfasfasdfdsafdsafasfads' />
      </div>
    )
  }
})
