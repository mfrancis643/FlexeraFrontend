**Mark Francis' (m.francis032@googlemail.com) attempt at Flexera's code test**

The backend of this app can be found [here](https://github.com/mfrancis643/FlexeraBackend).

Documentation/personal analysis of both parts of my completed test is found in this README file.

**My Technical Background**

I have had experience of using React in a commercial environment during my time working for Liberty Mutual in Boston, Massachusetts, where I spent 4 months working on a full stack React/SpringBoot application, with another 2 months of on/off React development as I was shifted to a different project (entirely SpringBoot Java development for the next 8 months).

I have had no experience of Go before starting this code test, and the majority of my time was spent learning and developing the backend of this project - I hope this shows my coding skills and flexibility! I had originally planned to write the backend in SpringBoot, as this is a technology I am familiar with, however I enjoyed the challenge and I think I have developed the backend within the time frame to a reasonable standard.

**Project Deliverables:**

1. The endpoint exists as specified

2. All specified fields exist and function

3. This project fully supports the use of the GET method as specified

4. This project mostly supports the use of the POST method as specified - however there is no sort method 

5. This project fully supports the use of the DELETE method as specified

6. This project supports flagging to an extremely basic extent (it's not really a feature in its current state), with a brave attepmt at Redux persistence:
   1. I have used redux as a persistence technology extensively during previous work experience, however I did not leave myself sufficient time to successfully implement this into my project
   2. Code exists outside of the "Main.js" file related to my attempts at implementing Redux as a persistence technology, however tihs is completely disjointed from the runnin code (I dont like Runtime errors)
   3. The "markedIds" state in "Main.js" successfully holds a list which notes the checked checkboxes found in the "Results.js" component - I could not get this state to persist

**Constraints/Todos:**
- Error handling is extremely scrappy - in both frontend and backend apps (especially front)
- "window.location.reload()" is used horribly to force rerendering of components following database changes (sorry)
- Better CSS and BootStrap usage to iron out front end look and feel (eg use bootstrap buttons as is best practice)

*I beleive I am capable at resolving these problems with relatively short continued development, however my brain hurts after learning and implementing Go with a React frontend during a 2 day development cycle*
