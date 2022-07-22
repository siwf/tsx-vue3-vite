/*
 * @Description:
 * @Date: 2022-07-16 15:52:51
 * @LastEditTime: 2022-07-22 10:27:41
 * @Author: siwenfeng
 */
import { defineComponent } from "vue";
import virturalList from "@/components/virtualList";
import "./App.scss";
import logoImg from '@/assets/test.jpeg';

export default defineComponent({
  name: "App",
  components: { virturalList },
  setup() {
    interface ListItem {
      id: number;
      value: number;
    }
    console.log(logoImg);
    const d: ListItem[] = [];
    for (let i = 0; i < 1000; i++) {
      d.push({ id: i, value: i });
    }

    const render = () => {
      return (
        <>
          <img src={logoImg} />
          <virturalList listData={d}></virturalList>
        </>
      );
    };
    return render;
  },
});
