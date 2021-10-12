import React from 'react'

export default function Card() {
    return (
        <div>
            <div class="card" style={{width: "18rem", marginLeft:"32rem"}}>
  {/* <img src="https://e7.pngegg.com/pngimages/698/325/png-clipart-graphics-silhouette-silhouette-animals-head.png" class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h1 class="card-title">head of a newspaper story.</h1>
    <hr/>
    <p class="card-text">What's a resume headline, and how can it help you showcase your credentials? A resume headline (also known as a resume title) is a brief phrase that highlights your value as a candidate.</p>
    <a href="#" class="btn btn-primary">Get started</a>
    <a href="#" class="btn btn-primary">Action Links</a>
    
  </div>
  
</div>
<div class="row" style={{ marginLeft:"26rem"}}>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">App Features Your Customers Want. That Make a Really Great App</h5>
        <p class="card-text">The world today seems to run on apps. If it is something that people can interact with, then it’s likely that there is an app available for it.</p>
        <a href="#" class="btn btn-primary">Get started</a>
      </div>
    </div>
  </div>
  </div>
</div>
        
    )
}
