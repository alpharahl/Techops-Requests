import VueRouter from 'vue-router';
import Home from "@/views/Home";
import MyRequests from "@/views/MyRequests";
import Admin from "@/components/Admin";
import ReviewRequests from "@/components/ReviewRequests";
import Request from '@/views/Request';

const routes = [
  {
    path: '/my_requests',
    component: MyRequests,
    name: 'myRequests'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'admin'
  },
  {
    path: '/requests/:id',
    name: 'requests',
    component: Request
  },
  {
    path: '/review_requests',
    component: ReviewRequests,
    name: 'reviewRequests'
  },
  {
    path: '/',
    component: Home
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
