import { Controller, RequestMapping } from "../decorator";
import AxiosHttp from "../utils/Http";
const Axios = new AxiosHttp({
  timeout: 10000,
  baseURL: "http://39.108.84.221:8888/api",
});

@Controller
class Api {
  @RequestMapping({ method: "get", url: "/topic/list" })
  async topicList(ctx) {
    const { page, size } = ctx.query;
    const data = await Axios.httpRequest(`/topic/list`, {
      page,
      size,
    });
    ctx.body = { ...data };
  }
}
export default Api;
