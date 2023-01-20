import logo from './logo.svg';
import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className='side-menu-button'>
          <span> + </span>
          New Chat
        </div>
      </aside>

      <section className='chatbox'>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>Custom chatGPT</code> 
            </p>   
        </header>

        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center '>
              <div className='avatar'>
                me
              </div>
              <div className='message'>
                Question from me
              </div>
            </div>    
            <div className='chat-message-gpt '>
              <div className='avatar'>
                me
              </div>
              <div className='message'>
                Hello from chatGPT
              </div>
            </div>   
          </div>
        </div>

        <div className='chat-input-holder'>
            <textarea className='chat-area-holder' placeholder='talk to me by typing here...' rows={1}>

            </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
