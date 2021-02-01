import Home from "@views/Home";
import Login from "@views/Login";

type IRoute = {
  path: string;
  component: ((props: any) => JSX.Element) | React.FC<any>;
}[];

/**
 * 路由配置
 */
const routes: IRoute = [
  { path: "/home", component: Home },
  { path: "/login", component: Login },
];
export default routes;
