import './index.css';

export function Divider({ text}) {
    return (
      <div className="todos">


        <div className="div1"></div>

        <div className="div2">
          <h3>{text}</h3>
        </div>

        <div className="div3"></div>


      </div>

    );
  }