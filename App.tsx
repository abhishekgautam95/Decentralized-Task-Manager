import React, { useState } from 'react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design UI', status: 'pending' },
    { id: 2, title: 'Implement Authentication', status: 'in-progress' },
    { id: 3, title: 'Test Blockchain Integration', status: 'completed' },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min- transition-colors duration-300`}>
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Decentralized Task Manager</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Task Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['pending', 'in-progress', 'completed'].map((status) => (
              <div key={status} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 capitalize">{status.replace('-', ' ')}</h3>
                <ul className="space-y-4">
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task) => (
                      <li key={task.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 flex justify-between items-center">
                        <span>{task.title}</span>
                        <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Blockchain Transactions</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 flex justify-between items-center">
                <span>Task #1 - 0.5 SOL</span>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">View Transaction</a>
              </li>
              <li className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 flex justify-between items-center">
                <span>Task #2 - 1 SOL</span>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">View Transaction</a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Connect Wallet</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-.707.707M16.004 15.031l-.707.707a4 4 0 105.656-5.656l-.707.707zM11.75 11.75l1.414-1.414a2 2 0 012.828 0l1.414 1.414a2 2 0 01-2.828 2.828l-1.414-1.414a2 2 0 01-2.828-2.828z" />
              </svg>
              <span>Connect Phantom Wallet</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-center p-6">
        <p className="text-sm">© 2023 Decentralized Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;