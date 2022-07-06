import { Router } from "./router.js";

const router = new Router;

router.add('/', '/pages/home.html');
router.add(404, '/pages/404.html');
router.add('/about', '/pages/about.html');
router.add('/exploring', '/pages/exploring.html');
router.add('/the-universe', '/pages/the-universe.html');

router.handle();

window.route = () => router.route()
window.onpopstate = () => router.handle()
