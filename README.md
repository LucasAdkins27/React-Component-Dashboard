# Habit Dashboad

This project is a singular-page React dashboard made with functional components and hooks/

# Features
* Dashboard View: statistics summary, controlled add-habit form, and the dynamic habit list
* About view: Static project information, toggled with a 'useState' string
* Theme toggle: Light/dark mode using CSS variables
* Habits can be added, checked off, and deleted

#Folder Structure: 

src/
   .App.jsx
  .components/
    .Header/
    .ThemeToggle/
    .StatsSummary/
    .AddHabitForm/
    .HabitList/
    .HabitItem/
    .AboutView/

(App.jsx is the top parent, owning the entire state. Header includes the view switcher/theme toggler. ThemeToggle is a child of the Header. StatsSummary is the dashboard of stats cards. AddHabitForm is the control form. HabitList maps over habits[] -> HabitItem. HabitItem is a child of the HabitList. About view is the second tab or view)

# How to Run:
(Inside the terminal after extracting the file)
1. npm install
2. npm run dev
3. Open the printed local URL in the browser
