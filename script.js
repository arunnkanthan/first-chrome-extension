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

  document.getElementById('projectCopyButton').addEventListener('click', async function() {
    try {
  
      // Write the updated content back to the clipboard
      await navigator.clipboard.writeText("During my time at Impress (Uniform Teeth), I led the integration of Zendesk into the Electronic Medical Record (EMR) system. Impress is an orthodontic care startup focusing on clear aligner treatments. The problem we aimed to solve was to improve patient communication and address any issues or hesitations patients had before entering the clinic and during their appointment. I led a team of three engineers, along with a product manager, designer, and our stakeholders: the CEO (who led the orthodontic team) and the Director of Customer Care. This Zendesk integration involved setting up both production and QA environments, connecting Zendesk to a new microservice via a webhook created in Go, and developing a chat tab within the EMR for every patient, as well as within the patient app. This allowed patients to send messages to their clinic. The chat tab experience displayed messages in a timeline format, differentiating between SMS, email, or app messages from patients, the clinic, or anyone using Zendesk along with author of the message. I primarily focused on creating the microservice, handling the Zendesk integration, and assisted the frontend engineers creating the UI. Two engineers concentrated on the EMR chat tab experience, while the third engineer worked on the chat tab experience within the mobile patient app. The project timeline was about one quarter, including testing and development and training for our orthodontic and customer care teams on how to use Zendesk. We measured success through NPS surveys from our patients by an increase of 25%. They reported that the new chat experience prior to their first appointment helped them start and continue treatment with Impress more confidently compared to patients who were hesitant or chose not to proceed with treatment before the integration.");
      window.close();
  
      console.log('Clipboard updated successfully!');
    } catch (err) {
      console.error('Failed to read or write to the clipboard: ', err);
    }
  });

  document.getElementById('whyThisCompanyCopyButton').addEventListener('click', async function() {
    try {
  
      // Write the updated content back to the clipboard
      await navigator.clipboard.writeText("I'm a software engineer, who's language agnostic, with 6 years of full stack experience including 2 years of leading and mentoring junior engineers. Most of professional experience has been in startups and I'm looking for new opportunities in that space. I'm comfortable in fast pace environments, and enjoy collaborating with other engineers, product teams, design teams and other organizations with in the company.");
      window.close();
  
      console.log('Clipboard updated successfully!');
    } catch (err) {
      console.error('Failed to read or write to the clipboard: ', err);
    }
  });
