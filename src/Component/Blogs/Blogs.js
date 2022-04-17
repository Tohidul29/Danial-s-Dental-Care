import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center mt-4'>Simple Questions & Answers</h2>
            <div className='my-4'>
                <h3>1. Difference between authorization and authentication</h3>
                <p><b>Authorization:</b> Authorization is the process to give someone the ability to access any resources which are they already permitted. For example, you are controlling a social media service and you need to take some permissions from some third party side that can give you to permitted some conditions. Mainly that's we call authorization. As example: any websites admin.</p>
                <p><b>Authentication: </b> Authentication means the process or the system of an user's identity. Basically we saw that things in many websites. Suppose, You are going to open a github account. Without using full information part you will see some other ways to create an account. Such as: signup with Google, signup with facebook and signup with Twitter. In that process, when you are select any social media signup they are checking that is that you or not. If they permitted you to signup then you can able to signup. We can call it as authentication.</p>
            </div>
            <div className='my-4'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase is a famous authentication organization which one is a part of google. Firebase helps us to successfully build and run an application. We can call it as a backend infrastructure. Beside firebase have several types of authentications. There are OneLogin, JumpCloud, Microsoft Azure Active Directory, Auth0, Ripping, ForgeRock etc.</p>
            </div>
            <div className='my-4'>
                <h3>3. What other services does firebase provide other than authentication?</h3>
                Besides authentication firebase can provide us some several benefits. such as:
                <ul>
                    <li>Creation and Managing Databases</li>
                    <li>Give us a huge storage</li>
                    <li>Hosting benefit</li>
                    <li>Helps to changing our app behavior</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;