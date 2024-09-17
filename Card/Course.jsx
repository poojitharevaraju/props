import React  from 'react'


const CourseCard= (props) =>{
    return(
      <div className="Course - card"> 
      <h2>{props.title}</h2> 
      <p>{props.description}</p>
      <p>Reviews:{props.reviews}</p>
      <p>Rating:{props.rating}</p>
      </div>
    );
  };
  const App= ()=>{
    const course =[
      {
        title:"AngularDevelopment Course",
        description:"Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lesse...,",
        reviews:257,
        rating:5.0
      },
      {
        title:"ReactDevelopment Course",
        description:"AchieversIT react js certification course in Banglore We teach You detailed explainations of Jsx,unidirectionaldata flow...,",
        reviews:292,
        rating:5.0
      },
      {
        title:"Mean Stack Development Course",
        description:"MEAN Stack Front to Backin this course  we will build  an  in depth full stack social network application using  Node js ,Express,Rea...",
        reviews:196,
        rating:4.5
      },
      {
        title:"MERN STACK Development Course",
        description:"MERN stack Front To Back in this course  we will build  an  in depth full stack social network application using  Node js ,Express,Rea...",
        reviews:192,
        rating:4.5
      },
      {
        title:"WEB Development Course",
        description:"with Achievers IT's UI development course in banglore  you  will be able to master the cdncepts such  as css3,css,HTML...",
        reviews:193,
        rating:4.5
      },
      {
        title:"DIGITAL MARKETING Course",
        description:"The future  for digital marketing is promising,and its scope in the upcomimg future is that it may replace  all standard forms...",
        reviews:194,
        rating:5.0
      },
      {
        title:"REACT NATIVE DEVELOPMENT Course",
        description:"Full stack  development is defined as the development of both the front end and back end  sides of a web application A full- sta...",
        reviews:195,
        rating:5.0
      },
      {
        title:"IONIC DEVELOPMENT Course",
        description:"Ionic 4 & ionic 5 that you can immediately implement to build high quality apps our corse covers a wide variety of topics fro...",
        reviews:295,
        rating:5.0
      },
    ]
    return(
      <div>
        <h1>Trending courses</h1>
        <div className="coursecard">
          {course.map((course,index) =>(
            <CourseCard key={index}
            title={course.title}
            description={course.description}
            reviews={course.reviews}
            rating={course.rating}
            />
          ))}
          </div>
      </div>
    );
  };
  export default App

      
    


