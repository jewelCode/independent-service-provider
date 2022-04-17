import React from 'react';

const Blog = () => {
    return (
        <div className="container w-50 mt-5">
            <h2>Why are you using firebase?</h2>
            <p>Ans: Google firebase is a platform for developing and building dynamic web application and mobile apps. Firebase can helps to connect authentication system for different social media Like Facebook, Twitter, Github, Apple and others. It has lot's of features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore. Firebase is Easy to use. We can use backend database. </p>
            <h2 className="mt-5">What other options do you have to implement authentication?</h2>
            <ul>
                <li>Watch Guard Auth point</li>
                <li>The Octa Identity Cloud</li>
                <li>Cisco Secure Access</li>
                <li>Entrust Identity Enterprise</li>
                <li>Manage Engine AD self service</li>
                <li>Typing DNA verify</li>
            </ul>
        </div>
    );
};

export default Blog;