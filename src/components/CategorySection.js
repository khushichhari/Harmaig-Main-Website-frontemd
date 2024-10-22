// src/components/CategorySection.jsx
import React from 'react';
import './Home.css';

const CategorySection = () => {
  return (
    <>
    <div id="box">
          <h1>Shop By Category</h1>
          <br />
          <div className="card-container">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46QqLKL8AM8LRnu6W0jmHcra3y0Gp93xlig&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Men's Rings</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
               <img src="" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Necklace</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src="" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Earings</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrl-Wzc56RaCqwC9Yd6i3enLwgZJ6a_iJjtQ&s" className="card-img-top" alt="Card 4" />
              <div className="card-body">
                <h5 className="card-title">Card Women's Rings</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src= '' alt = "..."/>
              <div className="card-body">
                <h5 className="card-title">Bangles</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        
        <div id="box">
          <br />
          <div className="card-container">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46QqLKL8AM8LRnu6W0jmHcra3y0Gp93xlig&s" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Men's Rings</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
               <img src="" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Necklace</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src="" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Earings</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrl-Wzc56RaCqwC9Yd6i3enLwgZJ6a_iJjtQ&s" className="card-img-top" alt="Card 4" />
              <div className="card-body">
                <h5 className="card-title">Card Women's Rings</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <img src= '' alt = "..."/>
              <div className="card-body">
                <h5 className="card-title">Bangles</h5>
                <a href="/" className="btn">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div id = "line">
          <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///8/QD8AAACen575+fnx8fHr6+v8/Py2tra6urr09PTi4uI+Pj7u7u7z8/OZmZmAgIB6enpoaGhtbW3GxsbX19d0dHRPT0+NjY02NjbR0dGpqaklJSW+vr5VVlXd3d1fYWApKSlISEgaGhqQkJCGiIcRExKsra03OTmam5suLi4ZGRlZWlkKDQwfICBPUE8uI+oLAAAEJElEQVR4nO3YaXeiPBgGYAy7AVnDEhaRgjiK+v//3cuiuLXTOdXp6bznvj6FkIbkMeQJFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcmz3w2f32/1M98+vpuvwE7ksKynFmhmZ81nZ8DJy2kT5qq3Jm5lWUfDs3zQ/xunDjyUKBWaf/uV2W26zhBM5S6gqurH7eVkjDg432d1K8b7Dcpi6mo+vmRf9CM5h7r1oaquUJjL7oKxYq1D9rKUSzK05VPlq8a6zcxiX59Sd3yvajMo5idiryOTiXJmb23rkzbyG7+lvxrb49CktsK6hXsvhFfWWNB7d6Hkk4vjb/9dd9UrsrstubhCT+eutnc7wus8JSbJnZ6vXbcq6144RqXpdL3IxoP24xFPnoff6yEHB/SMC/rS17hb95Nkmn9U2GYvEasy60sFh82XpGUv9mMfyiHEMe/T8P6qhlnonjkvJWqrK+yFlW/iuh5KSnheRWx0r7L0BL/tSVbRfjLqP+aqKumYp56amJC9rl1GxdJzLt9gdYkuFRT3c9EqkqJ5uv+pWlD8u6KOu7NjiuxxN0SsnMW4/VCUV5zLFTvz4HZnsTVk4HvQrGo07YI10Uz/LASE1tCyGHjJFyZQq60YbsvloJE/aSqqqZ/6qJLsV2emstqPzYrqkSNmYJq7Tbe2xQlVV5qUd7Fgxi1P+Zkbq+MvDDC53cWpYrJ/jpVLlwyOGrPhVxJh14lbpPotAxUJnqHfd/5oSxct90Qsg7dVRLM9rlTNboWHaqx5WqcGCNBomtWXaSHwnJjLyVkdSzcIo+HIa6PlX9aIYL2FmrD70jL59LyXAvHALjT/Dk56cY+mxmzLzG6TOFN2XYera8OryZvKqc4lmHuRVVt52Vhp9X07oynEZvEw/yM6SSWpV5Q5kEdVU4bll0pSjI67SzzZtteDm2GRI0vDrwzzHx0XnGmN4XEE79OFo6CpImnUJhWWiZ3b6jiW2HZinzeT6ltT7dLKsz1Wf/8/u0th0olc8Kqm7JEm6Cc2drydpeV/WDnnYefNEsh0eUnRu6dI0KCy/6hDxVG8uSOkguSJFTnK8kP1jvPytiSLpkv2jnZdfG4TI4mblrY9bb/bpGTfuX2q4DvndpLw4hNDVWqBTExAkvnS0qZn9gGOSbTMsuYIAvaR98Df8YUjSECVxuKKph5Wj//+WB3fS6t6xqqRV642W5Ktxb5OxFX+LnWJ8FYkDinj1/H82VTBUcjjmeFnbDrHMm646xSPj12Zqe5LNwm388+0v+Eajl19dWc7i4+b/Mu3a6dV5xV/sJ/egbq10P78DX0HQ8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf+w97OUE6ocwEEgAAAABJRU5ErkJggg==" alt = "..."/>
        </div>
    </>
    );
};

export default CategorySection;
