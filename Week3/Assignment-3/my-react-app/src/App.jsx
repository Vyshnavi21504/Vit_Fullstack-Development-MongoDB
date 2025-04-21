import React from 'react';
import './App.css';
import TextUpdater from './TextUpdater';
import SimpleForm from './SimpleForm';
import UserCard from './UserCard';
import CustomButton from './CustomButton';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">React Components Assignment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">1. Text Updater</h2>
          <TextUpdater />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">2. Simple Form</h2>
          <SimpleForm />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">3. User Card</h2>
          <UserCard name="John Doe" email="john.doe@example.com" />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">4. Custom Button</h2>
          <div className="flex justify-center">
            <CustomButton>Click This Button</CustomButton>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-center">5. Login Form</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;