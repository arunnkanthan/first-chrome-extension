// need a 'login' request
// need a 'add job' request
// need a 'logot' request
// need a settings button that takes them directly to the app to their settings page

// async function fetchData() {
//     const data = [
//         {
//             date: 0,
//             areaName: 1,
//             latestBy: 2,
//             deathNew: 4
//         }
//     ]
    
//     // this gets url from the broswer of where the chrome extension is on
//     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, await function(tabs) {
//         document.getElementById("currentUrl").innerHTML=tabs[0].url;
//     });

//     document.getElementById("linkedin").innerHTML= "https://www.linkedin.com/in/arunnkanthan/";
//     document.getElementById("date").innerHTML=data[0].date;
//     document.getElementById("areaName").innerHTML=data[0].areaName;
//     document.getElementById("latestBy").innerHTML=data[0].latestBy;
//     document.getElementById("deathNew").innerHTML=data[0].deathNew;
    
// }

// fetchData();

document.getElementById('LinkedInCopyButton').addEventListener('click', async function() {
    try {
  
      // Write the updated content back to the clipboard
      await navigator.clipboard.writeText("https://www.linkedin.com/in/arunnkanthan/");
      window.close();
  
      console.log('Clipboard updated successfully!');
    } catch (err) {
      console.error('Failed to read or write to the clipboard: ', err);
    }
  });

  document.getElementById('githubCopyButton').addEventListener('click', async function() {
    try {
  
      // Write the updated content back to the clipboard
      await navigator.clipboard.writeText("https://www.github.com/arunnkanthan/");
      window.close();
  
      console.log('Clipboard updated successfully!');
    } catch (err) {
      console.error('Failed to read or write to the clipboard: ', err);
    }
  });