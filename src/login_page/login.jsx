const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-4">
      <input type="text" placeholder="Enter your name" className="p-2 border border-gray-300 rounded"/>
      <input type="text" placeholder="Enter your email" className="p-2 border border-gray-300 rounded"/>
      <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded"/>
      <input type="password" placeholder="Confirm Password" className="p-2 border border-gray-300 rounded"/>
      <h1 className="text-xl font-bold">Sign Up</h1>
    </div>
  )
}

export default LoginPage;
