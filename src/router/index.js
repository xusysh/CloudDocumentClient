import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login/Login";
import User from "@/components/User/User";
import DocumentManagement from "@/components/User/DocumentManagement/DocumentManagement";
import NoteManagement from "@/components/User/NoteManagement/NoteManagement";
import UserSetting from "@/components/User/UserSetting/UserSetting";
import OnlineSheet from "@/components/User/OnlineSheet/OnlineSheet";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/user",
      name: "User",
      redirect: "/user/document-management",
      component: User,
      children: [
        {
          path: "document-management",
          name: "DocumentManagement",
          component: DocumentManagement
        },
        {
          path: "note-management",
          name: "NoteManagement",
          component: NoteManagement
        },
        {
          path: "user-setting",
          name: "UserSetting",
          component: UserSetting
        },
        {
          path: "online-sheet",
          name: "OnlineSheet",
          component: OnlineSheet
        }
      ]
    }
  ]
});
