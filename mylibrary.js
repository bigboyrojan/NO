function bounceOff (objet1, objet2) {
    if (objet1.x - objet2.x < objet2.width/2 + objet1.width/2
      && objet2.x - objet1.x < objet2.width/2 + objet1.width/2) {
    objet1.velocityX = objet1.velocityX * (-1);
    objet2.velocityX = objet2.velocityX * (-1);
  }
  if (objet1.y - objet2.y < objet2.height/2 + objet1.height/2
    && objet2.y - objet1.y < objet2.height/2 + objet1.height/2){
    objet1.velocityY = objet1.velocityY * (-1);
    objet2.velocityY = objet2.velocityY * (-1);
  }
  }

  //no
  //yes