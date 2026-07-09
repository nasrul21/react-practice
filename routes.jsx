import { default as PublicHolidayApp } from "./01-public-holiday-app/App";
import { default as AccordionApp } from './02-accordion/App';
import { default as TodoListApp } from './03-custom-hook-todo-list/App';

export default {
  '01-public-holiday-app': {
    title: "Day 01",
    appName: "Public Holiday App",
    component: PublicHolidayApp
  },
  '02-accordion': {
    title: "Day 02",
    appName: "Accordion",
    component: AccordionApp
  },
  '03-custom-hook-todo-list': {
    title: "Day 03",
    appName: "Custom Hook Todo List",
    component: TodoListApp
  }
}
