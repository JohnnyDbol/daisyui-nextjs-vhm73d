import FallingWords from '../components/FallingWords.js';
export default function Home() {
  return (
    <>
      <div className="chat chat-start prose lg:prose-l">
        <div className="chat-bubble chat-bubble-primary">
          <h1>Falling Words</h1>
        </div>
      </div>
      <FallingWords />
    </>
  );
}
