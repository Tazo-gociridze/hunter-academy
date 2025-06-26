import "./App.css";

function App() {
  return (
    <main>
      <header className="h-[101px] bg-[var(--main-color-light)] flex items-center justify-between">
        <div className="logo !ml-5"></div>
        <nav className="flex gap-x-[30px] text-[25px] text-[var(--mail-color-dark)] ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </main>
  );
}

export default App;
