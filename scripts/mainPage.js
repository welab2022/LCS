import renderLocations from "./renderContent/renderLocations.js";
import renderEquipments from "./renderContent/renderEquipments.js";
import renderTimesheets from "./renderContent/renderTimesheets.js";
import renderClasses from "./renderContent/renderClasses.js";
import renderUsers from "./renderContent/renderUsers.js";
import renderCourses from "./renderContent/renderCourses.js";
import renderKitas from "./renderContent/renderKitas.js";
import renderStudents from "./renderContent/renderStudents.js";
import renderTimetables from "./renderContent/renderTimeTables.js";
import renderEnrollments from "./renderContent/renderEnrollments.js";
import {users, locations}from "./data.js";

// Toggle the side navigation
const sidebarToggle = document.body.querySelector('#sidebarToggle');
if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
}
renderLocations(locations);
// Render Locations
document.getElementById('Locations').addEventListener('click', function(){

   renderLocations(locations);
   

})
// Render users
document.getElementById('Users').addEventListener('click', function(){

    renderUsers(users);


})
// Render Enrollments
document.getElementById('Enrollments').addEventListener('click', function(){

    renderEnrollments();


})
// Render courses
document.getElementById('Courses').addEventListener('click', function(){

    renderCourses();


})
// Render students
document.getElementById('Students').addEventListener('click', function(){

    renderStudents();


})
// Render timetable
document.getElementById('Timetables').addEventListener('click', function(){

    renderTimetables();


})
// Render kitas
document.getElementById('Kitas').addEventListener('click', function(){

    renderKitas();


})
// Render timesheet
document.getElementById('Timesheets').addEventListener('click', function(){

    renderTimesheets();


})
document.getElementById('Equipments').addEventListener('click', function(){

    renderEquipments();


})
// Render classes
document.getElementById('Classes').addEventListener('click', function(){

    renderClasses();


})






