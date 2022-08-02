import { useState } from "react";
import data from "./data";
import { Question } from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer about login</h3>
        <section className="info">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
