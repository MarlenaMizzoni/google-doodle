// https://unpkg.com/gsap@3/dist/gsap.min.js

gsap.to("#moon",{
  
  scale : 1.5,
  duration: 5 ,
  transformOrigin: '50% 50%',
  repeat: -1,
  yoyo: true ,
  fill:"white"

  
});

gsap.from(".G",{
  

  duration: 10, 
  repeat: -1,
  fill: "darkslateblue" ,
  stagger: .5, 
  ease: 'elastic',
 

  
  
});

gsap.from(".O", {
  
   duration: 10, 
  repeat: -1,
  fill: "darkslateblue" ,
  stagger: .5, 
  ease: 'elastic',
  
});

gsap.from(".o", {
  
  
    duration: 10, 
  repeat: -1,
  fill: "darkslateblue" ,
  stagger: .75, 
  ease: 'elastic',
  
});

gsap.from(".g",{
  
     duration: 10, 
  repeat: -1,
  fill: "darkslateblue" ,
  stagger: .5, 
  ease: 'elastic',
  
  
})

gsap.to("#L",{
  
  fill: "white",
  duration: 5,
  
})

gsap.to(".E",{
  
  fill: "white",
  stagger: 1,
  ease: 'elastic',
  duration: 2,
  
  
})

gsap.to(".lamppair",{
  
   duration: .5,
  fill: 'white',
  delay: 7,
  scale: 1.25,
  
 
  
})


  
  
