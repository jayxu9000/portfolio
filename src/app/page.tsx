const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex items-center space-x-16">
        <img
          src="/profile.jpg"
          alt="profile picture"
          className="h-64 w-64 rounded-full object-cover"
        />
        <div className="text-left"> 
          <h1 className="text-4xl mb-4">Jay Xu</h1>
          <h2 className="text-lg mb-1">Software Engineer & Full Stack Developer</h2>
          <p>Developing software to make life simple</p>
        </div>
      </div>
      <p className="max-w-xl mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default Home;
