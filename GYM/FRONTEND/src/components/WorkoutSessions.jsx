/* eslint-disable no-unused-vars */
import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
           <h1>TOP WORKOUT SESSION</h1>
           <p>A short workout session typically includes a brief warm-up (e.g., jumping jacks, arm circles), a main workout focusing on key exercises like squats, push-ups, lunges, and planks, followed by a quick cool-down with stretching to prevent muscle soreness and improve flexibility.

           </p>
           <img src="/img5.jpg" alt="workout" height="100%"></img>
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Featured bootcamps often emphasize intensive, structured workout programs designed to challenge participants and improve overall fitness levels. These bootcamps typically include
        </p>
        <div className="bootcamps">
          <div>
            <h4>     High-Intensity Interval Training (HIIT):</h4>
            <p>
        Incorporates short bursts of intense exercise followed by periods of rest or lower-intensity activity to maximize calorie burn and cardiovascular fitness.
        
            </p>
          
            <img src="1.jpeg" alt="" /> 
          
          </div>
          <div>
            <h4>Team Challenges:</h4>
            <p>
            Encourages teamwork and camaraderie through group exercises and motivational activities.
            </p>
            <img src="2.jpeg" alt="" /> 
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
