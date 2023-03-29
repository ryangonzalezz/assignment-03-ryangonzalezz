//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

const reminders = [];
const reminderList = document.querySelector(".reminder-list");
const reminderForm = document.querySelector(".add-reminder");
const reminderName = document.querySelector("#new-reminder-input");

//
// Functions
//

function addReminderItem(e) 
{
  
  e.preventDefault();
  const rName = reminderName.value;
   const rNull = rName === '';
if (rNull) 
{
     alert("Please write a reminder")
}
else 
{  
 reminders.push(rName);
  renderList(reminders, reminderList);
  reminderForm.reset();
}
}

function renderList(items, itemsList) 
{
 
  while (itemsList.firstChild) 
  {
    itemsList.removeChild(itemsList.firstChild);
  }
 
  for (let i = 0; i < items.length; i++)
  {
    const listItem = document.createElement("li");
    listItem.textContent = items[i];

    const rDelete = document.createElement('button');
    rDelete.innerHTML = "<img src='images/Trash.png' width= 25px>";
    listItem.appendChild(rDelete);

    rDelete.style.cursor = "pointer";

   if (i === items.length - 1) 
    {
      listItem.classList.add("new-item-annimate");
    }
    itemsList.appendChild(listItem);
  }
}

reminderForm.addEventListener("submit", addReminderItem);

renderList(reminders, reminderList);


