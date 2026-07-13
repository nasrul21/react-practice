import { default as PublicHolidayApp } from "./01-public-holiday-app/App";
import { default as AccordionApp } from './02-accordion/App';
import { default as TodoListApp } from './03-custom-hook-todo-list/App';
import { default as MemoryGame } from './04-memory-game/App';
import { default as TopArticlesHackerNews } from './05-top-articles-hacker-news/App';
import { default as DragAndDropTodoList } from './08-09-drag-and-drop-todo-list/App';

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
  },
  '04-memory-game': {
    title: "Day 04",
    appName: "Memory Game",
    component: MemoryGame
  },
  '05-top-articles-hacker-news': {
    title: "Day 05",
    appName: "Top 10 Articles Hacker News",
    component: TopArticlesHackerNews
  },
  '08-09-drag-and-drop-todo-list': {
    title: "Day 08-09",
    appName: "Drag and Drop Todo List",
    component: DragAndDropTodoList
  }
}
