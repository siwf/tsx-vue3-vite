/*
 * @Description:
 * @Date: 2022-07-21 12:08:54
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-07-22 00:09:05
 */
import {
  defineComponent,
  ref,
  computed,
  reactive,
  onMounted,
  getCurrentInstance,
  ComponentInternalInstance,
} from "vue";
const PropsType = {
  listData: {
    type: Array,
    default: [],
  },
  itemSize: {
    type: Number,
    default: 200,
  }, // 每一项的高度
};

export default defineComponent({
  name: "VirtualList",
  props: PropsType,
  setup(props) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance; // 有效

    const pageConfig = reactive({
      startOffset: 0, // 偏移量
      start: 0, // 起始索引
      end: 0, // 结束索引
      screenHeight: 0, // 可视区域高度
      scrollTop: 0, // 当前滚动条位置
    });
    const refWrap = ref<HTMLElement | null>(null);

    const visibleCount = computed(() => {
      return Math.ceil(pageConfig.screenHeight / props.itemSize);
    });

    const scrollEvent = () => {
      //当前滚动位置
      if (refWrap.value) {
        const scrollTop = refWrap.value.scrollTop;
        //此时的开始索引
        pageConfig.start = Math.floor(scrollTop / props.itemSize);
        //此时的结束索引
        pageConfig.end = pageConfig.start + visibleCount.value;
        //此时的偏移量
        pageConfig.startOffset = scrollTop - (scrollTop % props.itemSize);
      }
    };

    //列表总高度
    const listHeight = computed(() => {
      return props.listData.length * props.itemSize;
    });

    //偏移量对应的style
    const getTransform = computed(() => {
      return `translate3d(0,${pageConfig.startOffset}px,0)`;
    });
    const visibleData = () => {
      return props.listData
        .slice(
          pageConfig.start,
          Math.min(pageConfig.end, props.listData.length)
        )
        .map((v: any) => {
          return (
            <div
              class="infinite-list-item"
              key={v.id}
              style={{
                height: props.itemSize + "px",
                lineHeight: props.itemSize + "px",
              }}
            >
              {v.value}
            </div>
          );
        });
    };

    onMounted(() => {
      pageConfig.screenHeight = proxy?.$el.clientHeight;
      pageConfig.start = 0;
      pageConfig.end = pageConfig.start + visibleCount.value;
    });

    const render = () => {
      return (
        <div
          ref={refWrap}
          class="infinite-list-container"
          onScroll={scrollEvent}
        >
          <div
            class="infinite-list-phantom"
            style={{ height: listHeight.value + "px" }}
          ></div>
          <div class="infinite-list" style={{ transform: getTransform.value }}>
            {visibleData()}
          </div>
        </div>
      );
    };
    return render;
  },
});
