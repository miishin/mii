import logo from './logo.svg';
import './App.css';
import { HeartFill, VinylFill, CameraReelsFill, BrushFill, TvFill,
 Wrench, CameraFill, Github, QuestionCircleFill, PersonFill } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <header>

      </header>

      <div className="body">
        <p>Home</p>
        <div class="row">
          <div class="likes">
            <div class="hidden-likes">
              <a href="https://rateyourmusic.com/~miishin">
                <VinylFill/>
              </a>
              <a href="https://letterboxd.com/miishin/">
                <CameraReelsFill />
              </a>
              <a href="https://anilist.co/user/miishin/">
                <BrushFill />
              </a>
              <a href="https://www.serializd.com/user/miishin/profile">
                <TvFill />
              </a>
            </div>
            <HeartFill/>
          </div>

          <div class="toggle">
            <QuestionCircleFill />
          </div>
 
          <div class="made">
            <Wrench/>
            <div class="hidden-made">
              <a href="https://instagram.com/miraisahara">
                <CameraFill />
              </a>
              <a href="https://github.com/miishin">
                <Github />
              </a>
            </div>
          </div>

        </div>

        <div class="about">
          <PersonFill />
        </div>
      </div>
    </div>
  );
}

export default App;
