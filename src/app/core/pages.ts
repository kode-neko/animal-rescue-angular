import { Page } from "./model";

const pages: {[name: string]: Page} = {
  home : {
    name: 'home',
    url: '/',
  },
  create: {
    name: 'create',
    url: '/create',
  },
  edit: {
    name: 'edit',
    url: '/create',
  }
}

export {
  pages
}