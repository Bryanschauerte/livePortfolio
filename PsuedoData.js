// const temp_addComment = (userInput){
//
// }

// let colorScheme = #f0f5f9, #c9d6de, #52616a, #1e2022;
// let colorSchemeTwo = #2b90d9, #d9e1e8, #9baec8, #282c37;
// let colorSchemeThree = #A593E0, #E0E3DA, #FFFFF3, #566270;

let testinfo =[
{
  title:"CodePen React Component",comments:[],
  shortTitle: "Making CodePen Availiable as a Component",
  header: "Don't Repeat Yourself",
  id:0,
  techStack:['Es6','React'],
  type: "demo",
  gifPic:["https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/codz.png","https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/codz.png"],
linkTo:"https://github.com/Bryanschauerte/reusableReactComponents/blob/master/CodePenHandler.js",
  parts:[
    {
      id:0,
      pictures:['https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/components/codePen/codePen.png'],
      content:[
      {intro:'DRY', text:"If you find yourself writing the same thing more than twice- pull that code out and make a component. The above presentational/dumb/stateless ( so many words for the same thing! ) is how I handled embedding the CodePens on this site." },
      {intro:'Starting', text:"When choosing how to start a component, think about what it will do. This particular component makes adding a new pen simpler by handling the conversion from regular \'o fashion HTML to jsx and feeds in the unique parts through props."},
      {intro:'Walking through the Component', text:"Lets walk down the code. \'const CodePenHandler = (props)=>\' Stateless React components are pretty much just plain old JavaScript functions. This is declaring the component name to be \'CodePenHandler\' and passing in props as its argument."},
      {intro:'', text:"Next, we have a helper function that takes in a URL (in this case, pronounced 'Earl'). 'Target' is a regular expresion that finds 'height=someNumber'. We then use String.replace method to remove the old height and replace it with the new, parent defined height."},
       {intro:'', text:"Where you see \'attribute={props.yattayatta}\', attribute is being assigned the value of the data passed in to this component\'s parent with the name of \'yattayatta\'. In the case of \'width={props.style.width}\', width is the value of the object \'style\' with the key of width. This is done so the iframe has the same width as it\'s styling."},

       {intro:"PropTypes", text:"PropTypes are wonderful things. Not super important if you are the only one to ever see your code, but since sharing is caring -> its good to get used to them. PropTypes are a way to say to other developers \'Hey I made this thingy and this thing needs this type of stuff\'. PropTypes come in different flavors ( bool, func, string etc ) and can be customized by writing up a function to use as the prop-checker. They also become handy if you are using the output of another function to fill in the value for a prop. By using PropTypes, down the road, when something does not work, your console will give you better clues on why something is not working."},
         {intro:'', text:" Last, we have the \'export default CodePenHandler\'. Normally, I would skip describing something like this, but my coworker recently had a heck of a time figuring it out. \'Export\' is a key word that is used to make objects avaliable. Much like when you are playing \'Marco-Polo\' in the pool, this shouts out its name (\'CodePenHandler\') and allows another script to find it. \'default\' means that there is only one export in this module."},
       {intro:'Have Questions?', text:"This component is not too complicated once you get past the Es6 syntax, but any questions -> feel free to ask :)"}
     ],
      codePenInfo:{
        userPen:'http://codepen.io/BSchauerte',
        iframeSrc:'//codepen.io/BSchauerte/embed/pbVWww/?height=265&theme-id=dark&default-tab=js&embed-version=2',
        penHref: 'https://codepen.io/BSchauerte/pen/pbVWww/' }
    }]



},
{
  title:"'MEAN' Report Generator",
  comments:[],
shortTitle: "Generates Teachers' Student Reports",
header: "MEAN Stack Web Application with Authentication and Payments",
problem:"How to fit writing 70+ unique reports in a short amount of time.",
howSolve:"Add student objects to a class, iterate over their defining characteristics and generate a report based on their abilities.",
id: 1,
techStack:['Node','Express','Angular', 'Stripe', 'Mongo'],
type: "project",
gifPic:["https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/homeTR1.png",
"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/1-1.gif"],
linkTo:"https://github.com/Bryanschauerte/report-generator",
parts:[
  {
    id:0,
    picturesArray:[
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/homeTR1.png",
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/loginTR2.png",
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/stripeTR3.png",
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/initialreportsTR4.png",
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/addingclassTR5.png",
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/studentaddtr6.png",
      "https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen/7.png",
    ],
    video:{link:"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQ/ReportGenW.mp4", title: "Video Overview of Site's Functionality"},
    content:[
      {intro:"Overview", text:"It creates a collection of classes for each user. Users can add/remove classes and students. Each student has attributes related to their abilities, the user selects the appropriate value for each characteristic. Upon submission, my API creates a report for each student and returns them. The reports are never the same and always accurate. Payments are made possible by StripeJs and Passport"},
    {intro:'Why.. **Not code Related** (Skip away!) ', text:"My very first programming experience was with solving this very problem. I was teaching english in South Korea and I was just so lucky that my first boss was a very bad person. The schedule looks a bit like this: 10-12 classes a day, was told what classes I was teaching about 15 min before the start of the day and reports were due randomly for the next day 2-4 times a month. Reports had to be different each time, had to contain only positive things and were certain to be compared among mothers.  Ah yes. Did I mention each class had 8-16 students? Yeah. Not a good time. Hair loss, crying and long nights before long days. "},
    {intro:'', text:"GOOGLE ENTER-> I had started copy-pasting single sentences from past reports and using them to construct new unique reports to save time. It was very repetitive, which shook free a memory. My science background screamed at me that an equation could be made from all those pieces. So. Like every person with internet and a question, I Googled it. Hmm. ‘Programming’ you say..? Flash forward through a month doing all the codeAcademy/treehouse videos I could find. I learned enough to make an interface that spat out a paragraph based on which checkboxes were marked. It was purple, pink and super ugly. But hey, it worked and I found something fun. Below is a description of Report Generator Mark II, the first project I made money from after DevMountain’s full time course. "},
    {intro:"On To Code Logic!", text:"This will be a brief description of logic behind certain major pieces. It would take way to long to write out steps and there are much better ways to learn to code than using tutorials. Tutorials are great for getting an idea of capabilities, but at a certain point in getting your brain programming-ready, the docs are better. Feel free to follow the link at the bottom, take a look at the raw site and fire any interworking questions my way."},
    {   intro:"Designing The Core",
        text:"With a project, we have a problem and the general idea of a solution. Some designers like to start at the front UI and work their way back, or start designing the back and work their way forward. For this particular project, I started with creating reports (the main function of the site) and moved on to improving user experience."},
    {intro:"Start with Pieces", text:"First, I figured out what was needed to solve the problem. In this project's case, I needed users to be able to generate a report from how well a student was doing. I defined what criteria students were being evaluated by and gave each criterion a range of 0 to 3. These values are linked to a user selecting 'excellent', 'fair' or 'bad' for each particular criterion. Once the user finishes selecting all applicable attribute values, a student object is created reflecting those values. These student objects are sorted into groups (classes) to be complied together."},
    {codePenInfo:{
      userPen:'http://codepen.io/BSchauerte',
      iframeSrc:'//codepen.io/BSchauerte/embed/ZOoAXA/?height=265&theme-id=dark&default-tab=js&embed-version=2',
      penHref: 'https://codepen.io/BSchauerte/pen/ZOoAXA/', caption:"Above is an example of 'behavior' and how a particular sentence is added to the report object." },
      intro:'',text:"On one of the API's endpoints, a controller was created to handle user input. For each attribute, I created and object with five sentences for each value. Each object was in control of a single sentence of that student's report. For example, if a user selected 'bad', for a student's behavior, one of five 'bad' sentences was added to the report object of that student. This was repeated for each attribute until the report was populated with a sentence for each attribute."},
      {intro:'API Enpoint Overview',text:"An endpoint was created on my Node server to handle authenticated requests with class objects. Class objects contained an array of student objects with their attributes and user-defined values. After the initial populating of report sentences, a function iterated over each sentence and replaced gender-specific words as needed. Then sentences where then shuffled, an introduction added, added to the student's object and pushed into the student's class. Once all the reports were completed, they were sent back to the user and stored in that users collection (for later comparisons). "},
    {intro:"",text:"By using an API on the server, it allows more flexibility for both the front and backend. They both remain seperate and protected. It also lets you swap out parts easier later if you come up with a better solution for UI component or decide to handle your data in a different way."},
    {intro:"Payments", text:"Before I came to my decision about handling payments, I took a look at the docs for several different providers and their FAQs. Some advice - When you are looking to use a new third party API, Take a look at questions posted on StackOverflow.com. Keep in mind that APIs you are comparing have different ages, so dont get too hung up on the total results. Just look at the general questions developers are asking and how well they are being addressed both on the site and in the corresponding next version of that API. This will give you an idea of how much support you will have if you run into issues and how others are using the API."},
    {intro:"", text:"Teacher Reports ended up using StripeJS. I found the docs to be more supportive to my use case. I wanted users to be able to sign up for a single payment or monthly subscription. StripeJS did a great job of handling currency changes for a low fee. I knew Americans would just be a small percent using the report generator, so I had to keep the fees low and open to local bank credit cards. I really liked that I did not have to worry about payment information touching my server. Did I mention its 'checkout' is pretty? Well. Its pretty."},
    {intro:"Things to Do Better", text:"Reports: I would have like to output the reports into a file for the user's easier access.", className:"PartsSummary"},
    {intro:"Conclusion", text:"The site was successful and had lots of positive feedback. I ended up taking it offline because when I left Korea, I had the goal to create the report generator. Once I finished it, I had been in America for months and its importance dissipated. My job where I needed to learn PHP/cake/whole new deployment system, left me little time to dwell on the Report Generator.", className:"PartConclusion"}

  ],
    url:"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen.gif"
  }]
},
//
{
  title:"The Queue",
  comments:[],
shortTitle: "'MEAN' web applicalion with StatsDashbord, StudentDashboard and AdminDashboard ",
header: "Redone DevMountain Student Queue",
problem:"Useful data was not being utilized or collected.",
howSolve:"Created a new UI for students in the queue to receive help from mentors. It collects and displays information on attendance, student understanding of topics, mentor efficiency, and questions being asked.",
id: 1,
techStack:["MEAN stack",'Socket.io','D3.js', 'Material', 'Mongoose', 'OAuth'],
type: "project",
gifPic:["https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/adminConfiG.png",
"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/adminConfiG1.gif"],
linkTo:"",
parts:[
  {
    id:0,
    video:{link:"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQ/theQ.mp4", title: "Video Overview of Site's Functionality"},
    picturesArray:[
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/adminConfiG.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/attG.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/mentorAtt.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/mentorQ.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/studentDash.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQpics/studentdashQ.png'
    ],
    content:[
      {intro:"Overview", text:"This is a Mean-Stack app created in a group of five using Scrum methodology. It is broken into three pieces; StatsDashbord, StudentDashboard and AdminDashboard. StudentDashBoard is where students see todays curriculum, objectives, get help and see past questions. AdminDashboard is the mentors landing page, it handles attendance, managing the queue and initiating flash polls. The stats dashboard uses D3 and agChart to give mentors and teachers a visual synopsis of how students feel about their understanding of the objectives taught."},
      {intro:"On Viewing the Code", text:"Unfortunately, since this was done for devMountain, I no longer have access to the gitHub repository. Since this project, I have done a lot of manipulation of data displays using a similar structure. Below you will find the summary video we used for this project's presentation. As always, feel free to ask questions and I'll happily post the response."},
      {intro:"Conclusion", text:"This project was a great introduction to Agile principles, which did a pretty good job of carrying over to my current position. I learned how to balance helping others with managing my own workload. The project ended up being a success, and last I heard it was being implemented ( Although, I can't check due to my own OAuth keeping me out, lol ). ", className:"PartConclusion"},
      {intro:"Things to Do Better", text:"Given that this was one of the very first projects I did ( and ignoring my ugly front/back-end ), it would have done well on a small scale of users. If I were to redo it, I would pass most of the request handling to something that scales better such as AWS Lambda. Also, the structure of the database could have used improvement to optimize the storage of books. Instead of using Mongo (the only database I knew when making this project), I would go with a relational database such as mySQL or at least construct my schemas differently. This also would have helped to reduce the complexity of my database queries. Big-O Complexities were something I learn after finishing up devMountain, if you would like to optimize your data handling be sure to google 'Big-O complexities'.", className:"PartsSummary"},
      {intro:"", text:"Another improvement I would make would concern initial seeding. I should have constructed a generator to set values for characteristics when books are first added to the database. I could have created a function to that iterated over Google supplied descriptions looking for certain words and phrases. A late night cron job, pulling top books from google trends, would do a great job of helping establish the database.", className:"PartsSummary"},
      {intro:"Success or Failure??", text:"FAILURE! 'Why?' you ask? How could such a beautiful usage of user populated database content fail? Ah. Thats right, you need USERS. The inital seeding of my database to drive user interest was non-existant. The scope of this project was just two weeks. Yeah... Two weeks is a long time to work on a project this small and still fail. But keep in mind all of this was new to me 2 months prior to the project. ", className:"PartConclusion"}
  ],
    url:"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen.gif"}]
},
//
{
  title:"Library Browsing",
  comments:[],
shortTitle: "'MEAN' application that makes book suggestions based on book content characteristic.",
header: "Making a Helpful Librarian",
problem:"Wanting of a good read, but not having a particular author or title in mind.",
howSolve:"Make a recommendation engine that can turn books into data points. ",
id: 1,
techStack:["'MEAN' stack", 'Material', 'Mongoose', 'OAuth'],
type: "project",
gifPic:["https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/librarybrowsing/landing.png",
"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/librarybrowsing/landing.gif"],
linkTo:"https://github.com/Bryanschauerte/date-a-book",
parts:[
  {
    id:0,
    pictures:[
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/librarybrowsing/landing.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/librarybrowsing/review.png',
      'https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/librarybrowsing/search.png'
    ],
    video:{link:"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/theQ/lib.mp4", title: "Video Overview of Site's Functionality"},
    content:[
      {intro:"Overview", text:"A website for finding books based on particular characteristics. It takes the average reviews of all users, cycling over each book and averages such characteristics as horror, science fiction content, violence, etc. In Searching for a book, you select how much of each characteristic you want and the site shows a list with the description of each book matching your search criteria (within a user-chosen range)."},
      {intro:"Using Users to Help My Database", text:"Depending on the type of site you are building, collecting user input can be a great investment. Before you start shoving every bit of input into your database, take a step back and think about what input you can rely on. Text, helpful for login information, tends to be a bit unreliable. You would have to worry about foul language, misspelling, and LIES. You could go ahead and use it, I dont want to distract you from creating the next reddit, just make sure you adjust for human nature."},
      {intro:"", text:"I found that the most helpful input a user can offer are those the developer can put a value on. Checkboxes, selections, ranges and clicks can quickly become valuable in large numbers across a collection of users. They can tell you what the majority of your site's visitors are interested in and help you create a better user experience."},
      {intro:"", text:"For Library Browsing, I used user input to evaluate books. When a user searched for a particular book that my database did not already have, I pulled in that book's information from Google Book's API and added it to by database. The user then went on to give that book's content defining values. I collected that user's opinion on the numarical value of a content's violence, romance, suspence, realism, horror, humor, science fictional content, etc. This information was then handled to update the book object in the database's values. Basically, each characteristic's value was added to all the other inputs for that characteristic and divided by the total number of reviews."},
      {intro:"", text:"To USE the information gathered in Library Browsing, I made a specific UI to help users relay what they were seeking. That UI contained sliders for each characteristic which were used to define what kind of content the user was interested in and an input that helped the controller figure out how close the results must match their selections. When the user made a submission, my API iterated through the database and returned books that matched the users requirements. "}
  ],
    url:"https://s3-us-west-2.amazonaws.com/elasticbeanstalk-us-west-2-671953655197/reportGen.gif"}]
}
// ,
// {title:"infoOne",comments:[],
// shortTitle: "coolf is about blao",
// header: "Thisgoes over blay",
// id:2,
// techStack:['node','react','angular'],
// type: "blog",
//
// parts:[
//   {
//     id:0,
//     content:[
//     'paragrph one is a long something something about things',
//     'the things go on and on and contain lots of stuff',
//     'its almost as if I enjoy ramblibing',
//     'which is not true', 'okay... youre right its true'],
//     url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//   }]
// },
//
// {title:"infoOne",comments:[],
// shortTitle: "coolf is about blao",
// header: "Thisgoes over blay",
// id:3,
// techStack:['node','react','angular'],
// type: "project",
//
// parts:[
//   {
//     id:0,
//     content:[
//     'paragrph one is a long something something about things',
//     'the things go on and on and contain lots of stuff',
//     'its almost as if I enjoy ramblibing',
//     'which is not true', 'okay... youre right its true'],
//     url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//   }]
// },{
//   title:"infoOne",comments:[],
// shortTitle: "coolfo is about bla",
// header: "This goes over bla",
// id:4,
// techStack:['node','react','angular'],
// type: "blog",
//
// parts:[
//   {
//     id:0,
//     content:[
//     'paragrph one is a long something something about things',
//     'the things go on and on and contain lots of stuff',
//     'its almost as if I enjoy ramblibing',
//     'which is not true', 'okay... youre right its true'],
//     url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//   }]},
//
// {title:"infoOne",comments:[],
// shortTitle: "coolf is about blao",
// header: "Thisgoes over blay",
// id:5,
// techStack:['node','react','angular'],
// type: "demo",
// gifPic:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900",
//
// parts:[
//   {
//     id:0,
//     content:[
//     'paragrph one is a long something something about things',
//     'the things go on and on and contain lots of stuff',
//     'its almost as if I enjoy ramblibing',
//     'which is not true', 'okay... youre right its true'],
//     url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//   }]
// },
//
// {title:"infoOne",comments:[],
// shortTitle: "coolf is about blao",
// header: "Thisgoes over blay",
// id:6,
// techStack:['node','react','angular'],
// type: "blog",
//
// parts:[
//   {
//     id:0,
//     content:[
//     'paragrph one is a long something something about things',
//     'the things go on and on and contain lots of stuff',
//     'its almost as if I enjoy ramblibing',
//     'which is not true', 'okay... youre right its true'],
//     url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//   }]
// },
//
// {title:"infoOne",comments:[],
// shortTitle: "coolf is about blao",
// header: "Thisgoes over blay",
// id:7,
// techStack:['node','react','angular'],
// type: "project",
//
// parts:[
//   {
//     id:0,
//     content:[
//     'paragrph one is a long something something about things',
//     'the things go on and on and contain lots of stuff',
//     'its almost as if I enjoy ramblibing',
//     'which is not true', 'okay... youre right its true'],
//     url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//   }]
//   },
//     {
//       title:"infoOne",comments:[],
//     shortTitle: "coolfo is about bla",
//     header: "This goes over bla",
//     id:0,
//     techStack:['node','react','angular'],
//     type: "blog",
//
//     parts:[
//       {
//         id:0,
//         content:[
//         'paragrph one is a long something something about things',
//         'the things go on and on and contain lots of stuff',
//         'its almost as if I enjoy ramblibing',
//         'which is not true', 'okay... youre right its true'],
//         url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//       }]
//   },
//
//   {
//     title:"infoOne",comments:[],
//   shortTitle: "coolfo is about bla",
//   header: "This goes over bla",
//   id: 1,
//   techStack:['node','react','angular'],
//   type: "demo",
//   gifPic:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900",
//
//   parts:[
//     {
//       id:0,
//       content:[
//       'paragrph one is a long something something about things',
//       'the things go on and on and contain lots of stuff',
//       'its almost as if I enjoy ramblibing',
//       'which is not true', 'okay... youre right its true'],
//       url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//     }]
//   },
//
//   {title:"infoOne",comments:[],
//   shortTitle: "coolf is about blao",
//   header: "Thisgoes over blay",
//   id:2,
//   techStack:['node','react','angular'],
//   type: "blog",
//   parts:[
//     {
//       id:0,
//       content:[
//       'paragrph one is a long something something about things',
//       'the things go on and on and contain lots of stuff',
//       'its almost as if I enjoy ramblibing',
//       'which is not true', 'okay... youre right its true'],
//       url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//     }]
//   },
//
//   {title:"infoOne",comments:[],
//   shortTitle: "coolf is about blao",
//   header: "Thisgoes over blay",
//   id:3,
//   techStack:['node','react','angular'],
//   type: "project",
//
//   parts:[
//     {
//       id:0,
//       content:[
//       'paragrph one is a long something something about things',
//       'the things go on and on and contain lots of stuff',
//       'its almost as if I enjoy ramblibing',
//       'which is not true', 'okay... youre right its true'],
//       url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//     }]
//   },
//   {
//     title:"infoOne",comments:[],
//   shortTitle: "coolfo is about bla",
//   header: "This goes over bla",
//   id:4,
//   techStack:['node','react','angular'],
//   type: "blog",
//
//   parts:[
//     {
//       id:0,
//       content:[
//       'paragrph one is a long something something about things',
//       'the things go on and on and contain lots of stuff',
//       'its almost as if I enjoy ramblibing',
//       'which is not true', 'okay... youre right its true'],
//       url:"https://lh3.googleusercontent.com/274ob_jikhJxsZfmXkBQh_0iz-YsBx6LREkI1g37_RvZdTpm9ICO6Ry2Ev0XXBoTXrc=h900"
//     }]
//   }
]

  let content = {
    header:'Bryan Schauerte',
    bottomBox:'This is a footer thing',
    rightBox: 'Jobstuff',
    leftBox:'Expertize',
    topBox:'ABOUT!'
  }

  let headerFilterArray = ["demo","blog","project"];


export {testinfo, content, headerFilterArray};
