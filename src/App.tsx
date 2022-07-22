/*
 * @Description:
 * @Date: 2022-07-16 15:52:51
 * @LastEditTime: 2022-07-22 09:30:04
 * @Author: siwenfeng
 */
import { defineComponent } from "vue";
import virturalList from "@/components/virtualList";
import "./App.scss";

export default defineComponent({
  name: "App",
  components: { virturalList },
  setup() {
    interface ListItem {
      id: number;
      value: number;
    }
    const d: ListItem[] = [];
    for (let i = 0; i < 1000; i++) {
      d.push({ id: i, value: i });
    }

    const render = () => {
      return (
        <>
          <virturalList listData={d}></virturalList>
        </>
      );
    };
    return render;
  },
});
